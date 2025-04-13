import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../../models/Fox';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Footer from '../components/Footer';


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [currentAnimetion, setcurrentAnimetion] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => { setcurrentAnimetion('walk') };
  const handleBlur = () => { setcurrentAnimetion('idle') };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimetion('walk');
    emailjs.sendForm(
      'service_w6hbbpn',
      'template_sofnsfd',
      formRef.current,
      'OaoOoNqY6MdLVsEXq'
    )
      .then(() => {
        setIsLoading(false);
        alert('Your message has been sent successfully!');
        setTimeout(() => {
          setcurrentAnimetion('idle');
          setForm({
            name: '',
            email: '',
            message: ''
          });
        }, [3000]);

      })
      .catch((error) => {
        setIsLoading(false);
        setcurrentAnimetion('idle');
        alert('Failed to send message, please try again later.');
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='overflow-hidden'>
    <section className='mt-20 relative flex md:flex-row flex-col md:px-36 items-center '>
      <div className='flex flex-1 min-w-[50%] justify-center items-center md:items-start flex-col'>
        <h1 className='font-semibold text-2xl'>Get in Touch</h1>

        <form
          ref={formRef}
          className='mt-14 flex flex-col items-center md:items-start md:gap-7 gap-4 w-full'
          onSubmit={handleSubmit}
        >
          <label className='text-black'>
            Name
            <input
              type="text"
              className='mt-2 w-[90vw] md:w-96 border-1 block border-gray-300 shadow-2xl rounded-md p-1'
              placeholder='Gajendra'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black'>
            Email
            <input
              type="email"
              className='mt-2 w-[90vw] md:w-96 border-1 block border-gray-300 shadow-2xl rounded-md p-1'
              placeholder='Example@gmail.com'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black'>
            Message
            <textarea
              className='mt-2 w-[90vw] md:w-96 border-1 block border-gray-300 shadow-2xl rounded-md p-1'
              rows={4}
              placeholder='Your message'
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            disabled={isLoading}
            className='w-[90vw] md:w-96 text-white py-2 px-4 rounded-md bg-gradient-to-l from-blue-800 via-blue-500 to-blue-400 transition duration-300 ease-in-out'
            type='submit'
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full  md:h-[500px] h-[350px]  '>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            {/* <pointLight position={[10, 10, 10]} /> */}

            <Fox
              currentAnimation={currentAnimetion}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>
      </div>
              
      
    </section>
    <Footer/></div>
  );
};

export default Contact;