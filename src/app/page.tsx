import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="z-10 bg-white/5 backdrop-blur-[2px] rounded-3xl p-12 w-full max-w-4xl mx-auto min-h-[400px] flex flex-col items-center justify-center border border-white/20 shadow-2xl shadow-white/5">
        <h1 className="text-white text-5xl font-bold mb-6 text-center">Hello Vision 🌌</h1>
        <p className="text-white/80 text-lg text-center max-w-2xl">
          Welcome to the future. Here's a beautiful panel inspired by Vision Pro.
        </p>
      </div>
    </div>
  );
}