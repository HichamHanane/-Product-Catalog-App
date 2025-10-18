
import { FaHeart } from 'react-icons/fa';
import './ProductCard.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add_to_Favorite } from '../../Features/ProductSlice';


const ProductCard = ({ id, image, title, price, category, bgColor }) => {
    const dispatch = useDispatch();
    let [targetProduct, setTargetProduct] = useState({
        id,
        image,
        title,
        price,
        category
    });

    const handleToggleFavorite = () => {


        dispatch(Add_to_Favorite(targetProduct))
        // setTargetProduct(
        //     {
        //         image,
        //         title,
        //         price,
        //         category
        //     }
        // )


        console.log('target product :', targetProduct);

    }
    return (
        <div className="productCard">
            <div className="imageContainer" style={{ backgroundColor: bgColor || '#f3f4f6' }}>
                <img src={image} alt={title} className="productImage" loading='lazy' />
            </div>
            <div className="productInfo">
                <h3 className="productTitle">{title}</h3>
                <p className="productPrice">${price}</p>
                <div className="productFooter">
                    <span className="productTag" style={{
                        backgroundColor: category === 'electronics' ? '#dbeafe' :
                            category === "men's clothing" ? '#fef3c7' :
                                category === "women's clothing" ? '#dbeafe' :
                                    category === 'jewelery' ? '#d1fae5' : null,
                        color: category === 'electronics' ? '#1e40af' :
                            category === "men's clothing" ? '#92400e' :
                                category === 'jewelery' ? '#065f46' :
                                    category === "women's clothing" ? '#991b1b' : '#374151'
                    }}>
                        {category}
                    </span>

                    <button
                        className="favoriteButton"
                        onClick={() => handleToggleFavorite()}
                        aria-label="Add to favorites"
                    >
                        <FaHeart size={14} />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;