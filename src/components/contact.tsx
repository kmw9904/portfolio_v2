import { Mail, Github, BookOpenText } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    value: "github.com/kmw9904",
    href: "https://github.com/kmw9904",
    icon: Github,
  },
  {
    label: "기술 기록",
    value: "velog.io/@kms990415",
    href: "https://velog.io/@kms990415/posts",
    icon: BookOpenText,
  },
  {
    label: "이메일",
    value: "kms990415@naver.com",
    href: "mailto:kms990415@naver.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">연락처</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          프로젝트와 업무 범위에 관한 질문은 아래 채널로 받을 수 있습니다.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {contacts.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-lg bg-gray-100 p-5 shadow-md transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-800"
          >
            <Icon className="h-6 w-6 text-indigo-500" />
            <p className="mt-4 font-semibold">{label}</p>
            <p className="mt-1 break-all text-sm text-gray-600 dark:text-gray-400">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
