import type { Metadata } from "next";
import LegalShell, {
  Callout,
  DashList,
  DataTable,
  InfoGrid,
  KoOrderedList,
  OrderedList,
  Paragraph,
  type LegalSection,
} from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "계정 및 데이터 삭제 안내 | cup+",
  description:
    "cup+(컵플러스) 앱의 계정 및 개인정보 삭제 요청 방법을 안내합니다. 앱 내 직접 삭제와 이메일을 통한 삭제 요청 절차, 삭제·보존되는 데이터 항목을 확인하실 수 있습니다.",
};

const EFFECTIVE_DATE = "2026년 6월 25일";

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "안내",
    content: (
      <>
        <Paragraph>
          본 페이지는 <b>cup+(컵플러스, 패키지명 com.jiseosiyu.cupplus.cupplus)</b> 앱
          이용자가 본인의 계정과 관련 개인정보의 삭제를 요청하는 방법을 안내합니다. 회사
          「지서지유」는 「개인정보 보호법」에 따라 이용자의 삭제 요청을 지체 없이
          처리합니다.
        </Paragraph>
        <Callout>
          가장 빠른 방법은 앱 내 <b>마이 &gt; 설정 &gt; 계정 삭제</b> 메뉴를 이용하는 것입니다.
          앱에 접근할 수 없는 경우에는 아래 이메일을 통해 삭제를 요청할 수 있습니다.
        </Callout>
      </>
    ),
  },
  {
    id: "in-app",
    title: "앱에서 직접 삭제하기 (권장)",
    content: (
      <>
        <Paragraph>
          앱에 로그인할 수 있는 경우, 다음 절차를 통해 직접 계정을 삭제할 수 있습니다. 삭제는
          즉시 처리되며 별도의 승인 대기 없이 완료됩니다.
        </Paragraph>
        <KoOrderedList
          items={[
            "cup+ 앱을 실행하고 로그인합니다.",
            "하단 탭에서 “마이” 화면으로 이동합니다.",
            "“설정” 메뉴를 엽니다.",
            "“계정 삭제”를 선택합니다.",
            "안내 문구를 확인한 뒤 삭제를 확정하면 계정과 관련 데이터가 삭제됩니다.",
          ]}
        />
        <Paragraph>
          계정 삭제 시 앱 내 매니저 계정, 등록한 회원 프로필, 채팅 내용 등 서비스 이용 데이터가
          삭제 또는 비공개 처리됩니다. 단, 관련 법령에 따라 일정 기간 보존이 의무화된 정보는
          아래 “보존되는 데이터” 항목과 같이 분리 보관 후 파기됩니다.
        </Paragraph>
      </>
    ),
  },
  {
    id: "by-email",
    title: "이메일로 삭제 요청하기",
    content: (
      <>
        <Paragraph>
          기기 분실, 로그인 불가 등으로 앱에서 직접 삭제할 수 없는 경우 아래 이메일로 삭제를
          요청할 수 있습니다. 본인 확인 후 처리됩니다.
        </Paragraph>
        <InfoGrid
          rows={[
            {
              label: "요청 이메일",
              value: (
                <a
                  href="mailto:myclick90@gmail.com?subject=%5Bcup%2B%5D%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD"
                  className="font-medium text-coral hover:underline"
                >
                  myclick90@gmail.com
                </a>
              ),
            },
            { label: "제목", value: "[cup+] 계정 삭제 요청" },
            { label: "처리 기간", value: "요청 접수 및 본인 확인 후 영업일 기준 7일 이내" },
          ]}
        />
        <Paragraph>
          원활한 본인 확인과 처리를 위해 이메일 본문에 다음 정보를 기재해 주세요.
        </Paragraph>
        <DashList
          items={[
            "가입 시 사용한 이메일 주소 또는 소셜 로그인(구글/카카오/애플) 계정",
            "가입한 닉네임(있는 경우)",
            "삭제 요청 사유(선택)",
          ]}
        />
        <Callout>
          타인의 계정을 무단으로 삭제하는 것을 방지하기 위해, 회사는 요청자가 계정 본인임을
          확인할 수 있는 추가 자료를 요청할 수 있습니다.
        </Callout>
      </>
    ),
  },
  {
    id: "deleted-data",
    title: "삭제되는 데이터",
    content: (
      <>
        <Paragraph>
          계정 삭제 요청이 처리되면 다음 데이터가 삭제 또는 즉시 비공개 처리됩니다.
        </Paragraph>
        <DashList
          items={[
            "매니저 계정 정보: 이름, 닉네임, 이메일, 소셜 로그인 식별자",
            "매니저가 등록한 회원 프로필 정보 및 사진",
            "매니저 간 채팅 메시지 및 공유 이미지",
            "매칭 요청·수락·거절 등 매칭 활동 기록",
            "푸시 알림 토큰(FCM Token)",
            "이상형 조건, 일정 등 서비스 이용 과정에서 생성된 데이터",
          ]}
        />
      </>
    ),
  },
  {
    id: "retained-data",
    title: "법령에 따라 일정 기간 보존되는 데이터",
    content: (
      <>
        <Paragraph>
          관련 법령상 보존 의무가 있거나 분쟁 대응에 필요한 일부 정보는 계정 삭제 후에도 아래
          기간 동안 다른 데이터와 분리하여 안전하게 보관한 뒤 파기됩니다. 이 정보는 보존 목적
          외의 용도로 이용되지 않습니다.
        </Paragraph>
        <DataTable
          headers={["보존 항목", "보존 기간", "근거"]}
          rows={[
            ["결제·구독 기록", "5년", "전자상거래 등에서의 소비자보호에 관한 법률"],
            ["계약·동의 기록(IP, 기기정보 포함)", "5년", "전자상거래법 등 분쟁 대응"],
            [
              "매니저 자격 인증 서류",
              "인증 결과 통지 후 6개월",
              "부정 인증 재발 방지",
            ],
            ["접속 로그(IP 등)", "3개월", "통신비밀보호법"],
            ["부정이용 기록", "1년", "서비스 부정이용 방지"],
          ]}
        />
        <Paragraph>
          보존 기간이 경과한 정보는 재생할 수 없는 기술적 방법으로 영구 삭제됩니다.
        </Paragraph>
      </>
    ),
  },
  {
    id: "contact",
    title: "문의",
    content: (
      <>
        <Paragraph>
          계정 및 데이터 삭제와 관련한 문의는 개인정보 보호책임자에게 연락해 주세요.
        </Paragraph>
        <InfoGrid
          rows={[
            { label: "상호", value: "지서지유" },
            { label: "개인정보 보호책임자", value: "임준섭 (대표)" },
            { label: "연락처", value: "010-5402-7908" },
            {
              label: "이메일",
              value: (
                <a
                  href="mailto:myclick90@gmail.com"
                  className="font-medium text-coral hover:underline"
                >
                  myclick90@gmail.com
                </a>
              ),
            },
          ]}
        />
        <Paragraph>
          개인정보 처리에 관한 전반적인 사항은{" "}
          <a href="/privacy" className="font-medium text-coral hover:underline">
            개인정보처리방침
          </a>
          에서 확인하실 수 있습니다.
        </Paragraph>
      </>
    ),
  },
];

export default function AccountDeletionPage() {
  return (
    <LegalShell
      eyebrow="Account Deletion"
      title="계정 및 데이터 삭제 안내"
      subtitle="cup+ 이용자는 본인의 계정과 관련 개인정보의 삭제를 언제든지 요청할 수 있습니다."
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
    />
  );
}
