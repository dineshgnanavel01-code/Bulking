import React, { useState } from "react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    goal: "Lean Mass Gain",
    experience: "Intermediate (1-3 yrs)",
    daysPerWeek: "4 Days/Week",
  });

  const handleOpenModal = () => {
    setMobileOpen(false);
    setStep(1);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNavClick = (e, link) => {
    if (link.name === "Get Started") {
      e.preventDefault();
      handleOpenModal();
      return;
    }

    if (link.href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      const targetId = link.href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-full items-center justify-between px-6 lg:px-10">

          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, { name: "Home", href: "#home" })}
            className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-zinc-950">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M14.4 14.4 9.6 9.6M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767-1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829zM2.515 5.343l6.364 6.364a2 2 0 1 1 2.829-2.829L9.94 7.11a2 2 0 1 1-2.829-2.828L5.343 2.515a2 2 0 1 1-2.828 2.828z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"/>
              </svg>
            </div>

            <span className="text-xl font-black tracking-tight text-white">
              BULK<span className="text-lime-400">LAB</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-lime-400">
                {link.name}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleOpenModal}
            className="hidden rounded-full bg-lime-400 px-6 py-2.5 text-sm font-bold text-zinc-950 transition-all hover:bg-white lg:inline-block">
            Start Training
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-zinc-300 transition hover:text-lime-400 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}>
            {mobileOpen ? (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-zinc-950 px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-base font-medium text-zinc-300 transition hover:text-lime-400">
                  {link.name}
                </a>
              ))}

              <button
                type="button"
                onClick={handleOpenModal}
                className="mt-2 w-full rounded-xl bg-lime-400 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-white">
                Start Training
              </button>
            </nav>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={handleClose}>
          <div
            className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-900 p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute right-6 top-6 text-xl text-zinc-400 transition hover:text-white">
              ×
            </button>

            <div className="mb-6 flex items-center gap-2">
              {[1, 2, 3, 4].map((currentStep) => (
                <div
                  key={currentStep}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    currentStep <= step ? "bg-lime-400" : "bg-zinc-800"
                  }`}/>
              ))}
            </div>

            {step === 1 && (
              <div>
                <h3 className="text-2xl font-black">Select Your Primary Goal</h3>
                <p className="mt-2 text-sm text-zinc-400">Step 1 of 3</p>
                <div className="mt-6 space-y-3">
                  {["Lean Mass Gain", "Dirty Bulk", "Strength Focus"].map((goal) => (
                    <button
                      type="button"
                      key={goal}
                      onClick={() => updateFormData("goal", goal)}
                      className={`w-full rounded-2xl border p-4 text-left font-bold transition ${
                        formData.goal === goal
                          ? "border-lime-400 bg-lime-400/10 text-lime-400"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                      }`}>
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-2xl font-black">Experience Level</h3>
                <p className="mt-2 text-sm text-zinc-400">Step 2 of 3</p>
                <div className="mt-6 space-y-3">
                  {["Beginner (0-1 yrs)", "Intermediate (1-3 yrs)", "Advanced (3+ yrs)"].map((experience) => (
                    <button
                      type="button"
                      key={experience}
                      onClick={() => updateFormData("experience", experience)}
                      className={`w-full rounded-2xl border p-4 text-left font-bold transition ${
                        formData.experience === experience
                          ? "border-lime-400 bg-lime-400/10 text-lime-400"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                      }`}>
                      {experience}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-2xl font-black">Weekly Training Frequency</h3>
                <p className="mt-2 text-sm text-zinc-400">Step 3 of 3</p>
                <div className="mt-6 space-y-3">
                  {["3 Days/Week", "4 Days/Week", "5-6 Days/Week"].map((days) => (
                    <button
                      type="button"
                      key={days}
                      onClick={() => updateFormData("daysPerWeek", days)}
                      className={`w-full rounded-2xl border p-4 text-left font-bold transition ${
                        formData.daysPerWeek === days
                          ? "border-lime-400 bg-lime-400/10 text-lime-400"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20"
                      }`}>
                      {days}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-2xl font-black text-lime-400">Your Plan is Ready!</h3>
                <p className="mt-2 text-sm text-zinc-400">Customized protocol based on your selections:</p>
                <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">Goal</span>
                    <span className="text-right font-bold text-white">{formData.goal}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">Experience</span>
                    <span className="text-right font-bold text-white">{formData.experience}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">Schedule</span>
                    <span className="text-right font-bold text-white">{formData.daysPerWeek}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 w-full rounded-2xl bg-lime-400 py-3 font-bold text-zinc-950 transition hover:bg-white">
                  Access Program
                </button>
              </div>
            )}

            {step < 4 && (
              <div className="mt-8 flex justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/5">
                    Back
                  </button>
                ) : (
                  <div />
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-xl bg-lime-400 px-6 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-white">
                  Next Step
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}