import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Fixed to cover entire viewport */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero.jpg"
          className="object-cover"
          fill
          priority
          alt="Mountains and forests with two cabins"
          quality={85}
          sizes="100vw"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-br from-primary-900/50 to-accent-500/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl  md:text-7xl lg:text-8xl text-primary-50 mb-8 tracking-tight font-bold leading-tight">
          Innvandrerforum I{" "}
          <span className="text-accent-400 block">Østfold</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Vi arbeider for å støtte og inkludere minoritetsungdom og familier,
          med særlig fokus på å motvirke sosial ekskludering, ensomhet og
          utenforskap.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-accent-500 px-8 py-4 text-primary-900 text-lg font-semibold rounded-lg hover:bg-accent-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[160px]"
          >
            Kontakt oss
          </Link>
          <Link
            href="/about"
            className="border-2 border-primary-200 px-8 py-4 text-primary-100 text-lg font-semibold rounded-lg hover:bg-primary-200/10 transition-all duration-300 transform hover:scale-105 min-w-[160px]"
          >
            Les mer
          </Link>
        </div>
      </div>
    </main>
  );
}
