// src/data/skillDetailData.ts

export const skillDetailData: Record<
  string,
  {
    title: string;
    blogUrl?: string;
    notionUrl?: string;
  }
> = {
  python: {
    title: "Python",
    notionUrl: "https://www.notion.so/8f450966d7f544268b4adbdd8c426a5e?pvs=4",
  },
  javascript: {
    title: "JavaScript",
    blogUrl: "https://velog.io/@kms990415/series/learnJS",
  },
  react: {
    title: "React",
    blogUrl: "https://velog.io/@kms990415/series/learnReact",
  },
  vue: {
    title: "Vue",
    notionUrl: "https://www.notion.so/Vue-1304ad2d3e4180b98a15f62be139138e",
  },
  typescript: {
    title: "TypeScript",
    blogUrl: "https://velog.io/@kms990415/series/learnTypeScript",
  },
  next: {
    title: "Next",
    blogUrl: "https://velog.io/@kms990415/series/learnNextjs",
  },
  django: {
    title: "Django",
    notionUrl: "https://www.notion.so/Django-f5e4e08ee35b4f9a849739a8eb1bedad",
  },
  tailwind: {
    title: "TailwindCss",
    blogUrl: "https://velog.io/@kms990415/series/learnTailwindCSS",
  },
};
