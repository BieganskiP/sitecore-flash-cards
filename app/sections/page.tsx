"use client";

import { sections, courses } from '@/lib/data';
import SectionCard from '@/components/SectionCard';
import { FileEdit, Sparkles, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getSelectedCourse, setSelectedCourse } from '@/lib/storage';

export default function SectionsPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(() => {
    // Initialize state from storage or default to first course
    const stored = getSelectedCourse();
    if (stored && courses.find(c => c.id === stored)) {
      return stored;
    } else if (courses.length > 0) {
      return courses[0].id;
    }
    return null;
  });

  const [isSectionsExpanded, setIsSectionsExpanded] = useState<boolean>(true);

  // Save to storage when selection changes
  useEffect(() => {
    if (selectedCourseId) {
      setSelectedCourse(selectedCourseId);
    }
  }, [selectedCourseId]);

  const handleCourseChange = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  // Get current course
  const currentCourse = courses.find(c => c.id === selectedCourseId);

  // Filter sections by current course's sectionIds (in the correct order)
  const courseSections = currentCourse
    ? currentCourse.sectionIds
        .map(id => sections.find(s => s.id === id))
        .filter((s): s is typeof sections[0] => s !== undefined)
    : [];

  if (!selectedCourseId || !currentCourse) {
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <p className="text-zinc-400">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
      {/* Header with Course Selector */}
      <div className="mb-6 lg:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Learning Sections
              </h1>
            </div>
          </div>

          {/* Course Selector */}
          {courses.length > 1 && (
            <div className="flex items-center gap-2 sm:gap-3">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
              <select
                value={selectedCourseId}
                onChange={(e) => handleCourseChange(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 text-white rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Course Header - Distinct from section cards */}
        <div className="bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 border-2 border-blue-800/50 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-lg shadow-blue-900/20">
          <div className="flex flex-col gap-4">
            {/* Course Title Row */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{currentCourse.title}</h2>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full uppercase font-bold tracking-wider shadow-md">
                    {currentCourse.level}
                  </span>
                </div>
                <p className="text-blue-100 text-sm sm:text-base mb-3">{currentCourse.description}</p>
                <div className="flex items-center gap-4 text-sm text-blue-200/80">
                  <span className="flex items-center gap-1.5">
                    <span className="font-semibold">{courseSections.length}</span> sections
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="font-semibold">~{currentCourse.estimatedHours}</span> hours
                  </span>
                </div>
              </div>
            </div>

            {/* Accordion Toggle Button */}
            <button
              onClick={() => setIsSectionsExpanded(!isSectionsExpanded)}
              className="flex items-center justify-between px-4 py-3 bg-blue-900/30 hover:bg-blue-900/50 rounded-lg transition-colors border border-blue-700/30"
            >
              <span className="text-sm font-semibold text-blue-100">
                {isSectionsExpanded ? 'Hide' : 'Show'} Course Sections
              </span>
              {isSectionsExpanded ? (
                <ChevronUp className="w-5 h-5 text-blue-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sections Grid - Collapsible */}
      {isSectionsExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
          {courseSections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      )}

      {/* Notice */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <FileEdit className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Course Content
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Each section includes detailed materials, flashcards, and scenario-based quiz questions.
              Sections are presented in the recommended learning order for this course.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
