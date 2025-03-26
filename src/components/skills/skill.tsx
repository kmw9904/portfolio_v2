import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function Skill({
  color,
  icon,
  skill,
}: {
  color: string;
  icon: IconDefinition;
  skill: string;
}) {
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
      <FontAwesomeIcon className={`text-4xl ${color}`} icon={icon} />
      <h3 className="text-lg font-semibold">{skill}</h3>
    </div>
  );
}
