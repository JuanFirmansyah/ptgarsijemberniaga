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
            Our Partner
          </motion.span>
        </div>
        <div className="flex justify-center text-center w-full h-auto">
          <motion.p
            animate={animation2}
            className=" text-lg text-black my-6 tracking-widest mt-6 px-3 pt-8 w-[538px]"
          >
            "we do extraordinary projects with extraordinary partners"
          </motion.p>
        </div>
        <motion.div
          animate={animation}
          className="flex flex-row flex-1 flex-wrap gap-8 h-auto w-full mt-16 mx-auto text-xl md:text-5xl justify-center"
        >
          <Link href="/projects/prolog-fest">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px] bg-abipraya bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                abipraya
              </p>
            </div>
          </Link>
          <Link href="/projects/livinmille">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-esdm bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                esdm
              </p>
            </div>
          </Link>
          <Link href="/projects/prolog-fest">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-hutamakarya bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                hustama karya
              </p>
            </div>
          </Link>
          <Link href="https://www.instagram.com/p/CPFkk_bld6P/">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-idx bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                idx
              </p>
            </div>
          </Link>
          <Link href="/projects/bni-syariah">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-perhubungan bg-cover cursor-pointer bg-center md:text-xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                kementrian perhubungan
              </p>
            </div>
          </Link>
          <Link href="/projects/hecate">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px] bg-pertanian bg-cover cursor-pointer bg-center md:text-2xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                kementrian pertanian
              </p>
            </div>
          </Link>
          <Link href="https://www.instagram.com/p/CMRs8suFuzK/">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-pu bg-cover cursor-pointer bg-center md:text-2xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                kementrian pu
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-laut bg-cover cursor-pointer bg-center md:text-2xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                kementrian kelautan
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-mabesad bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                mabes ad
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-mabesal bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                mabes al
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-mabesau bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                mabes au
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-mabespolri bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-8 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                mabes polri
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-pembangunanperumahan bg-cover cursor-pointer bg-center md:text-xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                pembangunan perumahan
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-pln bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                pln
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-waskita bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                waskita
              </p>
            </div>
          </Link>
          <Link href="/projects/pagon">
            <div className="flex text-center items-center w-[45%]  md:w-[120px] h-[120px]  bg-wika bg-cover cursor-pointer bg-center md:text-3xl">
              <p className="w-full h-full font-semibold text-white drop-shadow-md transform transition-all pt-48 opacity-0 hover:opacity-100 hover:pt-10 delay-100 z-30 hover:bg-black hover:bg-opacity-40">
                wika
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </selection>
  );
}

export default OurService;
