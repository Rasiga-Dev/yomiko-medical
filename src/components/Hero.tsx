import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import MedicalEquipmentServicesAbout from '../assets/Medical Equipment & Services(home).jpg';

const Hero = () => {
  const highlights = [
    'Wide Range of Products (Diagnostics, Surgical, Furniture, Consumables)',
    'Certified & Reliable Suppliers',
    'After-Sales Support (Maintenance, Training, Calibration)',
    'Serving Hospitals, Clinics, Pharmacies , government health boards & NGOs'
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Distributor of{' '}
              <span className="text-blue-600">Medical Equipment</span>{' '}
              & Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The Med Tech industry is poised for significant growth, driven by technological innovations, 
              shifting patient needs, and evolving regulatory landscapes. We would like to be one of the 
              companies that prioritize patient-centric design, sustainability in Malawi, and digital 
              integration will be well-positioned for success in 2025 and beyond.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
              >
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-blue-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src={MedicalEquipmentServicesAbout}
                  alt="Medical Equipment"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-sm text-gray-600">Certified</div>
                <div className="font-bold text-blue-600">ISO Quality</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-sm text-gray-600">Serving</div>
                <div className="font-bold text-green-600">100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;