import { navigationItems } from "./navigation-items";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#topo" className="text-sm font-semibold tracking-[0.18em] uppercase">
          Kaique Araujo
        </a>

        <nav aria-label="Navegacao principal">
          <ul className="flex items-center gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-black hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
