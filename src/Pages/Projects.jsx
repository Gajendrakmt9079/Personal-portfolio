import React from 'react';
import { projects } from '../constants';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { arrow } from '../assets/icons';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className='mt-20 relative flex flex-col md:px-20 px-6 items-start'>
    <h1 className='font-semibold text-2xl'>
     My <span className='bg-gradient-to-r from-sky-500 to-sky-800 via-sky-600 drop-shadow-2xl bg-clip-text text-transparent'>Projects</span>
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
      As a passionate developer, I build projects that solve real-world problems while pushing my technical boundaries. Each project represents my ability to learn, adapt, and deliver polished solutions using modern technologies
      </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className=' w-12 h-12'>
              <div className={` rounded-xl ${project.theme}`} />
              <div className='rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl  font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

   
     <hr className='border-slate-200' />
    
          <CTA />
          <Footer/>
  </section>
  )
}

export default Projects