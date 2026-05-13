import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <button
      className={cn(
        "rounded-lg px-8 py-3 font-bold transition-all duration-200 active:scale-95",

        variant === "primary" &&
          "bg-primary text-on-primary hover:opacity-90",

        variant === "secondary" &&
          "border border-outline-variant text-on-surface hover:bg-surface-container-high"
      )}
    >
      {children}
    </button>
  );
}