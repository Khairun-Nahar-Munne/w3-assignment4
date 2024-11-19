// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Gallery from '@/components/Gallery';
import RoomDetailsAndSpaces from '@/components/RoomDetailsAndSpaces';
import AboutProperty from '@/components/AboutProperty';
import QuestionSearch from '@/components/QuestionSearch';
import HouseRules from '@/components/HouseRules';
import Footer from '@/components/Footer';
import VacationListing from '@/components/VacationListing';
import ReviewsSection from '@/components/ReviewsSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juneau Vacation Home: Stunning View + Beach Access</title>
        <meta name="description" content="Hotel booking application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <main>
          {/* Your main content goes here */}
          <Banner />
          <Gallery />
          <VacationListing />
          <RoomDetailsAndSpaces />
          <AboutProperty />
          <QuestionSearch />
          <HouseRules/>
          <ReviewsSection />
        </main>
        <footer>
          <Footer/>
        
        </footer>
      </div>
    </>
  );
};

export default Home;