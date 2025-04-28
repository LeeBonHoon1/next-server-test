import { activities } from "@/app/data/activities";
import { withCors } from "@/app/lib/cors";

export async function GET() {
  return withCors({
    activities,
  });
}
