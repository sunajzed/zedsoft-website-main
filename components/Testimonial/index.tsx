"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `OUR CLIENTS`,
              subtitle: `What Our Clients Say`,
              description: `We are committed to delivering top-notch digital solutions in both web development and digital marketing. Hear from our clients who have experienced significant growth and success through our tailored services. Their testimonials reflect our dedication to excellence and innovation.`,
            }}
          />
        </div>
        {/* Section Title End */}
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        {/* Slider Container */}
        <div className="swiper testimonial-01 mb-20 pb-22.5">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review?.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
