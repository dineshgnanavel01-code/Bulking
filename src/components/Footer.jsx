import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Dumbbell } from "lucide-react";

import { navLinks, workoutPlans } from "../data/content";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d0c]">
      <div className="mx-auto max-w-full px-5 py-12 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b8ff3d] text-[#0b0d0c]">
                <Dumbbell size={20} />
              </div>

              <span className="text-lg font-black text-white">
                BULK<span className="text-[#b8ff3d]">LAB</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-white">
              A modern training and nutrition system designed to help you
              build muscle, increase strength and stay consistent.
            </p>

            <div className="mt-6 flex gap-2">

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:border-[#b8ff3d] hover:text-[#b8ff3d]">
                <FaInstagram size={17} />
              </a>

              <a
                href="#youtube"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:border-[#b8ff3d] hover:text-[#b8ff3d]">
                <FaYoutube size={17} />
              </a>

              <a
                href="#twitter"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:border-[#b8ff3d] hover:text-[#b8ff3d]">
                <FaTwitter size={17} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white transition-colors hover:text-[#b8ff3d]">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Programs
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {workoutPlans.map((plan) => (
                <a
                  key={plan.title}
                  href="#programs"
                  className="text-sm text-white transition-colors hover:text-[#b8ff3d]">
                  {plan.title}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 BulkLab. All rights reserved.
          </p>

          <p>
            Built for consistency. Designed for growth.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;