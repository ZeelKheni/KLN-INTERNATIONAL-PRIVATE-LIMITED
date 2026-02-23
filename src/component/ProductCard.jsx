import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Memoized product card component
const ProductCard = React.memo(({ product, pathname }) => {
    const navigate = useNavigate();

    const navigateToProduct = (productName) => {
        const formattedName = productName.replace(/\s+/g, '+');
        navigate(`/${pathname}/${formattedName}`);
    };

    return (
        <div className="group transition-all duration-300">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-amber-100 hover:shadow-xl">
                <div className="overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold mb-2 text-amber-900">
                        {product.name.split(/\s+/).reduce((acc, word) => {
                            if (acc.length + word.length + 1 <= 28 || acc === '') {
                                return acc === '' ? word : `${acc} ${word}`;
                            }
                            return acc;
                        }, '') + (product.name.length > 28 ? '...' : '')}
                    </h2>
                    <div className="w-16 h-0.5 bg-amber-200 mb-4" />
                    <p className="text-amber-700 italic mb-4">
                        {product.description.length > 110
                            ? product.description.split(/\s+/).reduce((acc, word) =>
                                acc.length + word.length + 1 <= 107 ? `${acc} ${word}` : acc
                            ) + '...'
                            : product.description}
                    </p>
                    <Button
                        className="w-full font-serif bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-300"
                        onClick={() => navigateToProduct(product.name)}
                    >
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    );
});

export default ProductCard;