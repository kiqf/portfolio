import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import skills from "@/data/skills.json";
import { skillIcons } from "@/lib/skill-icons";

import { SectionContainer } from "./section-container";

type SkillItem = {
  icon: string | null;
  name: string;
};

type SkillGroup = {
  items: SkillItem[];
  title: string;
};

const skillGroups = skills as SkillGroup[];

function getSkillInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function SkillsSection() {
  return (
    <SectionContainer id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-black/10 bg-neutral-50 p-6"
          >
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
              {group.title}
            </h3>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {group.items.map((skill) => (
                <li
                  key={`${group.title}-${skill.name}`}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3"
                >
                  {skill.icon && skill.icon in skillIcons ? (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-base text-white">
                      <FontAwesomeIcon
                        icon={skillIcons[skill.icon as keyof typeof skillIcons]}
                        title={skill.name}
                      />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-xs font-semibold text-white">
                      {getSkillInitials(skill.name)}
                    </span>
                  )}

                  <span className="text-sm font-medium text-neutral-700">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
