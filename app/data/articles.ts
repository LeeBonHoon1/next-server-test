export interface Article {
  id: number;
  title: string;
  description: string;
  generation: string;
  type: "기획" | "개발" | "디자인";
  thumbnailUrl: string;
  author: string;
  createdAt: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title:
      "대학생 인턴을 다른 채용 플랫폼이 아닌, 터닝(terning)으로 찾아야 하는 이유! | Disquiet*",
    description:
      "안녕하세요, 대학생 인턴 플랫폼, 터닝(terning)의 팀리더 남지우입니다 :) 내 계획에 딱! 맞는 인턴을 찾고 계신가요? 터닝에서는 대학생 맞춤 채용 정보를 제공하고 있습니다...",
    generation: "34기",
    type: "기획",
    thumbnailUrl: "/images/articles/article1.jpg",
    author: "남지우",
    createdAt: "2025-04-23T14:30:00+09:00",
    tags: ["채용", "인턴", "기획", "서비스"],
  },
  {
    id: 2,
    title: "UI도 두들겨 보고 건너라 - modifier 알아보기",
    description:
      "안녕하세요, 한끼족보의 Android 개발자 송혜음입니다 한끼족보 Android는 100% compose로 작성되었습니다 여러분은 Compose를 잘 알고 계신가요? 사실 Compose는 ...",
    generation: "36기",
    type: "개발",
    thumbnailUrl: "/images/articles/article2.jpg",
    author: "송혜음",
    createdAt: "2025-04-09T10:15:00+09:00",
    tags: ["Android", "Compose", "UI", "개발"],
  },
  {
    id: 3,
    title: "디자인 시스템 구축기 - 기초부터 심화까지",
    description:
      "안녕하세요, SOPT Design System을 담당하고 있는 김서영입니다. 이번 글에서는 디자인 시스템을 어떻게 구축했는지, 그리고 어떤 과정을 거쳐 발전시켰는지 공유하려고 합니다...",
    generation: "35기",
    type: "디자인",
    thumbnailUrl: "/images/articles/article3.jpg",
    author: "김서영",
    createdAt: "2025-04-15T09:20:00+09:00",
    tags: ["디자인시스템", "UI/UX", "컴포넌트"],
  },
  {
    id: 4,
    title: "Next.js 13으로 마이그레이션 하기",
    description:
      "안녕하세요, SOPT 웹 서비스를 담당하고 있는 이준호입니다. 이번에 Next.js 13으로 마이그레이션을 진행하면서 겪은 경험과 해결 방법을 공유하고자 합니다...",
    generation: "34기",
    type: "개발",
    thumbnailUrl: "/images/articles/article4.jpg",
    author: "이준호",
    createdAt: "2025-04-18T16:45:00+09:00",
    tags: ["Next.js", "마이그레이션", "웹개발"],
  },
  {
    id: 5,
    title: "서비스 기획자의 첫 프로젝트 도전기",
    description:
      "처음 서비스 기획자로서 프로젝트에 참여하게 되었을 때의 이야기를 공유합니다. 어떻게 문제를 정의하고, 해결 방안을 도출했는지, 그리고 팀원들과 어떻게 협업했는지...",
    generation: "36기",
    type: "기획",
    thumbnailUrl: "/images/articles/article5.jpg",
    author: "박민지",
    createdAt: "2025-04-20T11:30:00+09:00",
    tags: ["서비스기획", "프로젝트관리", "협업"],
  },
  {
    id: 6,
    title: "SwiftUI로 애니메이션 구현하기",
    description:
      "SwiftUI에서 다양한 애니메이션을 구현하는 방법을 소개합니다. 기본적인 애니메이션부터 복잡한 인터랙션까지, 실제 프로젝트에서 사용한 예시와 함께 설명합니다...",
    generation: "35기",
    type: "개발",
    thumbnailUrl: "/images/articles/article6.jpg",
    author: "김태현",
    createdAt: "2025-04-12T13:20:00+09:00",
    tags: ["iOS", "SwiftUI", "애니메이션"],
  },
  {
    id: 7,
    title: "효과적인 UX 리서치 방법론",
    description:
      "사용자 경험을 개선하기 위한 다양한 리서치 방법론을 소개합니다. 인터뷰, 설문조사, 사용성 테스트 등 실제 프로젝트에서 활용한 방법들을 공유합니다...",
    generation: "34기",
    type: "디자인",
    thumbnailUrl: "/images/articles/article7.jpg",
    author: "이하은",
    createdAt: "2025-04-05T15:40:00+09:00",
    tags: ["UX리서치", "사용자경험", "디자인"],
  },
  {
    id: 8,
    title: "Spring Boot 성능 최적화 이야기",
    description:
      "대용량 트래픽을 처리하기 위한 Spring Boot 애플리케이션 최적화 경험을 공유합니다. 캐싱, 쿼리 최적화, 비동기 처리 등 다양한 기법을 다룹니다...",
    generation: "33기",
    type: "개발",
    thumbnailUrl: "/images/articles/article8.jpg",
    author: "최진우",
    createdAt: "2025-04-02T09:50:00+09:00",
    tags: ["Spring Boot", "성능최적화", "백엔드"],
  },
  {
    id: 9,
    title: "프로덕트 매니저의 데이터 기반 의사결정",
    description:
      "데이터를 기반으로 한 의사결정 프로세스와 그 중요성에 대해 이야기합니다. 실제 프로젝트에서 데이터를 어떻게 활용했는지, 어떤 인사이트를 얻었는지 공유합니다...",
    generation: "35기",
    type: "기획",
    thumbnailUrl: "/images/articles/article9.jpg",
    author: "정다은",
    createdAt: "2025-03-28T14:15:00+09:00",
    tags: ["프로덕트매니저", "데이터분석", "의사결정"],
  },
  {
    id: 10,
    title: "디자인 시스템 컴포넌트 설계하기",
    description:
      "재사용 가능한 디자인 시스템 컴포넌트를 설계하는 방법과 원칙에 대해 설명합니다. Figma를 활용한 실제 작업 과정과 협업 방식을 공유합니다...",
    generation: "36기",
    type: "디자인",
    thumbnailUrl: "/images/articles/article10.jpg",
    author: "한소희",
    createdAt: "2025-03-25T11:10:00+09:00",
    tags: ["디자인시스템", "컴포넌트", "Figma"],
  },
];
