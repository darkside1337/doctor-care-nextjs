import { SectionType } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./ui/button";
import Image from "next/image";
import WhatsAppIcon from "@/assets/whatsapp.svg";
import ContactUsImage from "@/assets/contact-us.png";
import MapIcon from "@/assets/map-pin.svg";
import MailIcon from "@/assets/mail.svg";
import MaxWidthWrapper from "./max-width-wrapper";

//

const ContactUs = ({ id, setActiveLinkId }: SectionType) => {
  const { ref: contactUsRef, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveLinkId(id);
    }
  }, [id, inView, setActiveLinkId]);
  return (
    <section ref={contactUsRef} id={id} className="my-[100px] lg:my-[160px]">
      <MaxWidthWrapper className="flex flex-col items-center gap-[60px] lg:flex-row lg:gap-[142px]">
        <div>
          <h2 className="mb-8 text-[30px] font-bold text-secondary-gray-headline lg:max-w-[404px] lg:text-[40px]">
            Entre em contato com a gente!
          </h2>
          <div className="mb-4 flex items-center gap-2 text-secondary-gray-paragraph">
            <MapIcon />
            <p>R. Amauri Souza, 346</p>
          </div>
          <div className="mb-8 flex items-center gap-2 text-secondary-gray-paragraph">
            <MailIcon />
            <p>contato@doctorcare.com</p>
          </div>
          <Button variant="primary" className="max-w-[268px] gap-4 lg:mx-0">
            <WhatsAppIcon />
            AGENDE SUA CONSULTA
          </Button>
        </div>
        <Image
          src={ContactUsImage}
          alt="smiling black man staring at his phone"
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUs;
