import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Course Curriculum & Roadmap — 12 Week AI Full Stack Developer Program",
  description:
    "Complete week-by-week roadmap for the DevAI AI Full Stack Developer Program. 12 weeks, 12 deployed projects, MERN + AI, live classes in Telugu. See exactly what you'll learn each week.",
  openGraph: {
    title: "DevAI Course Roadmap — 12 Week AI Full Stack Developer Program",
    description:
      "Complete week-by-week roadmap. 12 weeks, 12 deployed projects, MERN + Next.js + AI. From foundation to real-time apps and production deployment.",
    url: "https://devai.coach/curriculum",
  },
};

export default function CurriculumPage() {
  return (
    <>
      <Navbar />
      <main>
        <CurriculumRoadmap />
      </main>
      <Footer />
    </>
  );
}
