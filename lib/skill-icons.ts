import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faDatabase,
  faFileCode,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export const skillIcons = {
  bootstrap: faBootstrap,
  "code-branch": faCodeBranch,
  css3: faCss3Alt,
  database: faDatabase,
  "file-code": faFileCode,
  git: faGitAlt,
  html5: faHtml5,
  javascript: faJs,
  "node-js": faNodeJs,
  php: faPhp,
  react: faReact,
  tailwind: faWind,
} satisfies Record<string, IconDefinition>;

export type SkillIconKey = keyof typeof skillIcons;
