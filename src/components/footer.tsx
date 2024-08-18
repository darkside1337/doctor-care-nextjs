import MaxWidthWrapper from "./max-width-wrapper";
import LogoFooter from "./svgs/logo-footer";
import InstagramIcon from "@/assets/instagram.svg";
import FacebookIcon from "@/assets/facebook.svg";
import YoutubeIcon from "@/assets/youtube.svg";
const Footer = () => {
  return (
    <footer className="h-[285px] bg-primary-green text-primary-beige lg:h-[268px]">
      <MaxWidthWrapper className="flex h-full flex-col items-start justify-center gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <LogoFooter className="h-[31px] w-[236px] lg:h-[33px] lg:w-[256px]" />
          <p className="mt-[24px]">©{new Date().getFullYear()} Beautysalon.</p>
          <p className="mt-[12px]">Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-8 justify-self-start">
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
