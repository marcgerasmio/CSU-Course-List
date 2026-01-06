'use client';

import { useState, useEffect } from 'react';
import { Search, RefreshCw, BookOpen, Sparkles, CheckCircle, X } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import CoursesModal from '../components/CourseModal';

export default function MyProgramRecommender() {
  const [keywords, setKeywords] = useState(['', '', '']);
  const [courses, setCourses] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [activeCampusTab, setActiveCampusTab] = useState('Main');
  

  const images = [
    { src: "pic1.webp", alt: "Golden Paddler 1" },
    { src: "pic2.webp", alt: "Golden Paddler 2" },
    { src: "pic3.webp", alt: "Golden Paddler 3" },
    { src: "pic4.webp", alt: "Golden Paddler 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const API_URL = 'https://csu-myprogram.vercel.app/api/courses';

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) throw new Error(`API returned status code: ${response.status}`);

      const data = await response.json();
      if (!data.success || !data.data) throw new Error('Invalid data format from API');
      console.log(data.data);
      setCourses(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const clearKeyword = (index) => handleKeywordChange(index, '');

  const calculateRecommendations = () => {
    const filledKeywords = keywords.filter(k => k.trim() !== '').map(k => k.toLowerCase().trim());
    if (filledKeywords.length === 0) {
      setRecommendations([]);
      setHasSearched(true);
      setShowModal(true);
      return;
    }

    const scoredCourses = courses.map(course => {
      let score = 0;
      filledKeywords.forEach(keyword => {
        course.keywords.forEach(kw => {
          if (kw.includes(keyword) || keyword.includes(kw)) score += 2;
        });
        if (course.name.toLowerCase().includes(keyword)) score += 3;
        if (course.description.toLowerCase().includes(keyword)) score += 1;
      });
      return { ...course, matchScore: score };
    });

    const filtered = scoredCourses
      .filter(course => course.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6);

    setRecommendations(filtered);
    
    // Set initial active campus tab to the first campus in recommendations
    if (filtered.length > 0) {
      const firstCampus = filtered[0].campusDesc || 'Main';
      setActiveCampusTab(firstCampus);
    }
    
    setHasSearched(true);
    setShowModal(true);
  };

  const handleReset = () => {
    setKeywords(['', '', '']);
    setRecommendations([]);
    setHasSearched(false);
    setShowModal(false);
  };

  if (loading)
    return (
      <div className="min-h-screen p-8 bg-center bg-fixed bg-no-repeat relative" style={{backgroundImage: "url('/bg.jpg')"}}>
        <div className="absolute inset-0 bg-white/85 z-0"></div>
        <div className="relative z-10 text-center py-16 px-8">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-green-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Fetching courses...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen p-8 bg-cover bg-center bg-fixed bg-no-repeat relative" style={{backgroundImage: "url('/bg.jpg')"}}>
        <div className="absolute inset-0 bg-white/85 z-0"></div>
        <div className="relative z-10 text-center py-16 px-8 max-w-lg mx-auto">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Courses</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchCourses}
            className="px-6 py-3 bg-green-900 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            Retry
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen p-8 bg-cover bg-center bg-fixed bg-no-repeat relative" style={{backgroundImage: "url('/bg.jpg')"}}>
      <div className="absolute inset-0 bg-white/50 z-0"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 bg-green-900 bg-cover bg-center bg-fixed bg-no-repeat p-6 rounded-2xl shadow-2xl max-w-3xl mx-auto border-2">
          <div className="flex items-center justify-center mb-4">
            <img 
              src='/logo.png' 
              alt="MyProgram" 
              className="w-30 h-24 mr-3" 
            />
            <h1 className="text-4xl font-bold text-white">MyProgram</h1>
          </div>
         <p className="text-white text-lg mb-4">
  Welcome to the university&apos;s{" "}
  <span className="text-yellow-400 font-bold">MyProgram</span>!
</p>

          <p className="text-white text-xs">
   As an aspiring Golden Paddler this incoming school year, choosing the right academic program is one of your most important decisions. We are here to help.
   MyProgram matches your unique interests with our available undergraduate programs across both campuses. Share what inspires you, and discover the academic pathways designed for your future.
          </p>
        </div>

        {/* Input Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* CARSU WEBSITE - 25% */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-whiteshadow-2xl">  
            {/* Golden Paddler Carousel */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-green-900 mb-4">Campus Life</h2>
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="min-w-full h-64">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Left Button */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Right Button */}
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <button className="w-full mt-8 bg-yellow-500 text-green-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all"   onClick={() => setShowCoursesModal(true)}>
             View Courses
            </button>
            <button className="w-full mt-8 bg-green-900 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all" onClick={() => window.open('https://www.carsu.edu.ph', '_blank')}>
              Visit CarSU
            </button>
            </div>

            
          </div>

          {/* INPUT SECTION - 50% */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-900">
            <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
           Are you ready to find your match?
            </h2>
            
            {keywords.map((keyword, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest {index + 1}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => handleKeywordChange(index, e.target.value)}
                    placeholder={
                      index === 0
                        ? 'e.g., programming'
                        : index === 1
                        ? 'e.g., design'
                        : 'e.g., healthcare'
                    }
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-green-500 transition-colors"
                  />
                  {keyword && (
                    <button
                      onClick={() => clearKeyword(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-gray-400 cursor-pointer p-0 w-6 h-6 flex items-center justify-center hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-6">
              <button
                onClick={calculateRecommendations}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-base cursor-pointer transition-all bg-green-900 text-white hover:bg-green-700"
              >
                <Search size={20} /> Find Programs
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-lg font-semibold text-base cursor-pointer transition-all border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </div>

          {/* ADMISSION WEBSITE - 25% */}
          <div className="bg-white to-blue-800 rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-green-900">Admission Test Requirements</h2>
            </div>
            <div className="space-y-2 mt-4">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-2 shadow-xl border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 text-black font-bold rounded-full flex items-center justify-center">•</span>
                    <p className='text-green-900'>Passport-size ID Picture. NO PICTURE, NO EXAM.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 text-black font-bold rounded-full flex items-center justify-center">•</span>
                    <p className='text-green-900'>Any valid ID</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 text-black font-bold rounded-full flex items-center justify-center">•</span>
                    <p className='text-green-900'>Application Number</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 text-black font-bold rounded-full flex items-center justify-center">•</span>
                    <p className='text-green-900'>Pencil (Number 2)</p>
                  </div>
                </div>
              </div>
            </div>
              <button className="w-full mt-2 bg-green-900 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all" onClick={() => window.open('https://myadmission.carsu.edu.ph', '_blank')}>
              Visit MyAdmission
            </button>
            <div className="space-y-5">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-xl mb-4 text-green-900 flex items-center gap-2">
                  CSU Social Media Accounts
                </h3>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/CarSUOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-16 h-16 bg-green-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaFacebook className="text-white text-3xl" />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/carsuofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-16 h-16 bg-green-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaInstagram className="text-white text-3xl" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-16 h-16 bg-green-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <FaYoutube className="text-white text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Results */}
        {showModal && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-green-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-4 border-b-2 border-gray-200 z-10">
                <div className="flex items-center">
                  <Sparkles size={28} className="text-green-900 mr-3" />
                  <h2 className="text-3xl font-bold text-green-900">Recommended Programs</h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={28} />
                </button>
              </div>

              {recommendations.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-lg">
                  Unfortunately, your interests are still unavailable at both campuses of the
                  university. However, we have {courses.length} programs with different
                  disciplines that you can choose from!
                </div>
              ) : (
                <>
                  {/* Recommendation Count */}
                  <div className="mb-6 bg-green-50 rounded-lg p-4">
                    <p className="text-green-900 font-semibold text-center">
                      We found <span className="text-2xl font-bold">{recommendations.length}</span> programs that match your interests
                    </p>
                  </div>

                  {/* Group by Campus */}
                  {(() => {
                    const recByCampus = recommendations.reduce((acc, course) => {
                      const campus = course.campusDesc || 'Other';
                      if (!acc[campus]) acc[campus] = [];
                      acc[campus].push(course);
                      return acc;
                    }, {});

                    const campuses = Object.keys(recByCampus);

                    return (
                      <>
                        {/* Campus Tabs */}
                        {campuses.length > 1 && (
                          <div className="flex gap-2 mb-6 border-b-2 border-gray-200">
                            {campuses.map((campus) => {
                              const campusCount = recByCampus[campus].length;
                              return (
                                <button
                                  key={campus}
                                  onClick={() => setActiveCampusTab(campus)}
                                  className={`px-6 py-3 font-semibold transition-all relative ${
                                    activeCampusTab === campus
                                      ? 'text-green-900 border-b-4 border-green-900'
                                      : 'text-gray-500 hover:text-gray-700'
                                  }`}
                                >
                                  {campus} Campus
                                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                    activeCampusTab === campus
                                      ? 'bg-green-900 text-white'
                                      : 'bg-gray-200 text-gray-600'
                                  }`}>
                                    {campusCount}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Display Programs */}
                        <div className="space-y-8">
                          {campuses.map((campus) => {
                            if (campuses.length > 1 && activeCampusTab !== campus) return null;
                            
                            const campusCourses = recByCampus[campus];
                            
                            return (
                              <div key={campus}>
                                {campuses.length === 1 && (
                                  <div className="mb-4">
                                    <h3 className="text-xl font-bold text-green-900">
                                      {campus} Campus
                                    </h3>
                                  </div>
                                )}
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {campusCourses.map((course, index) => {
                                    const courseId = `rec-${campus}-${index}`;
                                    const isExpanded = expandedCourse === courseId;
                                    
                                    return (
                                      <div
                                        key={index}
                                        onClick={() => setExpandedCourse(isExpanded ? null : courseId)}
                                        className="border-2 border-gray-200 rounded-lg p-5 transition-all hover:border-green-500 hover:shadow-lg bg-white cursor-pointer"
                                      >
                                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                                          {course.name}
                                        </h4>
                                        <p className={`text-gray-600 text-sm mb-3 ${isExpanded ? '' : 'line-clamp-2'}`}>
                                          {course.description}
                                        </p>
                                        {!isExpanded && course.description.length > 100 && (
                                          <button className="text-green-700 text-xs font-medium mb-3 hover:underline">
                                            Click to read more...
                                          </button>
                                        )}
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
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    );
                  })()}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <CoursesModal 
        isOpen={showCoursesModal}
        onClose={() => setShowCoursesModal(false)}
        courses={courses}
      />
    </div>
  );
}