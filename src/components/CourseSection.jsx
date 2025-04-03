import React from 'react'
import CourseCard from './CourseCard'

export default function CourseSection() {
  return (
    <div className='text-center py-10'>
      <p>Top choices</p>
      <h1>Featured Programs</h1>
      <p>Discover our hand-picked selection of leading educational programs in the technology field from prestigious institutions around the world.</p>
      
      <div className='flex justify-center gap-10 mt-10'>
        <CourseCard title="Full Stack Developer" provider="Coursera" price="49" link="https://www.coursera.org/specializations/full-stack-developer" />
        <CourseCard title="Data Science" provider="edX" price="99" link="https://www.edx.org/professional-certificate/data-science" />
        <CourseCard title="Machine Learning" provider="Udacity" price="199" link="https://www.udacity.com/course/machine-learning-nanodegree--nd229" />
      </div>

    </div>
  )
}
