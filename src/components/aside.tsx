import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faTimes, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Aside({
  isOpen,
  setIsOpen,
  theme,
  setTheme,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: "light" | "dark" | "system" | undefined;
  setTheme: (theme: "light" | "dark" | "system") => void;
}) {
  return (
    <aside
      className={`dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen transition-colors block md:hidden fixed top-0 right-0 inset-y-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="p-2 m-4 text-gray-700 cursor-pointer"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="flex flex-col items-start p-6 space-y-4">
        <a href="" className="hover:text-blue-500 transition-colors">
          홈
        </a>
        <a href="" className="hover:text-blue-500 transition-colors">
          소개
        </a>
        <a href="" className="hover:text-blue-500 transition-colors">
          기술
        </a>
        <a href="" className="hover:text-blue-500 transition-colors">
          프로젝트
        </a>
        <a href="" className="hover:text-blue-500 transition-colors">
          연락처
        </a>
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FontAwesomeIcon
            icon={theme === "light" ? faSun : faMoon}
            className="text-yellow-400"
          />
        </button>
      </div>
    </aside>
  );
}
