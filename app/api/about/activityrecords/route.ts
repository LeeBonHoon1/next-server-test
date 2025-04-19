import { withCors } from "@/app/lib/cors";

export async function GET() {
  return withCors({
    activity_records: {
      member: 198,
      project: 25,
      study: 105,
    },
  });
}
