interface Module {
  id: string;
  title: string;
  duration: string;
  order: number;
}

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  featured: boolean;
  modules: Module[];
}

export default function CourseCard({
  title,
  description,
  duration,
  level,
  price,
  featured,
  modules,
}: CourseCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 border transition-all hover:scale-[1.02] ${
        featured
          ? "bg-gradient-to-b from-violet-950/50 to-gray-900 border-violet-500/40 shadow-lg shadow-violet-500/10"
          : "bg-gray-900 border-gray-800 hover:border-gray-700"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex flex-wrap gap-3 mb-5">
        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">{duration}</span>
        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">{level}</span>
        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
          {modules.length} Modules
        </span>
      </div>

      <div className="space-y-2 mb-6">
        {modules.map((mod) => (
          <div key={mod.id} className="flex justify-between text-sm">
            <span className="text-gray-300">{mod.title}</span>
            <span className="text-gray-500">{mod.duration}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div>
          <span className="text-3xl font-bold text-white">&#8377;{price.toLocaleString("en-IN")}</span>
        </div>
        <a
          href="#contact"
          className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
            featured
              ? "bg-violet-600 hover:bg-violet-700 text-white"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
