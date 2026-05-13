import Button from "../ui/Button";
import CodeWindow from "../ui/CodeWindow";
import SectionTag from "../ui/SectionTag";

export default function About() {
  return (
    <>
      <SectionTag>
        {"<sobre-mim>"}
      </SectionTag>

      <section
        id="sobre"
        className="
          px-gutter
          pb-12
          pt-8
          md:pb-16
        "
      >
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">

              <img
                src="assets/kaique.jpeg"
                alt="Kaique Araujo"
                className="
                  h-16
                  w-16
                  rounded-full
                  border-2
                  border-primary
                  object-cover
                "
              />

              <span
                className="
                  rounded-full
                  border
                  border-primary/30
                  px-4
                  py-1
                  font-mono
                  text-sm
                  text-primary
                "
              >
                FRONTEND DEVELOPER
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-none text-on-surface md:text-7xl">
              Desenvolvedor Frontend
            </h1>

            <h2 className="text-3xl font-semibold text-on-surface-variant">
              Olá, eu sou o Kaique Araujo
            </h2>

            <p className="max-w-xl text-lg text-on-surface-variant">
              Crio interfaces modernas, responsivas e com foco em performance.
              Atualmente desenvolvendo projetos práticos e evoluindo minhas habilidades para o mercado.
            </p>

            <div className="flex gap-4 pt-4">
              <Button>
                Ver Projetos
              </Button>

              <Button variant="secondary">
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <CodeWindow />
        </div>
      </section>

      <SectionTag>
        {"</sobre-mim>"}
      </SectionTag>
    </>
  );
}