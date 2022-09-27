import type { NextPage } from 'next';
import { useEffect } from 'react';
import FeaturesHighlight from '../lib/views/index/FeaturesHighlight';
import FloatingTitle from '../lib/views/index/FloatingTitle';
import Hero from '../lib/views/index/Hero';
import LandingFooter from '../lib/views/index/LandingFooter';
import VideoPlayer from '../lib/views/index/VideoPlayer';
import { ScrollTrigger } from '../lib/utils/gsap';

const Home: NextPage = () => {
  let timeout: NodeJS.Timeout;
  const refreshScrollTrigger = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', refreshScrollTrigger);

    return () => {
      window.removeEventListener('resize', refreshScrollTrigger);
    };
  }, []);

  return (
    <>
      <div className="main">
        <Hero />
        <VideoPlayer />

        <FloatingTitle topTitle="See Gamma" coloredTitle="in action" />

        <FeaturesHighlight />

        <LandingFooter />

        {/* <div className="filler"></div> */}
      </div>

      <style jsx>
        {`
          .main {
            height: 100%;
            width: 100%;
            background: linear-gradient(180deg, #faf2e9, rgba(250, 242, 233, 0));
          }

          .filler {
            height: 400vh;
          }
        `}
      </style>
    </>
  );
};

export default Home;
