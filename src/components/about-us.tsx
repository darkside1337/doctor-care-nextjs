import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import AboutUsImage from "@/assets/about-us.png";
import { SectionType } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const AboutUs = ({ id, setActiveLinkId }: SectionType) => {
  const { ref: aboutUsRef, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveLinkId(id);
    }
  }, [id, inView, setActiveLinkId]);
  return (
    <motion.section
      id={id}
      ref={aboutUsRef}
      className="bg-primary-beige py-[200px] lg:py-[320px]"
      /* framer motion stuff */
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <MaxWidthWrapper className="flex flex-col items-center gap-[60px] lg:flex-row lg:gap-[68px]">
        <div className="lg:order-2">
          <p className="mb-[16px] text-[14px] font-bold tracking-[0.08rem] text-primary-green lg:mb-[10px]">
            SOBRE NÓS
          </p>
          <h2 className="mb-[24px] text-[30px] font-bold text-secondary-gray-headline lg:max-w-[447px] lg:text-[40px]">
            Entenda quem somos e por que existimos
          </h2>
          <p className="text-secondary-gray-paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
        <Image
          draggable={false}
          src={AboutUsImage}
          alt="Doctor smilling at a young kid"
          className="lg:order-1"
        />
      </MaxWidthWrapper>
    </motion.section>
  );
};

export default AboutUs;
