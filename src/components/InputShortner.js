import React, { useState } from 'react'
import LinkResult from "./LinkResult";

const InputShortner = ({setInputValue,inputValue}) => {
  const [value,setValue] = useState('');

  const handleClick = () => {
    setInputValue(value);
    setValue('');
  };

  return (
    <div className='flex flex-col items-center mt-16 sm:mt-40'>
        <h1 className='text-xl font-bold text-white mb-3'>short <span className='text-lime-500'>URL</span> </h1>
        <div className='flex flex-col sm:flex-row m-5 items-center'>
          <input className='!outline-none mr-5 w-80 px-3 py-1 rounded-sm shadow-md bg-black shadow-lime-500 text-white' type='text' placeholder='Paste a link to shorten it.' value={value} onChange={(e) => setValue(e.target.value)}></input>
          <button className='border border-lime-500 hover:bg-gradient-to-r from-black to-lime-400 px-3 py-1 rounded-md text-white mt-5 sm:mt-0' type='submit' onClick={handleClick}>Shorten</button>
        </div>
        <LinkResult inputValue={inputValue}/> 
    </div>
  )
}

export default InputShortner