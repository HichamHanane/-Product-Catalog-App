import React, { useState } from 'react'
import './Header.css'
import { FaHeart } from 'react-icons/fa'
import FavoriteSidebar from '../FavoriteSidebar/FavoriteSidebar'
import { useDispatch } from 'react-redux';
import { fetch_Favorite_list } from '../../Features/ProductSlice';
function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch()
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        dispatch(fetch_Favorite_list())
    };
    return (
        <>
            <header className="header">
                <div className="headerContainer">
                    <div className="logo">
                        <span>MATJAR</span>
                    </div>
                    <div className="headerIcons">
                        <button 
                            className="iconButton" 
                            onClick={toggleSidebar} 
                            aria-label="Toggle Favorites Sidebar"
                        >
                            <FaHeart size={24} /> 
                        </button>

                    </div>
                </div>

            </header>

            <FavoriteSidebar
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
            />
        </>
    )
}

export default Header






