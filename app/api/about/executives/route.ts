import { withCors } from "@/app/lib/cors";

const executives = [
  {
    name: "유재혁",
    position: "스터디장",
    university: "이화여대",
    team: "confeti",
    message: "NextDev와 함께 정상을 향하여!",
    email: "opsizks4@gmail.com",
    linkedin: "opsizks4@gmail.com",
    imageUrl: "",
  },
  {
    name: "김다은",
    position: "스터디원",
    university: "이화여대",
    team: "confeti",
    message: "NextDev와 함께 정상을 향하여!",
    email: "opsizks4@gmail.com",
    linkedin: "opsizks4@gmail.com",
    imageUrl: "",
  },
  {
    name: "장성근",
    position: "스터디원",
    university: "이화여대",
    team: "confeti",
    message: "NextDev와 함께 정상을 향하여!",
    email: "opsizks4@gmail.com",
    linkedin: "opsizks4@gmail.com",
    imageUrl: "",
  },
  {
    name: "이본훈",
    position: "스터디원",
    university: "이화여대",
    team: "confeti",
    message: "NextDev와 함께 정상을 향하여!",
    email: "opsizks4@gmail.com",
    linkedin: "opsizks4@gmail.com",
    imageUrl: "",
  },
];

export async function GET() {
  return withCors({ executives });
}
