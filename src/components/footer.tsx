import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { FooterProps } from "../../types";

export default function Footer({ services }: FooterProps) {
  return (
    <div className="dark:text-white">
      <div className="dark:bg-gray-950 bg-gray-100 min-h-[500px] flex justify-center items-center p-4">
        <div className="flex flex-col items-center gap-10 w-full max-w-[1200px] px-4">
          {/* Newsletter Section */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-semibold">Join Our Newsletter</h1>
            <p className="max-w-[500px] text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              minus maiores vitae itaque eum provident.
            </p>
          </div>

          {/* Subscription Input */}
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center w-full max-w-[500px]">
            <input
              type="text"
              name="subscribe"
              id="subscribe"
              className="p-3 w-full md:w-[300px] outline-none text-black rounded-md md:rounded-l-md"
              placeholder="Enter email for weekly newsletter."
            />
            <button className="bg-blue-500 p-3 w-full md:w-auto rounded-md md:rounded-r-md text-white">
              Subscribe
            </button>
          </div>

          {/* Footer Content */}
          <div className="flex flex-wrap justify-center items-start gap-10 lg:gap-20 w-full">
            {/* Logo & Contact */}
            <div className="max-w-[400px] flex flex-col gap-4 text-center md:text-left">
              <h1 className="text-2xl font-semibold">LOGO</h1>
              <p className="text-sm">Location, address</p>
              <div className="flex flex-col gap-2">
                <p className="text-sm">godfredquarm123@gmail.com</p>
                <p className="text-sm">+233 54 540 5939</p>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-6">
                <Instagram />
                <Facebook />
                <Youtube />
                <Twitter />
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap justify-center gap-10">
              {[
                {
                  title: "Explore",
                  links: ["About Us", "Bookmarks", "Sign Up"],
                },
                {
                  title: "Customer Service",
                  links: [
                    "Contact Us",
                    "Help Center",
                    "Store Pickup",
                    "Accessibility",
                  ],
                },
                {
                  title: "Policy",
                  links: [
                    "Return Policy",
                    "Terms Of Use",
                    "Security",
                    "Privacy",
                  ],
                },
                { title: "Services", links: services },
              ].map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 text-center md:text-left"
                >
                  <h1 className="text-xl font-semibold">{section.title}</h1>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link, idx) => (
                      <Link href={"#"} key={idx} className="text-sm">
                        {typeof link === "string" ? link : link.heading}
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
