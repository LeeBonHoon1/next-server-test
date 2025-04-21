import { withCors } from "@/app/lib/cors";
import { recentProjects } from "@/app/data/projects";
export async function GET() {
  return withCors({
    projects: recentProjects,
  });
}
