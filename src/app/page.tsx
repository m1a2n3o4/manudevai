import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyLearnCoding from "@/components/WhyLearnCoding";
import MeetTrainer from "@/components/MeetTrainer";
import AIInCourse from "@/components/AIInCourse";
import Outcomes from "@/components/Outcomes";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyLearnCoding />
        <MeetTrainer />
        <AIInCourse />
        <Outcomes />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
