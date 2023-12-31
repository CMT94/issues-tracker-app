import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(1, "A complete title is required.").max(255),
  description: z
    .string()
    .min(1, "A complete description is required.")
    .max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET() {
  const issues = await prisma.issue.findMany();
  if (!issues) {
    return NextResponse.json("Issues not found.", { status: 400 });
  }
  return NextResponse.json(issues, { status: 200 });
}
