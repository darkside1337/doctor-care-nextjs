"use client";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { useActiveLinkContext } from "@/components/providers/ActiveLinkProvider";
import Services from "@/components/services";

export default function Home() {
  const { setActiveLinkId } = useActiveLinkContext();
  return (
    <>
      <Hero id={"hero"} setActiveLinkId={setActiveLinkId} />
      <Services id={"services"} setActiveLinkId={setActiveLinkId} />
      <AboutUs id={"about-us"} setActiveLinkId={setActiveLinkId} />
      <ContactUs id={"contact-us"} setActiveLinkId={setActiveLinkId} />
    </>
  );
}
