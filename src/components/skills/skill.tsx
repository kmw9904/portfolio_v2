import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function Skill({
  color,
  icon,
  skill,
  detail,
}: {
  id: string;
  color: string;
  icon: IconDefinition;
  skill: string;
  detail: string;
}) {
  return (
    <article className="flex min-h-36 flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-center shadow-md transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-800">
      <FontAwesomeIcon className={`text-3xl ${color}`} icon={icon} />
      <h3 className="mt-3 text-base font-semibold">{skill}</h3>
      <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
        {detail}
      </p>
    </article>
  );
}
