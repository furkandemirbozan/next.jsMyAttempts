"use client"
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

function Header() {
    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        }
    ]
    const searchFunc = (e) => {
        if (e.key === 'Enter' && keyword.length >= 3) {
            router.push(`/search/${keyword}`)
            setKeyword('')
        }
    }
    return (
        <div className='flex items-center gap-10 h-20 p-5'>
            <div className='bg-amber-500 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
            <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
                <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Arama yap...' className='outline-none flex-1 bg-transparent' type="text" />
                <FaSearch size={25} />
            </div>
            <ThemeComp />
            {
                menu.map((mn, i) => (
                    <MenuItem mn={mn} key={i} />
                ))
            }
        </div>
    )
}

export default Header