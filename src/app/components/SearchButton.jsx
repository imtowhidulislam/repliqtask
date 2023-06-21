import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"

const SearchButton = () => {
    const focusSearch = useRef(null);
    const [search,setSearch] = useState({search:""});

    const handleChange = (e) => {
        const {name,value} = e.target;
        setSearch({...search, [name]:value});
    }
    const handleSumbit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        focusSearch.current.focus();
    },[search])

    const deleteSearchText = () => {
        setSearch({search : ""})
    }
  return (
    <div className='flex items-center justify-between border border-gray-500 rounded-full overflow-hidden'>
        
        <form className='flex items-center justify-center' onSubmit={handleSumbit}>
            <input id='search' ref={focusSearch} name='search' value={search.search} onChange={handleChange} placeholder='search' className='w-full lg:w-full placeholder:capitalize bg-transparent pl-4 border-none outline-none'>
            
            </input>
            <div className={`flex items-center justify-center px-2 transition-all duration-150 ease-in-out ${search.search ? 'visible':'collapse'}`}>
                <button onClick={deleteSearchText}>
                    <span className='text-xl font-bold'><RxCross1 /></span>
                </button>
            </div>
        </form>
        <div className='border-l border-gray-400 h-full py-2 px-2 lg:px-5 bg-transparent cursor-pointer hover:bg-cyan-600 transition-all duration-200 ease-in-out hover:text-gray-50'>
            <span className='text-xl font-bold'><AiOutlineSearch /></span>
        </div>
    </div>
  )
}

export default SearchButton