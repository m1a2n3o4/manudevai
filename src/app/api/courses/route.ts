import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const courses = await prisma.course.findMany({
    include: { modules: { orderBy: { order: "asc" } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(courses);
}
