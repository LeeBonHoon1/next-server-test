import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    coreValue: {
      title: "핵심 가치",
      description: "1기 NextDev가 함께 나아가고 싶은 사람입니다.",
      core_value: [
        {
          id: 1,
          title: "끈기",
          description: "포기하지 않고 해내는 끈기가 있는 사람",
        },
        {
          id: 2,
          title: "연결",
          description: "소통과 협력으로 세상과 연결되는 힘을 가진 사람",
        },
        {
          id: 3,
          title: "도약",
          description: "용기내어 함께 도약할 수 있는 사람",
        },
      ],
    },
  });
}
