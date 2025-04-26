import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <h1 className="z-10 text-white text-4xl">Hello World!</h1>
    </div>
  );
}
