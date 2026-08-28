import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutPlans from "./components/WorkoutPlans";
import TrainingSchedule from "./components/TrainingSchedule";
import Nutrition from "./components/Nutrition";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080a09] font-sans text-zinc-100 selection:bg-[#d7ff35] selection:text-[#080a09]">
      <Navbar />
      
      <main>
        <Hero />
        <WorkoutPlans />
        <TrainingSchedule />
        <Nutrition />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}