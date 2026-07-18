import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "눈누난나 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-black">개인정보처리방침</h1>
      <p className="mt-2 text-sm text-nn-muted">시행일: 2026년 7월 18일</p>

      <div className="mt-8 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold">1. 총칙</h2>
          <p className="mt-2">
            눈누난나(이하 &ldquo;서비스&rdquo;)는 미리내 스튜디오(mirinae.app, 이하
            &ldquo;운영자&rdquo;)가 운영하는 눈 건강 정보 제공 서비스입니다. 운영자는
            「개인정보 보호법」 등 관련 법령을 준수하며, 이 방침을 통해 서비스의
            개인정보 처리 현황을 알려드립니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">2. 수집하는 개인정보</h2>
          <p className="mt-2">
            <strong>서비스는 개인정보를 수집하지 않습니다.</strong> 회원가입, 로그인,
            이메일·이름·연락처 등 어떠한 개인정보 입력도 요구하지 않습니다.
          </p>
          <p className="mt-2">
            눈 운동 기록(눈누 포인트, 연속 일수 등)은 이용자의 브라우저
            로컬 저장소(localStorage)에만 저장되며, 운영자의 서버로 전송되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">3. 접속 기록 및 호스팅</h2>
          <p className="mt-2">
            서비스는 Vercel Inc.(미국)의 호스팅 인프라를 통해 제공됩니다. 이 과정에서
            호스팅 사업자가 서비스 제공·보안을 위해 IP 주소 등 최소한의 접속 기록을
            인프라 차원에서 일시적으로 처리할 수 있습니다. 운영자는 이를 별도로
            수집·저장·분석하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">4. 제3자 제공 및 처리 위탁</h2>
          <p className="mt-2">
            운영자는 개인정보를 제3자에게 제공하지 않으며, 호스팅(Vercel Inc.) 외의
            처리 위탁을 하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">5. 기록의 삭제</h2>
          <p className="mt-2">
            로컬 저장소에 저장된 운동 기록은 이용자가 브라우저의 사이트 데이터 삭제
            기능으로 언제든지 직접 삭제할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">6. 향후 변경 예고</h2>
          <p className="mt-2">
            준비 중인 모바일 앱(iOS)에는 광고(Google AdMob) 및 인앱결제 기능이 포함될
            수 있으며, 해당 기능 출시 시 관련 처리 항목을 이 방침에 추가하고 시행일을
            갱신하여 고지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">7. 개인정보 보호책임자 및 문의</h2>
          <p className="mt-2">
            책임자: 김환 (미리내 스튜디오)
            <br />
            문의: hwankim809@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">8. 방침의 변경</h2>
          <p className="mt-2">
            이 방침이 변경되는 경우 시행 7일 전부터 이 페이지를 통해 고지합니다.
          </p>
        </section>
      </div>
    </main>
  );
}
