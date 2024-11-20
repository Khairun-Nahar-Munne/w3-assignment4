import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Hotel } from "@/types/hotel";
import HotelInfo from "@/components/HotelDetails/HotelInfo";
import Gallery from "@/components/HotelDetails/Gallery";
import RoomList from "@/components/HotelDetails/RoomList";
import Header from "@/components/Header";
import QuestionSearch from "@/components/QuestionSearch";
import HouseRules from "@/components/HouseRules";
import ReviewsSection from "@/components/ReviewsSection";
import AboutPropertyHotel from "@/components/HotelDetails/AboutPropertyHotel";
import FooterHost from "@/components/HotelDetails/FooterHost";
import BannerHotel from "@/components/HotelDetails/BannerHotel";

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
        <BannerHotel hotel={hotel} />
        <Gallery images={hotel.images} title={hotel.title} />
        <Head>
          <title>{`${hotel.title} | Hotel Details`}</title>
          <meta name="description" content={hotel.description} />
          <meta property="og:title" content={hotel.title} />
          <meta property="og:description" content={hotel.description} />
          {hotel.images[0] && (
            <meta property="og:image" content={hotel.images[0]} />
          )}
        </Head>
        <div className="container mx-auto pt-8">
          <HotelInfo hotel={hotel} />
          <RoomList rooms={hotel.rooms} />
        </div>
        <AboutPropertyHotel hotel={hotel} />
        <QuestionSearch />
        <HouseRules />
        <ReviewsSection />
      </main>
      <footer>
        <FooterHost hotel={hotel} />
      </footer>
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  try {
    // Destructure params with type assertion
    const { slug, id } = params as { slug: string; id: string };
    
    // Comprehensive validation
    if (!slug || !id || typeof slug !== 'string' || typeof id !== 'string') {
      console.error('Invalid slug or id');
      return { notFound: true };
    }

    // Fetch hotel details
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hotels/${id}`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    // Handle fetch errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Hotel fetch failed. Status: ${response.status}, Message: ${errorText}`);
      return { notFound: true };
    }

    // Parse hotel data
    const hotel = await response.json();
   
    // Strict slug validation with detailed logging
    const urlSlug = slug.toLowerCase().trim();
    const hotelSlug = hotel.slug.toLowerCase().trim();
    // Return hotel data if all validations pass
    if ( urlSlug !== hotelSlug) {
      console.error(`Slug mismatch. URL slug: ${urlSlug}, Hotel slug: ${hotelSlug}`);
      return { 
        notFound: true,
        // Optional: Redirect to correct URL
        // redirect: {
        //   destination: `/hotel-details/${hotelSlug}/${id}`,
        //   permanent: false
        // }
      };
    }
    return { 
      props: { 
        hotel 
      } 
    };
  } catch (error) {
    console.error('Unexpected error in getServerSideProps:', error);
    return { notFound: true };
  }
};

export default HotelDetails;