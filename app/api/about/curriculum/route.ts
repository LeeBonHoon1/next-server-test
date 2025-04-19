import { withCors, preflight } from "@/app/lib/cors";

export async function GET() {
  return withCors({
    title: "파트별 커리큘럼",

    plan: [
      { id: 1, value: "문제 정의와 고객 시장 분석" },
      { id: 2, value: "가설 수립과 검증을 위한 리서치" },
      { id: 3, value: "기획 문서 작성법과 프리토타이핑" },
      { id: 4, value: "중간 발표 - 피치덱" },
      { id: 5, value: "전 파트 합동 세미나" },
      { id: 6, value: "비즈니스 전략과 비즈니스 모델 설계" },
      { id: 7, value: "핵심 지표 설정과 협업" },
      { id: 8, value: "기획 • 디자인 합동 세미나" },
    ],

    design: [
      { id: 1, value: "UX/UI/GUI의 기본 개념 이해하기" },
      { id: 2, value: "APP/WEB의 차이와 디자인 가이드라인" },
      { id: 3, value: "디자인 시스템 설계와 컴포넌트 관리" },
      { id: 4, value: "개발자와의 협업 대비" },
      { id: 5, value: "전 파트 합동 세미나" },
      { id: 6, value: "UX 가설 정의와 사용성 테스트" },
      { id: 7, value: "서비스 브랜딩과 UX 연계" },
      { id: 8, value: "기획 • 디자인 합동 세미나" },
    ],

    android: [
      { id: 1, value: "Android UI 구현 기초" },
      { id: 2, value: "Jetpack Navigation 및 데이터 전달" },
      { id: 3, value: "Android UI 구현 심화 및 성능 최적화" },
      { id: 4, value: "Retrofit 네트워크 통신" },
      { id: 5, value: "전 파트 합동 세미나" },
      { id: 6, value: "Coroutine & Flow" },
      { id: 7, value: "아키텍처 설계" },
      { id: 8, value: "앱잼 가이드라인" },
    ],

    ios: [
      { id: 1, value: "Xcode 사용법, UI 구현(하)" },
      { id: 2, value: "데이터 전달, UI 구현(중)" },
      { id: 3, value: "MVC 패턴, UI 구현(상)" },
      { id: 4, value: "Network 통신" },
      { id: 5, value: "전 파트 합동 세미나" },
      { id: 6, value: "SwiftUI 기초" },
      { id: 7, value: "SwiftUI 심화" },
      { id: 8, value: "반응형 프로그래밍, 앱잼 가이드라인" },
    ],

    web: [
      { id: 1, value: "HTML, CSS, JavaScript 기초" },
      { id: 2, value: "DOM + Event, React 기초" },
      { id: 3, value: "React, CSS 라이브러리" },
      { id: 4, value: "Router, API 통신, TypeScript" },
      { id: 5, value: "전 파트 합동 세미나" },
      { id: 6, value: "Tanstack Query, JavaScript 심화" },
      { id: 7, value: "합동 세미나 리뷰" },
      { id: 8, value: "웨비톡(자유 주제 발표 세미나)" },
    ],

    server: [
      { id: 1, value: "Java Programming" },
      { id: 2, value: "RESTful API 설계와 구현" },
      { id: 3, value: "Database" },
      { id: 4, value: "Deploy & Cloud" },
      { id: 5, value: "전 파트 합동 세미나" },
      { id: 6, value: "Spring Architecture" },
      { id: 7, value: "Authorization & Security" },
      { id: 8, value: "고급 실전 전략과 CI/CD Pipeline" },
    ],
  });
}

export async function OPTIONS() {
  return preflight();
}
