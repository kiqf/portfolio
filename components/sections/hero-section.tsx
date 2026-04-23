import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex items-center justify-between p-10">
      <div>
        <Image
          src="/assets/kaique.jpeg"
          alt="Foto de Rosto de Kaique sorrindo"
          width={48}
          height={48}
          className="mb-4 h-12 w-12 rounded-full object-cover"
        />

        <h1 className="text-3xl font-semibold tracking-tight">
          Olá, eu sou o Kaique Araujo
        </h1>

        <p className="mt-4 max-w-md text-base leading-7 text-neutral-600">
          Crio interfaces modernas, responsivas e com foco em performance.
          Atualmente desenvolvendo projetos práticos e evoluindo minhas habilidades para o mercado.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-right">
          Desenvolvedor Frontend
        </h2>
      </div>
    </section>
  );
}
