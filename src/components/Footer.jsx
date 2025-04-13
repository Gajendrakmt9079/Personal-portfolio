import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='w-full px-5 my-2'>
      <hr className='border-slate-200' />

      <div className='flex flex-col md:flex-row  gap-4 items-center justify-between  w-full py-5'>
        <p>
          © 2025 <strong>Gajendra kumwat</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
