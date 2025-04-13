import React from 'react';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const About = () => {
  return (
    <section className='mt-20 relative flex flex-col md:px-20 px-6 items-start'>
      <h1 className='font-semibold text-2xl'>
        Hello, I am <span className='bg-gradient-to-r from-sky-500 to-sky-800 via-sky-600 drop-shadow-2xl bg-clip-text text-transparent'>Gajendra Kumawat</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Crafting seamless web & mobile experiences.
          MERN stack wizard with React Native flair.
          From backend logic to frontend finesse.
          Building digital dreams, end to end.
        </p>
      </div>

      <div className='py-10 flex flex-col w-full'>
        <h3 className='font-semibold tracking-wide'>My Skills</h3>
        <div className='mt-8 flex flex-wrap gap-8'>
          {skills.map((skill) => (
            <div className='group relative h-20 w-20' key={skill.name}>
              <div className='rounded-2xl w-full h-full bg-slate-100 shadow-lg hover:shadow-xl hover:scale-110 flex items-center justify-center transition-all duration-300'>
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className='w-10 h-10 object-contain' 
                  loading='lazy'
                />
              </div>
              <span className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16 w-full'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12'>
          <div className='relative pl-8 border-l-2 border-gray-200 space-y-12'>
            {experiences.map((experience) => (
              <div key={experience.company_name} className='relative'>
                {/* Timeline dot */}
                <div 
                  className='absolute w-4 h-4 rounded-full -left-[9px] top-1 border-2 border-white'
                  style={{ backgroundColor: experience.iconBg }}
                ></div>
                
                {/* Date */}
                <div className='absolute -left-24 top-0 text-sm text-gray-500 w-20 text-right'>
                  {experience.date}
                </div>
                
                {/* Content card */}
                <div className='p-6 bg-white rounded-lg shadow-sm border-t-4' style={{ borderTopColor: experience.iconBg }}>
                  <div className='flex items-start gap-4'>
                    {/* Company icon */}
                    <div className='flex-shrink-0 p-2 rounded-full' style={{ backgroundColor: `${experience.iconBg}20` }}>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-8 h-8 object-contain'
                      />
                    </div>
                    
                    <div>
                      <h3 className='text-xl font-semibold text-gray-900'>
                        {experience.title}
                      </h3>
                      <p className='text-base font-medium text-gray-700'>
                        {experience.company_name}
                      </p>
                    </div>
                  </div>

                  <ul className='mt-4 pl-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-gray-600 text-sm relative pl-4'
                      >
                        <span className='absolute left-0'>•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <hr className='border-slate-200' />
      
            <CTA />
            <Footer/>
    </section>
  );
};

export default About;