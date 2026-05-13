import NavLink from "../ui/NavLink";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter py-base md:py-6">

        {/* Logo */}
        <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
          KAIQUE ARAUJO
        </span>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink href="#sobre" active>
            Sobre
          </NavLink>

          <NavLink href="#skills">
            Skills
          </NavLink>

          <NavLink href="#projetos">
            Projetos
          </NavLink>

          <a
            href="#contato"
            className="
              rounded-full
              bg-primary
              px-6
              py-2
              font-bold
              text-on-primary
              transition-all
              duration-200
              cursor-pointer
              hover:opacity-90
              active:scale-95
            "
          >
            Contato
          </a>
        </div>

        {/* Mobile Button */}
        <button className="text-on-surface md:hidden">
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}