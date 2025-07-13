import React from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import client1 from "../../assets/about/cl1.png?url";
import client2 from "../../assets/about/cl2.png?url";
import client3 from "../../assets/about/cl3.png?url";
import client4 from "../../assets/about/cl4.png?url";
import client5 from "../../assets/about/cl5.png?url";
import client6 from "../../assets/about/cl6.png?url";
import client7 from "../../assets/about/cl7.png?url";
import client8 from "../../assets/about/cl8.png?url";

const ClientHome = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];

  // Duplicate the array to create seamless looping
  const duplicatedClients = [...clients, ...clients];
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame;
    let speed = 1; // pixels per frame
    let position = 0;
    const marqueeWidth = marquee.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      // Reset position when half of marquee has scrolled
      if (position <= -marqueeWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      speed = 0.2;
    };
    const handleMouseLeave = () => {
      speed = 1;
    };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Scroll animation trigger
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      className="py-16 bg-gray-50 overflow-hidden"
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          variants={itemVariants}
        >
          Trusted by Leading Companies
        </motion.h2>

        <motion.div
          className="relative h-32 overflow-hidden"
          variants={itemVariants}
        >
          {/* Marquee Container */}
          <motion.div
            ref={marqueeRef}
            className="absolute top-0 left-0 flex items-center h-full will-change-transform"
            initial={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:opacity-100"
                style={{ opacity: 0.7, filter: "grayscale(30%)" }}
                whileHover={{
                  scale: 1.15,
                  opacity: 1,
                  filter: "grayscale(0%)",
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={client}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className="h-16 object-contain max-w-xs"
                  draggable="false"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fades */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClientHome;
