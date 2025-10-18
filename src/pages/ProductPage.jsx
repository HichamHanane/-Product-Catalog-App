import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import FilterBar from '../Components/FilterBar/FilterBar'
import ProductCard from '../Components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../Features/ProductSlice';

function ProductPage() {
    const [categoryQuery, setCategoryQuery] = useState('');
    const { products, isLoading, error } = useSelector(state => state.products);
    const dispatch = useDispatch()
    const [sortOrder, setSortOrder] = useState('');

    // const filteredProducts = products.filter(product =>
    //     product?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     product?.tag.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filtered = products.filter((product) => {
        if (categoryQuery != '') {
            return product?.category.toLowerCase() == categoryQuery.toLowerCase();
        }
        return product;
    })

    const sortedProducts = [...filtered].sort((a, b) => {
        if (sortOrder === 'price_asc') {
            return a.price - b.price;
        } else if (sortOrder === 'price_desc') {
            return b.price - a.price;
        }
        return 0;
    });

    const filteredProducts = sortedProducts;


    const handleCategoryChnage = (category) => {
        setCategoryQuery(category)
    }

    const handleSortChange = (order) => {
        setSortOrder(order);
    }


    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="loadingContainer">
                    <div className="spinner"></div>
                    <p>Loading products, please wait...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="errorContainer">
                    <span role="img" aria-label="Erreur">❌</span>
                    <h2>Oops! An error occurred.</h2>
                    <p>We couldn't load the products. Please try again later.</p>
                    <p className="errorMessageDetail">{error}</p>
                </div>
            );
        }

        if (filteredProducts.length === 0) {
            return (
                <div className="noResults">
                    <h2>No Products Found.</h2>
                    <p>Please adjust your category filters or check back soon!</p>
                </div>
            );
        }

        return (
            <div className="productsGrid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        );
    }

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [])
    return (
        <div className="app">
            <Header />
            <FilterBar
                categoryQuery={categoryQuery}
                setCategoryQuery={handleCategoryChnage}
                sortOrder={sortOrder}
                setSortOrder={handleSortChange}
            />
            <main className="mainContent">
                {renderContent()}
            </main>

        </div>
    )
}

export default ProductPage
