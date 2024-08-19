import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionType } from "@/lib/types";
import Button from "./ui/button";
import WhatsAppIcon from "@/assets/whatsapp.svg";
import HeroImage from "@/assets/hero-image.png";
import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
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

//

const Hero = ({ id, setActiveLinkId }: SectionType) => {
  const { ref: heroRef, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      setActiveLinkId(id);
    }
  }, [id, inView, setActiveLinkId]);
  return (
    <motion.section
      ref={heroRef}
      id={id}
      className="bg-primary-green-light pb-[197px] pt-[40px] lg:mt-0 lg:pb-[105px]"
      /* framer motion stuff */
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <MaxWidthWrapper className="relative">
        <div className="relative grid grid-cols-1 gap-[50px] lg:grid-cols-2">
          <div className="flex flex-col gap-5 text-center lg:min-w-[605px] lg:pt-[72px] lg:text-left">
            <p className="text-[14px] font-bold leading-[150%] text-primary-green">
              BOAS-VINDAS A DOCTORCARE 👋
            </p>
            <h1 className="text-[34px] font-bold leading-[130%] tracking-[0%] text-secondary-gray-headline lg:text-[52px]">
              Assistência médica simplificada para todos
            </h1>
            <p className="text-[18px] leading-[150%] text-secondary-gray-paragraph">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <Button
              variant="primary"
              className="mx-auto mt-8 max-w-[268px] gap-4 lg:mx-0"
            >
              <WhatsAppIcon />
              AGENDE SUA CONSULTA
            </Button>
          </div>
          <div className="mt-[60px] flex items-center justify-center lg:mt-0">
            <Image
              draggable={false}
              src={HeroImage}
              alt="picture of a black woman smiling"
              priority={true}
            />
          </div>
        </div>

        {/* three section block */}
        <div className="absolute left-[50%] flex min-h-[470px] w-[calc(100vw_-_32px)] max-w-[500px] translate-x-[-50%] flex-col items-center justify-center gap-[62px] rounded-md bg-primary-beige px-[72px] py-[40px] text-center shadow-md lg:min-h-0 lg:w-[calc(100%_-_248px)] lg:max-w-full lg:flex-row lg:gap-[100px] lg:px-[120px] lg:py-[60px]">
          <div>
            <p className="text-[48px] font-bold leading-snug text-secondary-gray-headline">
              +3.500
            </p>
            <p className="text-primary-green">Pacientes atendidos</p>
          </div>
          <div className="hidden h-[84px] w-[1px] bg-primary-green/50 lg:block"></div>
          <div>
            <p className="text-[48px] font-bold leading-snug text-secondary-gray-headline">
              +15
            </p>
            <p className="text-primary-green">Especialistas disponíveis</p>
          </div>
          <div className="hidden h-[84px] w-[1px] bg-primary-green/50 lg:block"></div>
          <div>
            <p className="text-[48px] font-bold leading-snug text-secondary-gray-headline">
              +10
            </p>
            <p className="text-primary-green">Anos no mercado</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </motion.section>
  );
};

export default Hero;
