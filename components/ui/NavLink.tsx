type Props = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export default function NavLink({
  href,
  children,
  active = false,
}: Props) {
  return (
    <a
      href={href}
      className={`
        transition-colors duration-200
        cursor-pointer
        active:scale-95
        hover:text-on-surface

        ${
          active
            ? "text-primary font-bold border-b-2 border-primary pb-1"
            : "text-on-surface-variant"
        }
      `}
    >
      {children}
    </a>
  );
}