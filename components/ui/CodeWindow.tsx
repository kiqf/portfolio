export default function CodeWindow() {
  return (
    <div className="relative hidden md:block">

      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative rounded-2xl border border-outline-variant/30 bg-surface-container p-8">

        <div className="mb-6 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-secondary" />
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>

        <div className="space-y-4 font-mono text-sm">

          <p className="text-tertiary">
            <span className="text-primary">const</span>{" "}
            <span className="text-on-surface">
              kaique
            </span>{" "}
            =
            {" {"}
          </p>

          <p className="pl-6 text-on-surface-variant">
            role:{" "}
            <span className="text-primary">
              "Frontend Engineer"
            </span>,
          </p>

          <p className="pl-6 text-on-surface-variant">
            focus:{" "}
            <span className="text-primary">
              ["UI/UX", "Performance"]
            </span>,
          </p>

          <p className="pl-6 text-on-surface-variant">
            stack:{" "}
            <span className="text-primary">
              ["React", "TypeScript", "Tailwind"]
            </span>,
          </p>

          <p className="pl-6 text-on-surface-variant">
            coffeeConsumption:{" "}
            <span className="text-secondary">
              Infinity
            </span>
          </p>

          <p className="text-tertiary">{"};"}</p>
        </div>
      </div>
    </div>
  );
}