"use client";

import { useState } from "react";
import { Logo } from "./header/Logo";
import { Nav, NavItem } from "./header/Nav";
import { BurgerButton } from "./header/BurgerButton";
import { MobileMenu } from "./header/MobileMenu";
import { LinkHeader } from "./header/LinkHeader";
import { Button } from "./header/Button";

const defaultNavItems: NavItem[] = [
  {
    label: "Courses",
    href: "#",
    className: "text-[#656770] font-sans text-sm leading-6 font-normal",
  },
  {
    label: "For Teams",
    href: "#",
    className: "text-[#656770] font-sans text-sm leading-6 font-normal",
  },
  {
    label: "Community",
    href: "#",
    className: "text-[#656770] font-sans text-sm leading-6 font-normal",
  },
  {
    label: "About",
    href: "#",
    className: "text-[#656770] font-sans text-sm leading-6 font-normal",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden md:flex md:items-center md:space-x-6">
          <Nav items={defaultNavItems} />
        </div>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <LinkHeader
            href="#"
            label="Log in"
            className="text-[#656770] font-sans text-sm leading-6 font-normal"
          />
          <Button href="/#" variant="primary" label="Start learning" />
        </div>

        <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} items={defaultNavItems}>
        <LinkHeader
          href="/#"
          label="Log in"
          className=" text-[#656770] font-sans text-sm leading-6"
        />
        <Button
          href="/#"
          variant="primary"
          label="Start learning"
          className="w-full text-center"
        />
      </MobileMenu>
    </header>
  );
}
