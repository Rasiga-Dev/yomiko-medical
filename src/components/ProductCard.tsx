import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
  image: string;
  brochureUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  category,
  image,
  // brochureUrl
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col"> {/* ✅ Changed: Added h-full and flex-col */}
      
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      
      <div className="flex flex-col justify-between flex-grow p-6"> 
        <div className="mb-4"> 
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="mt-auto"> 
          <Link
            to="/contact"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium w-full"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
