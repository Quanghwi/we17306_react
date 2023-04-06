import React from 'react'
import { Outlet } from 'react-router-dom'
const WebLayout = () => {
    return (
        <div className='w-full max-w-[1200px] m-auto'>
            <header>
                <nav>
                    <ul>
                        <li className='inline-block ml-3'>Menu</li>
                        <li className='inline-block ml-3'>Menu</li>
                        <li className='inline-block ml-3'>Menu</li>
                        <li className='inline-block ml-3'>Menu</li>
                        <li className='inline-block ml-3'>Menu</li>
                    </ul>
                </nav>
                <div className="banner">
                    {/* <img src="https://picsum.photos/1920/300" alt="" /> */}
                </div>
            </header>
            <main className='mt-3'>
                <Outlet />
            </main>
            <footer>
                <div className="banner">
                    {/* <img src="https://picsum.photos/1920/300" alt="" /> */}
                </div>
            </footer>
        </div>
    )
}

export default WebLayout