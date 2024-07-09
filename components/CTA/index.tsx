// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const CTA = () => {
//   return (
//     <>
//       {/* <!-- ===== CTA Start ===== --> */}
//       <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
//         <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
//           <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_left md:w-[70%] lg:w-1/2"
//             >
//               <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
//                 Join With Us Today & Increase Your Productivity
//               </h2>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
//                 convallis tortor eros. Donec vitae tortor lacus. Phasellus
//                 aliquam ante in maximus.
//               </p>
//             </motion.div>
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: 20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_right lg:w-[45%]"
//             >
//               <div className="flex items-center justify-end xl:justify-between">
//                 <Image
//                   width={299}
//                   height={299}
//                   src="/images/shape/shape-06.png"
//                   alt="Saly"
//                   className="hidden xl:block"
//                 />
//                 <a
//                   href="signup.html"
//                   className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
//                 >
//                   Sign up free
//                   <Image
//                     width={20}
//                     height={20}
//                     src="/images/icon/icon-arrow-dark.svg"
//                     alt="Arrow"
//                     className="dark:hidden"
//                   />
//                   <Image
//                     width={20}
//                     height={20}
//                     src="/images/icon/icon-arrow-light.svg"
//                     alt="Arrow"
//                     className="hidden dark:block"
//                   />
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== CTA End ===== --> */}
//     </>
//   );
// };

// export default CTA;
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                Contact Us at ZedsoftTech for Web Development and SEO Services
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">           ZedsoftTech excels in creating responsive websites and enhancing your online presence with expert SEO strategies. Let's build your digital success together.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
            <div className="flex items-center justify-end xl:justify-between">
  <Image
    width={299}
    height={299}
    src="/images/shape/shape-06.png"
    alt="Saly"
    className="hidden xl:block"
  />
  <a
    href="https://wa.me/+917909179006"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-gradient-to-r from-[#4AC959] to-[#16CDD5] px-4 py-2 rounded-lg shadow-md hover:opacity-90 text-white dark:bg-gradient-to-r dark:from-[#1F2937] dark:to-[#374151]"
    style={{ maxWidth: "fit-content" }}
  >
    <Image
      width={32}
      height={32}
      src="/images/icon/social.png"
      alt="WhatsApp"
      className="dark:hidden"
    />
    <Image
      width={32}
      height={32}
      src="/images/icon/whatsapp.png"
      alt="WhatsApp"
      className="hidden dark:block"
    />
    <span className="text-lg font-semibold">
       WhatsApp us
    </span>
  </a>
</div>

            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;

