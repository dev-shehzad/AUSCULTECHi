import React from "react";
import { motion } from "framer-motion";

export default function DigitalAuscultation() {
  // Base animation variant
  const baseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 1, // Increased delay for staggered animation
        duration: 0.8,
        ease: "easeOut"
      },
    }),
  };

  // Custom animation variants with adjusted delays
  const machineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1.2, ease: "easeOut" } // Adjusted delay
    }
  };

  const wirelessVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 0.8, ease: "easeOut" } // Adjusted delay
    }
  };

  const mobileVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 0.8, ease: "easeOut" } // Adjusted delay
    }
  };

  const dotLineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 2, duration: 0.8, ease: "easeOut" } // Adjusted delay
    }
  };

  const airpodsVariants = {
    hidden: { opacity: 0, scale: 2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 2.1, duration: 0.8, ease: "easeOut" } // Adjusted delay
    }
  };

  const cloudVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 2.4, duration: 1.2, ease: "easeOut" } // Adjusted delay
    }
  };

  const laptopVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 3, duration: 1.2, ease: "easeOut" } // Adjusted delay
    }
  };

  return (
    <div className="container max-w-6xl max-md:overflow-hidden mx-auto px-4 py-8 md:py-16">
      <img src="/homepage/bg3.png" alt="" className="absolute left-[7%] max-md:left-0" />
      <div className="grid lg:grid-cols-[40%_60%] gap-4 md:gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-4 md:space-y-6"
          initial="hidden"
          animate="visible"
          variants={baseVariants}
          custom={0}
        >
          <h1 className="text-3xl md:text-4xl font-[200] font-sfui lg:text-[40px] text-[#D64D47]">
            Digital Auscultation Platform
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Our digital auscultation platform allows for seamless recording,
            classification, cloud-based storage, and sharing of heart and lung sounds
          </p>
          <button
            className="rounded-full px-6 md:px-8 py-1 text-sm md:text-base border-2 border-[#E94E3C] text-[#E94E3C] hover:bg-[#E94E3C] hover:text-white transition-colors"
          >
            Explore
          </button>
        </motion.div>

        {/* Diagram Section */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] w-full">
          <motion.div
            className="absolute top-[5%] right-[33%]"
            variants={cloudVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/digital.png"
              alt="Cloud Storage"
              className="w-[60px] sm:w-[80px] md:w-[100px] object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute top-[15%] right-[50%]"
            variants={baseVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <img
              src="/animate/curverarrowrigt.png"
              alt="Arrow Left"
              className="w-[50px] sm:w-[60px] md:w-[80px]"
            />
          </motion.div>

          <motion.div
            className="absolute top-[15%] right-[22%]"
            variants={baseVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <img
              src="/animate/curvearrowdown.png"
              alt="Arrow Right"
              className="w-[50px] sm:w-[60px] md:w-[80px]"
            />
          </motion.div>

          <motion.div
            className="absolute left-[0%] top-[40%]"
            variants={machineVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/machine.png"
              alt="Digital Stethoscope"
              className="w-[100px] sm:w-[130px] md:w-[170px]"
            />
          </motion.div>

          <motion.div
            className="absolute flex gap-2 md:gap-4 left-[19%] top-[50%]"
            variants={wirelessVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/waweright.png"
              alt="Wireless Connection"
              className="w-[20px] md:w-[30px]"
            />
            <img
              src="/animate/waweleft.png"
              alt="Wireless Connection"
              className="w-[20px] md:w-[30px]"
            />
          </motion.div>

          <motion.div
            className="absolute left-[31%] top-[33%]"
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/mobile.png"
              alt="Mobile Application"
              className="w-[60px] sm:w-[80px] md:w-[100px]"
            />
          </motion.div>

          <motion.div
            className="absolute left-[47%] top-[45%]"
            variants={dotLineVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/arrowright.png"
              alt="Connection Line"
              className="w-[30px] md:w-[40px]"
            />
          </motion.div>

          <motion.div
            className="absolute left-[24%] top-[45%]"
            variants={dotLineVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/arrowright.png"
              alt="Connection Line"
              className="w-[30px] md:w-[40px]"
            />
          </motion.div>

          <motion.div
            className="absolute right-[37%] top-[43%]"
            variants={airpodsVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/airpods.png"
              alt="Wireless Earphones"
              className="w-[30px] sm:w-[40px] md:w-[60px]"
            />
          </motion.div>

          <motion.div
            className="absolute -right-[6%] max-md:-right-[2%] top-[35%]"
            variants={laptopVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/animate/laptop.png"
              alt="Laptop Interface"
              className="w-[200px] sm:w-[250px] max-md:w-[150px] md:w-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
