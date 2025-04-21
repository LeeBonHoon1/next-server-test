export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  users: number;
}

export const recentProjects: Project[] = [
  {
    id: "1",
    title: "엄빠도 어렸다",
    description: "부모-자식이 추억을 공유하며 공감대를 찾아가는 서비스",
    imageUrl: "/images/projects/project1.png",
    users: 32,
  },
  {
    id: "2",
    title: "위니",
    description: "긍정적인 소비 습관을 만드는 절약 SNS",
    imageUrl: "/images/projects/project2.png",
    users: 32,
  },
  {
    id: "3",
    title: "모임지기",
    description: "소모임 일정 관리와 회비 정산을 한번에",
    imageUrl: "/images/projects/project3.png",
    users: 28,
  },
];
