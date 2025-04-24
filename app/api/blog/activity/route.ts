import { activitys } from "@/app/data/activitys";
import { withCors } from "@/app/lib/cors";

export async function GET() {
  return withCors({
    activitys,
  });
}
