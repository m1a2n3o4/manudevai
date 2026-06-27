import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Courses
  const fullstackCourse = await prisma.course.create({
    data: {
      title: "AI-Powered Fullstack Development",
      description:
        "Master modern fullstack development with AI tools. Learn to build production-ready apps using React, Next.js, Node.js, and integrate AI capabilities into every layer of your stack.",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      price: 4999,
      featured: true,
      modules: {
        create: [
          { title: "Foundations of Web Development", duration: "2 Weeks", order: 1 },
          { title: "React & Next.js Mastery", duration: "3 Weeks", order: 2 },
          { title: "Backend & Database Design", duration: "2 Weeks", order: 3 },
          { title: "AI Integration & Prompt Engineering", duration: "2 Weeks", order: 4 },
          { title: "DevOps, Testing & Deployment", duration: "1 Week", order: 5 },
          { title: "Capstone Project", duration: "2 Weeks", order: 6 },
        ],
      },
    },
  });

  await prisma.course.create({
    data: {
      title: "AI for Frontend Engineers",
      description:
        "Learn how to leverage AI in your frontend workflow. From AI-assisted coding to building intelligent UIs with machine learning APIs.",
      duration: "6 Weeks",
      level: "Intermediate",
      price: 2999,
      featured: false,
      modules: {
        create: [
          { title: "AI-Assisted Development Workflow", duration: "1 Week", order: 1 },
          { title: "Building Smart UI Components", duration: "2 Weeks", order: 2 },
          { title: "Integrating ML APIs", duration: "2 Weeks", order: 3 },
          { title: "Project & Portfolio", duration: "1 Week", order: 4 },
        ],
      },
    },
  });

  await prisma.course.create({
    data: {
      title: "AI Backend & API Development",
      description:
        "Build robust backends powered by AI. Learn to create intelligent APIs, work with vector databases, and deploy AI-driven microservices.",
      duration: "8 Weeks",
      level: "Intermediate to Advanced",
      price: 3999,
      featured: false,
      modules: {
        create: [
          { title: "Node.js & API Design Patterns", duration: "2 Weeks", order: 1 },
          { title: "Database & Vector Stores", duration: "2 Weeks", order: 2 },
          { title: "AI Service Integration", duration: "2 Weeks", order: 3 },
          { title: "Deployment & Scaling", duration: "2 Weeks", order: 4 },
        ],
      },
    },
  });

  // Seed Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Priya Sharma",
        role: "Software Engineer at Google",
        content:
          "DevAI completely transformed my career. The AI-integrated curriculum gave me skills that are incredibly relevant in today's market. Landed my dream job within 2 months of completing the course!",
        rating: 5,
      },
      {
        name: "Rahul Mehta",
        role: "Freelance Developer",
        content:
          "The hands-on projects and real-world AI integration made all the difference. I now build AI-powered apps for clients and charge 3x what I used to. Best investment I've made.",
        rating: 5,
      },
      {
        name: "Ananya Reddy",
        role: "Tech Lead at Flipkart",
        content:
          "What sets DevAI apart is the depth of the curriculum. It's not just theory — you build real products. The capstone project alone was worth the entire course fee.",
        rating: 5,
      },
      {
        name: "Vikram Patel",
        role: "Startup Founder",
        content:
          "I used what I learned at DevAI to build my startup's MVP in just 3 weeks. The AI tools and fullstack skills gave me an unfair advantage. Highly recommended!",
        rating: 4,
      },
    ],
  });

  console.log("Database seeded successfully!");
  console.log(`Created course: ${fullstackCourse.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
