"use client";
import Link from "next/link";
import Button from "./ui/button";
import Logo from "./ui/logo";
import CrossIcon from "@/assets/cross.svg";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import YoutubeIcon from "@/assets/youtube.svg";

import MaxWidthWrapper from "./max-width-wrapper";
import { useState } from "react";
import { cn } from "@/lib/utils";
import HamburgerIcon from "./svgs/hamburger-icon";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useActiveLinkContext } from "./providers/ActiveLinkProvider";
import { useRouter } from "next/navigation";
//

const navLinks = [
  {
    id: "hero",
    text: "Início",
    href: "/#hero",
  },
  {
    id: "services",
    text: "Serviços",
    href: "/#services",
  },
  {
    id: "about-us",
    text: "Sobre",
    href: "/#about-us",
  },
  {
    id: "contact-us",
    text: "Contáctanos",
    href: "/#contact-us",
  },
];

//

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [{ y }] = useWindowScroll();
  const { activeLinkId, setActiveLinkId } = useActiveLinkContext();
  const toggleMenu = () => setIsOpen(!isOpen);
  const isScrolling = (y || 0) > 0;
  const router = useRouter();

  const navigateToPage = (url: string) => router.push(url);

  //

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        {
          "bg-primary-green": isScrolling || isOpen,
        },
        {
          "bg-primary-green-light": !isScrolling && !isOpen,
        },
      )}
    >
      <MaxWidthWrapper className="relative flex items-center justify-between py-4">
        <Link href="/">
          <Logo isScrolling={isScrolling || isOpen} />
        </Link>
        {/*    Mobile Navigation Toggle */}
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <CrossIcon fill="white" />
          ) : (
            <HamburgerIcon stroke={isScrolling ? "#fff" : "#00856F"} />
          )}
        </button>
        {/*   Mobile Navigation Menu */}
        <div
          className={cn(
            "absolute left-0 top-[72px] h-[calc(100dvh_-_72px)] w-[100dvw] origin-top bg-primary-green duration-300 ease-in-out lg:hidden",
            {
              "pointer-events-none scale-y-0": !isOpen,
            },
            {
              "pointer-events-auto scale-y-100": isOpen,
            },
          )}
        >
          <nav className="flex min-h-full min-w-full flex-col items-center justify-center gap-[80px] text-white">
            <div className="flex flex-col items-center justify-center gap-[48px]">
              {navLinks.map(({ id, href, text }) => (
                <Link
                  key={id}
                  href={href}
                  className={cn(
                    "rounded-xl px-6 py-3 text-[24px] font-bold leading-6 hover:bg-black/20",
                  )}
                  onClick={() => {
                    setActiveLinkId(href.substring(2));
                    navigateToPage(href);
                    toggleMenu();
                  }}
                >
                  {text}
                </Link>
              ))}
              <Button variant="secondary" className="bg-white">
                AGENDE SUA CONSULTA
              </Button>
            </div>
            <div className="flex gap-[32px]">
              <button className="p-4">
                <InstagramIcon />
              </button>
              <button className="p-4">
                <FacebookIcon />
              </button>
              <button className="p-4">
                <YoutubeIcon />
              </button>
            </div>
          </nav>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden gap-[32px] lg:flex">
          {navLinks.map(({ id, text, href }) => (
            <Link
              key={id}
              href={href}
              onClick={() => {
                setActiveLinkId(href.substring(2));
                navigateToPage(href);
              }}
              className={cn(
                "relative rounded-full px-4 py-2 text-primary-green opacity-60 hover:bg-black/10",
                {
                  "text-white": isScrolling,
                },
                { "font-bold opacity-100": activeLinkId === id },
              )}
            >
              {text}
              {activeLinkId === id && (
                <div
                  className={cn(
                    "absolute -bottom-[18px] h-[2px] w-full -translate-x-4 rounded-full bg-primary-green transition-colors duration-300",
                    { "bg-white": isScrolling },
                  )}
                ></div>
              )}
            </Link>
          ))}
        </nav>
        <Button
          className={cn("hidden lg:block", {
            "border-white bg-primary-green text-white": isScrolling,
          })}
          variant="secondary"
        >
          AGENDAR CONSULTA
        </Button>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
