"use client";

import { useState } from "react";
import { Mail, Github, BookOpenText } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [autoMessage, setAutoMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "name") {
      setAutoMessage(`${value}님, 안녕하세요! 메시지를 작성해 주세요.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result);
          alert("메일이 성공적으로 전송되었습니다!");
        },
        (error) => {
          console.log(error);
          alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
        }
      );
  };

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-left">연락처</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 이메일 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              이름
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={handleChange}
              value={formData.name}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              이메일
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              메시지
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              onChange={handleChange}
              value={formData.message}
              placeholder={autoMessage}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
          >
            이메일 보내기
          </button>
        </form>

        {/* SNS */}
        <div className="flex flex-col items-start justify-center gap-4">
          <a
            href="https://github.com/kmw9904"
            target="_blank"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </a>
          <a
            href="https://velog.io/@kms990415/posts"
            target="_blank"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <BookOpenText className="w-5 h-5" />
            <span>Velog</span>
          </a>
          <a
            href="mailto:kms990415@naver.com"
            target="_blank"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>kms990415@naver.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
