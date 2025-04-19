import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    activity_records: {
      member: 198,
      project: 25,
      study: 105,
    },
  });
}
