import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col text-black-100 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="footer__link">
              <h3 className="font-bold">{footerLink.title}</h3>
              <div className="flex flex-col gap-5">
                {footerLink.links.map((link) => (
                  <Link key={link.title} href={link.url} className="text-gray-500">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyrights">
        <div>
          <p>@2023 CarHub.</p>
          <p>All rights reserved</p>
        </div>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
