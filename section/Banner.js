import Typewriter from 'typewriter-effect';
import Link from 'next/link';

// 1. Get Your Construction Project Started Now
// 2. Professional Construction Services for Your Needs
// 3. Quality Construction Solutions for Every Budget
// 4. Experienced Construction Professionals at Your Service
// 5. Quality Craftsmanship and Attention to Detail
// 6. Get the Job Done Right with Our Expert Team
// 7. Quality Construction Services for Your Home or Business
// 8. Get the Best Results with Our Professional Team
// 9. Get the Job Done Right with Our Experienced Team
// 10. Quality Construction Solutions for Every Project
// 11. Professional Construction Services for Your Needs
// 12. Get the Best Results with Our Experienced Team
// 13. Quality Craftsmanship and Attention to Detail
// 14. Get the Job Done Right with Our Professional Team
// 15. Quality Construction Solutions for Every Budget

// 1. Our Mission
// 2. Our Vision
// 3. Our Values
// 4. Our History
// 5. Our Team
// 6. Our Services
// 7. Our Clients
// 8. Testimonials
// 9. FAQs
// 10. Contact Us
// 11. Careers

function Banner() {
  return (
    <section
      id="home"
      className="relative brightness-70 w-full h-auto overflow-hidden bg-kontruksi bg-cover"
    >
      <div className="relative h-[80vh] max-w-sm md:max-w-2xl text-left mt-[25%] md:mt-[10%] ml-4 md:ml-48 text-white">
        <h1 className="flex font-bold h-72 text-5xl md:text-7xl mt-60">
          <Typewriter
            options={{
              strings: ['Quality <br> Craftsmanship and Attention to Detail'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <a href="#portofolio">
          <button className="mt-10 px-4 h-9 w-auto opacity-70 bg-white hover:bg-red-600 md:px-0 text-sm font-semibold md:text-md  rounded-full">
            <p className="px-5 text-black hover:text-white">see our profile</p>
          </button>
        </a>
      </div>
      <div className="absolute top-0 w-auto h-auto"></div>
    </section>
  );
}

export default Banner;
