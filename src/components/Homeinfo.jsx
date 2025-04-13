import { ArrowBigRight, MoveLeft, MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className='sm:text-lg  text-center rounded-xl  bg-blue-500  py-4 px-8 text-white mx-5'>
      <p className='font-medium sm:text-lg text-center mb-1 w-96'>{text}</p>
      <Link to={link} className='bg-white w-96 text-blue-500 py-1 md:px-28 rounded hover:bg-blue-100 hover:text-gray-700 transition duration-300 ease-in-out'>
        {btnText}
      </Link>
    </div>
  )
}

const Renderinfo = {
  1: (
    <h1 className='sm:text-xl  text-center rounded-xl bg-blue-500  py-4 px-8 text-white mx-5'>
      Hi , I am <span className='font-semibold '>Gajendra kumawat 😊 </span> <br />
      Full stack developer  From Jaipur <br />
    </h1>
  ),
  2: (
    <InfoBox text={'Working with many tech and framworks  with best user experience 🙋‍♂️ '} link={'/about'} btnText={"Learn more"} />
  ),
  3: (
    <InfoBox text={'Develop multiple project  over the year. Curious about the impact? 👁️'} link={'/projects'} btnText={"Visit my  portfolio"} />
  ),
  4: (
    <InfoBox text={'Need a project done or looking for a dev? , i am just few keystroks away'} link={'/contact'} btnText={"Let's talk 🤙"} />
  ),
}

const Homeinfo = ({ currentStage }) => {
  return Renderinfo[currentStage] || <h1>Loading...</h1>
}

export default Homeinfo