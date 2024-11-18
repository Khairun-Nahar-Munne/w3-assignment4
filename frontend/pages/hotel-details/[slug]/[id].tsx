import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Hotel } from "@/types/hotel";
import HotelInfo from "@/components/HotelDetails/HotelInfo";
import Gallery from "@/components/HotelDetails/Gallery";
import Amenities from "@/components/HotelDetails/Amenites";
import RoomList from "@/components/HotelDetails/RoomList";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutProperty from "@/components/AboutProperty";
import QuestionSearch from "@/components/QuestionSearch";
import HouseRules from "@/components/HouseRules";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

interface Props {
  hotel: Hotel;
}

const HotelDetails: NextPage<Props> = ({ hotel }) => {
  if (!hotel) {
    return null;
  }

  return (
    <>
      <Header />
      <main>
        {/* Your main content goes here */}
        <Banner />
        <Gallery images={hotel.images} />
        <Head>
          <title>{`${hotel.title} | Hotel Details`}</title>
          <meta name="description" content={hotel.description} />
          <meta property="og:title" content={hotel.title} />
          <meta property="og:description" content={hotel.description} />
          {hotel.images[0] && (
            <meta property="og:image" content={hotel.images[0]} />
          )}
        </Head>
        <div className="container mx-auto px-4 py-8">
          <HotelInfo hotel={hotel} />
          <Amenities amenities={hotel.amenities} />
          <RoomList rooms={hotel.rooms} />
        </div>
        <AboutProperty />
        <QuestionSearch />
        <HouseRules />
        <ReviewsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { slug } = params as { slug: string };

    // First, try to parse the slug as an ID (in case it's a numeric ID)
    const isId = /^\d+$/.test(slug);

    // Fetch hotel data
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hotels/${
        isId ? "id" : "slug"
      }/${slug}`
    );

    if (!response.ok) {
      // If we tried with an ID and failed, we could try with slug lookup
      if (isId) {
        const slugResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/hotels/slug/${slug}`
        );

        if (!slugResponse.ok) {
          return { notFound: true };
        }

        const hotel = await slugResponse.json();

        // If the slug doesn't match the current URL, redirect to the correct URL
        if (hotel.slug && hotel.slug !== slug) {
          return {
            redirect: {
              destination: `/hotels/${hotel.slug}`,
              permanent: true, // Use 308 permanent redirect
            },
          };
        }

        return { props: { hotel } };
      }

      return { notFound: true };
    }

    const hotel = await response.json();

    // Verify that the current URL matches the hotel's canonical slug
    if (!isId && hotel.slug && hotel.slug !== slug) {
      return {
        redirect: {
          destination: `/hotels/${hotel.slug}`,
          permanent: true, // Use 308 permanent redirect
        },
      };
    }

    return { props: { hotel } };
  } catch (error) {
    console.error("Error fetching hotel:", error);
    return { notFound: true };
  }
};

export default HotelDetails;
