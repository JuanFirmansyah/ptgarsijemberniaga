import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function WeDo() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 4,
        },
      }),
        animation2.start({
          x: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 4,
          },
        });
      animation3.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: '-100px',
        opacity: 0,
      });
      animation2.start({
        x: '100px',
        opacity: 0,
      });
      animation3.start({
        x: 0,
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <section ref={ref}>
      <div id="service" className=" w-full h-16 mt-36"></div>
      <div className="relative font-body w-full h-auto justify-center mx-auto">
        <div className="flex flex-row max-w-7xl w-full h-auto text-white md:justify-left items-center pt-28 md:pt-0 md:pl-0 pl-4">
          <motion.p
            animate={animation}
            className="flex text-5xl md:text-7xl text-left w-full"
          >
            What&nbsp;<span className="font-bold">we do</span>
          </motion.p>
        </div>

        {/* Left */}
        <div className="flex flex-row w-full h-auto justify-center mt-6 px-3">
          <motion.div
            animate={animation}
            className="flex flex-row w-full mt-14 h-auto text-center flex-nowrap items-center"
          >
            <div className="relative w-[49%] md:w-[33%] h-56">
              <div className="block brightness-50 h-full w-full">
                <Image
                  className="rounded-xl"
                  src="/bts1.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="w-[49%] md:w-[33%] text-white text-left ml-9 text-base">
              <p className="pl-3 pb-2 font-semibold">film production</p>
              <p>* company profile video</p>
              <p>* official music video</p>
              <p>* official after movie</p>
            </div>
            <div className="w-[1%] md:w-[33%] h-full invisible"></div>
          </motion.div>
        </div>
        {/* Right */}
        <motion.div
          animate={animation2}
          className="flex flex-row w-full h-auto justify-center px-3"
        >
          <div className="flex flex-row w-full mt-14 h-auto text-center flex-nowrap items-center">
            <div className="w-[49%] md:w-[33%] text-white text-left text-base">
              <p className="pl-3 pb-2 font-semibold">Brand Advertising</p>
              <p>* product design</p>
              <p>* social media design</p>
              <p>* product photography</p>
            </div>
            <div className="w-[1%] md:w-[33%] h-full invisible"></div>
            <div className="relative w-[49%] md:w-[33%] h-56">
              <div className="block brightness-50 h-full w-full">
                <Image
                  className="rounded-xl"
                  src="/bts2.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* Left 2 */}
        <motion.div
          animate={animation}
          className="flex flex-row w-full h-auto justify-center px-3"
        >
          <div className="flex flex-row w-full mt-14 h-auto text-center flex-nowrap items-center">
            <div className="relative w-[49%] md:w-[33%] h-56">
              <div className="block brightness-50 h-full w-full">
                <Image
                  className="rounded-xl"
                  src="/bts4.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="w-[49%] md:w-[33%] text-white text-left ml-9 text-base">
              <p className="pl-3 pb-2 font-semibold">content creation</p>
              <p>* podcast</p>
              <p>* talk show</p>
              <p>* social media</p>
            </div>
            <div className="w-[1%] md:w-[33%] h-full invisible"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WeDo;
