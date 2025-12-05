import { sections } from '@/lib/data';
import SectionCard from '@/components/SectionCard';

export default function SectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Learning Sections
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Choose a section to begin your learning journey. Each section includes all 4 learning phases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>

      {/* Add content notice */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
          📝 Content Coming Soon
        </h3>
        <p className="text-blue-800 dark:text-blue-300">
          These are placeholder sections. As you provide Sitecore XM Cloud content for each section,
          I&apos;ll populate them with detailed materials, flashcards, and quiz questions.
        </p>
      </div>
    </div>
  );
}

