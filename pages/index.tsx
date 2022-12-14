import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Banner from '../section/Banner';
import Card from '../components/Card';
import OurService from '../section/OurService';
import OurPartner from '../section/OurPartner';
import Social from '../components/Social';
import Footer from '../section/Footer';
import FindUs from '../section/FindUs';
import WeDo from '../section/WeDo';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Banner />
      <main className="h-full w-full p-1 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-7xl h-full flex flex-1 flex-col justify-center gap-x-3">
          <OurService />
          <OurPartner />
          {/* <WeDo /> */}
          <FindUs />
        </div>
      </main>
      <Social />
      <Footer />
    </div>
  );
}
