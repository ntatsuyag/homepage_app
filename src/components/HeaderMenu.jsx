import React from 'react'

const HeaderMenu = () => {
  return (
    <header id="header" className=' bg-gray-800 border-b-4 border-gray-400 text-gray-200 mb-2'>
      <div className='container flex flex-col sm:flex-row'>
          <a href="#Top" className='text-5xl font-bold ml-2'>ntatsuya</a>
        <div className='ml-2 mr-2 my-auto sm:ml-auto'>
          <nav className='text-2xl'>
            <a href="#Contact" className='mr-2'>Contact</a>
            <a href="#Career" className='mr-2'>Career</a>
            <a href="#Skill" className='mr-2'>Skill</a>
            {/* <a href="#Research" className='mr-2'>Research</a> */}
            <a href="#Other" className='mr-2'>Other</a>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default HeaderMenu