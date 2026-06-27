import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, mobile, email, message } = body;

  if (!name || !mobile) {
    return NextResponse.json(
      { error: "Name and mobile number are required." },
      { status: 400 }
    );
  }

  // Save to Google Sheets
  const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
  if (sheetUrl) {
    try {
      await fetch(sheetUrl, {
        method: "POST",
        body: JSON.stringify({ name, mobile, email, message }),
      });
    } catch {
      // Sheet save failed but don't block the user
    }
  }

  return NextResponse.json(
    { success: true },
    { status: 201 }
  );
}
