import React from 'react'
import { Button } from '../ui/button';

const Navbar = () => {
    const name = "Raja";
    return (
        <div className='w-full flex justify-between py-8 px-4'>
            <h2 className="text-3xl font-semibold tracking-tight">
                Welcome back, {name}!
            </h2>
            <Button>New Task</Button>
        </div>
    )
}

export default Navbar