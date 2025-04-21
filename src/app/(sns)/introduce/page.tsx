import IntroducePageClient from "./IntroducePageClient";
import Link from "next/link";

export const metadata = {
  title: "김명원 – 상세 프로필",
};

export default function Page() {
  return (
    <>
      <header className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 mb-6">
        <div className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </header>
      <IntroducePageClient />
    </>
  );
}
