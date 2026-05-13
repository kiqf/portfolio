type Props = {
  children: React.ReactNode;
};

export default function SectionTag({ children }: Props) {
  return (
    <div className="mx-auto max-w-container-max px-gutter">
      <span className="code-tag">
        {children}
      </span>
    </div>
  );
}