'use client';

import { useState } from 'react';
import { X, BookOpen, GraduationCap, Building2 } from 'lucide-react';

export default function CoursesModal({ isOpen, onClose, courses }) {
  const [activeTab, setActiveTab] = useState('Main');

  if (!isOpen) return null;

  // Group courses by campus first, then by college
  const coursesByCampus = courses.reduce((acc, course) => {
    const campus = course.campusDesc || 'Other';
    if (!acc[campus]) {
      acc[campus] = {};
    }
    
    const college = course.college || 'Other Programs';
    if (!acc[campus][college]) {
      acc[campus][college] = [];
    }
    
    acc[campus][college].push(course);
    return acc;
  }, {});

  const campuses = Object.keys(coursesByCampus);
  const activeCampusCourses = coursesByCampus[activeTab] || {};
  const colleges = Object.keys(activeCampusCourses).sort();

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-green-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-4 border-b-2 border-gray-200 z-10">
          <div className="flex items-center">
            <GraduationCap size={28} className="text-green-900 mr-3" />
            <h2 className="text-3xl font-bold text-green-900">All Available Programs</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={28} />
          </button>
        </div>

        {/* Course Count */}
        <div className="mb-6 bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold text-center">
            We offer <span className="text-2xl font-bold">{courses.length}</span> undergraduate programs across both campuses
          </p>
        </div>

        {/* Campus Tabs */}
        <div className="flex gap-2 mb-6 border-b-2 border-gray-200">
          {campuses.map((campus) => {
            const campusCount = Object.values(coursesByCampus[campus] || {}).flat().length;
            return (
              <button
                key={campus}
                onClick={() => setActiveTab(campus)}
                className={`px-6 py-3 font-semibold transition-all relative ${
                  activeTab === campus
                    ? 'text-green-900 border-b-4 border-green-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {campus} Campus
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeTab === campus
                    ? 'bg-green-900 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {campusCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Colleges and Courses */}
        <div className="space-y-8">
          {colleges.map((college) => {
            const collegeCourses = activeCampusCourses[college];
            
            // College name mapping
            const collegeNames = {
              'CHASS': 'College of Humanities and Social Sciences',
              'CAA': 'College of Agriculture and Agri-Industries',
              'CEGS': 'College of Engineering and Geo-Sciences',
              'CED': 'College of Education',
              'COFES': 'College of Forestry and Environmental Sciences',
              'CCIS': 'College of Computing and Information Sciences',
              'CMNS' : 'College of Mathematics and Natural Sciences',
              'CITTE': 'College of Industrial Technology and Teacher Education',
              'CBA' : 'College of Business and Accountancy',
              'CEIT' : 'College of Engineering and Information Technology',
              'CTHM' : 'College of Tourism and Hospitality Management',
            };
            
            const collegeFullName = collegeNames[college] || college;
            
            return (
              <div key={college} className="bg-gray-50 rounded-xl p-6">
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="text-green-900" size={24} />
                    <h3 className="text-xl font-bold text-green-900">
                      {collegeFullName}
                    </h3>
                    <span className="bg-green-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {collegeCourses.length} {collegeCourses.length === 1 ? 'program' : 'programs'}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {collegeCourses.map((course, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-lg p-5 transition-all hover:border-green-500 hover:shadow-lg bg-white"
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {course.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.keywords.slice(0, 4).map((kw, kwIndex) => (
                          <span
                            key={kwIndex}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {kw}
                          </span>
                        ))}
                        {course.keywords.length > 4 && (
                          <span className="text-gray-500 text-xs px-2 py-1">
                            +{course.keywords.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Ready to find your perfect program match?
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
          >
            Start Matching
          </button>
        </div>
      </div>
    </div>
  );
}