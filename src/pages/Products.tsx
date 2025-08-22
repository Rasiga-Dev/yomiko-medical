import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Diagnostics', 'Surgical', 'Furniture', 'Consumables'];

  const products = [
    {
      name: 'Digital Blood Pressure Monitor',
      description: 'Accurate, automated blood pressure monitoring with large display and memory storage for patient data.',
      category: 'Diagnostics',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/bp-monitor.pdf'
    },
    {
      name: 'Digital Thermometer Set',
      description: 'Non-contact infrared thermometers for quick and accurate temperature readings.',
      category: 'Diagnostics',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/thermometer.pdf'
    },
    {
      name: 'ECG Machine - 12 Lead',
      description: 'Portable 12-lead ECG machine with high-resolution display and printing capabilities.',
      category: 'Diagnostics',
      image: 'https://images.pexels.com/photos/4021761/pexels-photo-4021761.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/ecg-machine.pdf'
    },
    {
      name: 'Portable Ultrasound Scanner',
      description: 'Compact ultrasound system with multiple probes for various diagnostic applications.',
      category: 'Diagnostics',
      image: 'https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/ultrasound.pdf'
    },
    {
      name: 'Surgical Instrument Set',
      description: 'Complete surgical instrument kit with stainless steel tools for various surgical procedures.',
      category: 'Surgical',
      image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/surgical-set.pdf'
    },
    {
      name: 'Operating Scissors Set',
      description: 'High-quality surgical scissors in various sizes for precision cutting and dissection.',
      category: 'Surgical',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/scissors.pdf'
    },
    {
      name: 'Forceps Collection',
      description: 'Comprehensive set of surgical forceps for grasping, holding, and manipulating tissue.',
      category: 'Surgical',
      image: 'https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/forceps.pdf'
    },
    {
      name: 'Surgical Scalpel Kit',
      description: 'Disposable and reusable scalpel handles with various blade sizes for surgical procedures.',
      category: 'Surgical',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/scalpel-kit.pdf'
    },
    {
      name: 'Electric Hospital Bed',
      description: 'Adjustable electric hospital bed with safety rails, comfortable mattress, and remote control.',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/hospital-bed.pdf'
    },
    {
      name: 'Medical Examination Table',
      description: 'Adjustable examination table with paper roll holder and storage compartments.',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/4021548/pexels-photo-4021548.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/exam-table.pdf'
    },
    {
      name: 'Medical Trolley',
      description: 'Multi-tier medical trolley with drawers and compartments for organizing medical supplies.',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/4021772/pexels-photo-4021772.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/medical-trolley.pdf'
    },
    {
      name: 'Wheelchair - Standard',
      description: 'Comfortable and durable wheelchair with adjustable footrests and easy-to-use brakes.',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/4021766/pexels-photo-4021766.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/wheelchair.pdf'
    },
    {
      name: 'Disposable Gloves (Nitrile)',
      description: 'High-quality nitrile gloves, powder-free, suitable for medical and laboratory use.',
      category: 'Consumables',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/nitrile-gloves.pdf'
    },
    {
      name: 'Disposable Syringes',
      description: 'Sterile disposable syringes in various sizes for medication administration and sample collection.',
      category: 'Consumables',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/syringes.pdf'
    },
    {
      name: 'Surgical Masks (3-Ply)',
      description: 'Disposable 3-ply surgical masks with ear loops, providing effective protection.',
      category: 'Consumables',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/surgical-masks.pdf'
    },
    {
      name: 'Medical Bandages Set',
      description: 'Comprehensive set of medical bandages including elastic, gauze, and adhesive varieties.',
      category: 'Consumables',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400',
      brochureUrl: '/brochures/bandages.pdf'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive medical equipment catalog featuring diagnostic devices, surgical instruments, 
              hospital furniture, and consumables from trusted manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond supplying equipment, we provide comprehensive services to ensure 
              optimal performance and longevity of your medical equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-lg">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation & Setup</h3>
              <p className="text-gray-600">Professional installation and setup services to ensure your equipment is ready for immediate use.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 font-bold text-lg">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Repairs</h3>
              <p className="text-gray-600">Regular maintenance and repair services to keep your equipment in optimal working condition.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 font-bold text-lg">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training programs for your staff to ensure proper equipment operation and safety.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-bold text-lg">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calibration & Certification</h3>
              <p className="text-gray-600">Regular calibration and certification services to maintain accuracy and compliance standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;