import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CourseSection() {
  return (
    <div className="text-center py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <p className="text-sm text-blue-500 font-semibold uppercase tracking-wide">Top Choices</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">Featured Programs</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Discover our hand-picked selection of leading educational programs in the technology field from prestigious institutions around the world.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <CourseCard 
          title="Full Stack Developer" 
          provider="Coursera" 
          price="49" 
          link="https://www.coursera.org/specializations/full-stack-developer" 
        />
        <CourseCard 
          title="Data Science" 
          provider="edX" 
          price="99" 
          link="https://www.edx.org/professional-certificate/data-science" 
        />
        <CourseCard 
          title="Machine Learning" 
          provider="Udacity" 
          price="199" 
          link="https://www.udacity.com/course/machine-learning-nanodegree--nd229" 
        />
      </div>

      <div className='mt-12'>
      <Link to="/courses" className="hover:text-blue-500">Explore Courses</Link>
      <ArrowRight className="inline-block ml-2" size={16} color="#3B82F6" />
      </div>
      
    </div>
  );
}
