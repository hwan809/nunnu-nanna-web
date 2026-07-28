import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description: "눈누난나 이용약관",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-black">이용약관</h1>
      <p className="mt-2 text-sm text-nn-muted">시행일: 2026년 7월 18일</p>

      <div className="mt-8 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold">1. 목적</h2>
          <p className="mt-2">
            이 약관은 미리내 스튜디오(이하 &ldquo;운영자&rdquo;)가 제공하는 눈누난나
            서비스(이하 &ldquo;서비스&rdquo;)의 이용 조건을 정합니다. 서비스를
            이용하면 이 약관에 동의한 것으로 봅니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">2. 서비스의 내용</h2>
          <p className="mt-2">
            서비스는 눈 운동 가이드, 휴식 리마인더 등 눈 건강 관련 정보를 무료로
            제공합니다. 운영자는 서비스의 내용을 언제든지 변경하거나 중단할 수
            있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">3. 의료 관련 고지 (중요)</h2>
          <p className="mt-2">
            <strong>
              서비스는 의료기기가 아니며, 의학적 진단·치료·처방을 대체하지 않습니다.
            </strong>{" "}
            제공되는 모든 내용은 일반적인 건강 정보이며, 눈의 통증·시력 저하 등
            증상이 있거나 지속되는 경우 반드시 안과 전문의와 상담하세요. 운동 중
            어지러움이나 불편함을 느끼면 즉시 중단하세요.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">4. 지식재산권</h2>
          <p className="mt-2">
            서비스의 캐릭터(눈누), 디자인, 콘텐츠에 대한 권리는 운영자에게 있습니다.
            운영자의 사전 동의 없이 상업적으로 이용할 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">5. 책임의 한계</h2>
          <p className="mt-2">
            서비스는 &ldquo;있는 그대로&rdquo; 무료로 제공되며, 운영자는 서비스
            이용으로 발생한 손해에 대해 관련 법령이 허용하는 범위 내에서 책임을 지지
            않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">6. 약관의 변경</h2>
          <p className="mt-2">
            약관이 변경되는 경우 시행 7일 전부터 이 페이지를 통해 고지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">7. 문의</h2>
          <p className="mt-2">support@mirinae.app</p>
        </section>
      </div>
    </main>
  );
}
