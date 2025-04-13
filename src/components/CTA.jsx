import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='flex md:flex-row flex-col  items-center justify-between   w-full px- gap-4 py-5 my-5'>
      <p className='font-semibold text-3xl'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='bg-gradient-to-l from-blue-500 text-white via-blue-600 to-purple-600 font-semibold hover:shadow-2xl shadow-purple-500 px-6 py-3 rounded-2xl text-md'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
