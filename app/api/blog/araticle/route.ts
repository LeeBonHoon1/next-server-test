import { articles } from "@/app/data/articles";
import { withCors } from "@/app/lib/cors";

export async function GET() {
  return withCors({
    articles,
  });
}
