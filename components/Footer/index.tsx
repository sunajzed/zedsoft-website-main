"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 2xl:px-0">
        <div className="py-16 lg:py-20">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            {/* Company Name and About Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-black dark:text-white">ZedsoftTech</h1>
              </div>
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                "Transforming ideas into exceptional web solutions with expertise in development and SEO."
              </p>
              <div className="space-y-1">
                <p className="text-gray-500 dark:text-gray-400">
                  <strong>Email:</strong> <a href="mailto:zedsoft.in@gmail.com" className="text-black dark:text-white">zedsoft.in@gmail.com</a>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <strong>Phone:</strong> <a href="tel:+917909179006" className="text-black dark:text-white">+91 79091 79006</a>
                </p>
              </div>
            </motion.div>

            {/* Social Media and Call-to-Action */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">Connect With Us</h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Follow us on social media to stay updated with the latest trends and updates.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" aria-label="Facebook" className="hover:opacity-70">
                  <Image src="/images/icon/facebook.png" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-70">
                  <Image src="/images/icon/instagram.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-70">
                  <Image src="/images/icon/whatsapp333.png" alt="whatsapp" width={24} height={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
                  <Image src="/images/icon/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-stroke py-6 text-center md:flex md:justify-between md:text-left dark:border-strokedark">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 ZedsoftTech. All Rights Reserved.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Designed by <a href="https://zedsofttech.com" className="hover:text-primary">ZedsoftTech</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
