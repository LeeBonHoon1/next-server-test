import { appJamProjects } from "@/app/data/appjam";
import { withCors } from "@/app/lib/cors";

export async function GET() {
  return withCors({
    projects: appJamProjects,
  });
}
