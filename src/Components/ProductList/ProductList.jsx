import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'
function ProductList() {

    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        { id: 1, title: 'Wireless Headphones', price: 199, tag: 'Electronics', image: '🎧', bgColor: '#1f2937' },
        { id: 2, title: 'Vintage Camera', price: 450, tag: 'Gadgets', image: '📷', bgColor: '#fde68a' },
        { id: 3, title: 'Running Shoes', price: 120, tag: 'Fashion', image: '👟', bgColor: '#f3f4f6' },
        { id: 4, title: 'Smart Watch', price: 350, tag: 'Wearables', image: '⌚', bgColor: '#f3f4f6' },
        { id: 5, title: 'Quadcopter Drone', price: 899, tag: 'Electronics', image: '🚁', bgColor: '#bae6fd' },
        { id: 6, title: 'Minimalist Chair', price: 250, tag: 'Furniture', image: '🪑', bgColor: '#fef3c7' },
        { id: 7, title: 'Hiking Backpack', price: 89, tag: 'Accessories', image: '🎒', bgColor: '#bae6fd' },
        { id: 8, title: 'Ceramic Mug Set', price: 45, tag: 'Home Deals', image: '☕', bgColor: '#374151' },
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <main className="mainContent">
            <div className="productsGrid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </main>
    )
}

export default ProductList
