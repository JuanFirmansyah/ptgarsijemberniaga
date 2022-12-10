import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function OurService() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 7,
        },
      }),
        animation2.start({
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 4,
          },
        });
    }
    if (!inView) {
      animation.start({
        x: '-200px',
        opacity: 0,
      });
      animation2.start({
        x: 0,
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <selection ref={ref}>
      <div id="portofolio" className=" w-full h-16"></div>
      <div className="flex flex-col">
        <div className="flex w-full h-auto text-black text-2xl justify-center">
          <motion.span
            animate={animation2}
            className="flex text-5xl md:text-7xl font-bold text-center"
          >
            Our Recent Work
          </motion.span>
        </div>
        <div className="flex justify-center text-center w-full h-auto">
          <motion.p
            animate={animation2}
            className=" text-lg text-black my-6 tracking-widest mt-6 px-3 pt-2 w-[538px]"
          >
            "A Sampling of Our Success Stories"
          </motion.p>
        </div>
        <motion.div
          animate={animation}
          className="flex flex-row flex-1 flex-wrap gap-2 h-auto w-full mt-16 mx-auto text-xl md:text-5xl justify-center"
        >
          <Link href="/projects/prolog-fest">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px] rounded-2xl bg-prolog bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-10">
                prolog fest
              </p>
            </div>
          </Link>
          <Link href="/projects/livinmille">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-livin bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-10">
                livinmille
              </p>
            </div>
          </Link>
          <Link href="/projects/prolog-fest">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-maxx bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-10">
                maxx
              </p>
            </div>
          </Link>
          <Link href="https://www.instagram.com/p/CPFkk_bld6P/">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-dustin bg-cover cursor-pointer bg-center">
              <p className="relative w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-20">
                dustin
              </p>
            </div>
          </Link>
          <Link href="/projects/bni-syariah">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-bni bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-20">
                bni syariah
              </p>
            </div>
          </Link>
          <Link href="/projects/hecate">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px] rounded-2xl bg-hecate bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-20">
                hecate
              </p>
            </div>
          </Link>
          <Link href="/projects/ms-glow">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-msglow bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-30">
                ms glow
              </p>
            </div>
          </Link>
          <Link href="https://www.instagram.com/p/CMRs8suFuzK/">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-voldemore bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-30">
                voldemore
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-full h-[233px]  rounded-2xl bg-pagon bg-cover cursor-pointer bg-center">
              <p className="w-full h-full font-semibold text-black drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-24 delay-100 z-30">
                pagon
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </selection>
  );
}

export default OurService;
