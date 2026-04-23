export type NavigationItem = {
  href: `#${string}`;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  {
    href: "#sobre",
    label: "Sobre",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#projetos",
    label: "Projetos",
  },
  {
    href: "#contato",
    label: "Contato",
  },
];
