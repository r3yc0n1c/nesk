'use client'

import { FanIcon, Folders, House, Rabbit, Rainbow, SquareCheckBig, SquareMinus, Squircle, UsersRound } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuItems = [
    {
        "title": "Home",
        "link": "/home",
        "icon": <House />
    },
    {
        "title": "Tasks",
        "link": "/",
        "icon": <Folders />
    },
    {
        "title": "Upcoming",
        "link": "/upcoming",
        "icon": <SquareCheckBig />
    },
    {
        "title": "Users",
        "link": "/users",
        "icon": <UsersRound />
    },
]

const Menu = () => {
    const currPath = usePathname();

    return (
        <div className='w-72 h-screen py-8 px-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Rabbit />
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Nesk
                    </h3>
                </div>
                <SquareMinus />
            </div>
            <div className='mt-8 flex flex-col gap-8'>
                {MenuItems.map((item, idx) => {
                    return <div key={'menuitem_' + idx} className={`flex gap-4 p-2 rounded ${currPath === item.link && 'active'}`}>
                        <div>{item.icon}</div>
                        <div className='font-semibold'>{item.title}</div>
                    </div>
                }
                )}
            </div>
        </div>
    )
}

export default Menu