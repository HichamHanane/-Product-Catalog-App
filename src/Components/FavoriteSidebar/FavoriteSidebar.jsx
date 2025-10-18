import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './FavoriteSidebar.css';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_Favorite_list, Remove_from_Favorite_list } from '../../Features/ProductSlice';

const FAKE_FAVORITES = [
    { id: 1, name: 'Classic Leather Tote', price: 125.00, image: 'https://via.placeholder.com/60x60?text=Tote' },
    { id: 2, name: 'Silk Scarf', price: 45.00, image: 'https://via.placeholder.com/60x60?text=Scarf' },
    { id: 3, name: 'Gold Hoop Earrings', price: 75.00, image: 'https://via.placeholder.com/60x60?text=Earrings' },
];

function FavoriteSidebar({ isOpen, onClose }) {
    const { Favorites_list } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const sidebarClass = `fav-sidebar ${isOpen ? 'open' : ''}`;

    const handleRemove = (productId) => {
        dispatch(Remove_from_Favorite_list(productId))
    };



    return (
        <>
            {isOpen && <div className="fav-sidebarOverlay" onClick={onClose}></div>}

            <div className={sidebarClass}>
                <div className="fav-sidebarHeader">
                    <h2>Your Favorites</h2>
                    <button className="fav-closeButton" onClick={onClose} aria-label="Close Favorites Sidebar">
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="fav-sidebarContent">
                    {Favorites_list.length > 0 ? (
                        Favorites_list.map(product => (
                            <div key={product.id} className="fav-favoriteItem">
                                <img src={product.image} alt={product.name} className="fav-productImage" />
                                <div className="fav-productInfo">
                                    <span className="fav-productName">{product.name}</span>
                                    <span className="fav-productPrice">${product.price.toFixed(2)}</span>
                                </div>
                                <button
                                    className="fav-removeButton"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="fav-emptyMessage">You have no favorite products yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default FavoriteSidebar;