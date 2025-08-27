import { Badge } from "@/components/ui/badge";
import { Celebration } from "@/app/types";
import { BentoGrid } from "@/components/sections/BentoGrid";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function Celebrations() {
  const res = await fetch(`${API_BASE_URL}/api/celebrations`);
  const celebrations: Celebration[] = await res.json();

  return (
    <section
      id="celebraciones"
      className="w-full space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-pink-100/70 via-orange-50/50 to-cyan-100/60 px-4 py-10 shadow-lg lg:p-16"
    >
      <div className="space-y-4 text-center">
        <Badge variant="landing">¡Todo en celebraciones! 🎈</Badge>
        <h2 className="text-center text-3xl font-bold text-gray-900 lg:text-5xl">
          Celebramos cada
          <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
            momento especial
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg text-pretty text-gray-600">
          Desde eventos íntimos hasta grandes celebraciones, tenemos todo lo que necesitas
        </p>
      </div>

      <BentoGrid celebrations={celebrations} />
    </section>
  );
}
