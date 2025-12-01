import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content centered vertically & horizontally */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="space-y-6 backdrop-blur-sm bg-black/10 p-8 rounded-2xl">
              {/* Heading, paragraph, buttons etc */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Text Content */}
          <div className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Innvandrerforum I Østfold
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Vi arbeider for å støtte og inkludere minoritetsungdom og
              familier, med særlig fokus på å motvirke sosial ekskludering,
              ensomhet og utenforskap.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-black hover:bg-white/90 hover:scale-105 px-8 py-6 text-lg"
              >
                Les mer
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:scale-105 bg-white/10 hover:bg-white/20 px-8 py-6 text-lg border-2"
              >
                Kontakt oss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
