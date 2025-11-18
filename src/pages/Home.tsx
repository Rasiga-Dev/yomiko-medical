import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { 
  Shield, 
  Users, 
  Award, 
  Headphones, 
  ArrowRight,
  Building2,
  FlaskConical,
  Pill,
  Heart
} from 'lucide-react';
import bpMonitorImg from '../assets/digital bp monitor.jpg';
import SurgicalInstrumentSet from '../assets/Surgical Instrument Set.jpg';
import ElectricHospitalBed from '../assets/Electric Hospital Bed.jpg';

const Home = () => {
  const featuredProducts = [
    {
      name: 'Digital Blood Pressure Monitor',
      description: 'Accurate, automated blood pressure monitoring with large display and memory storage.',
      category: 'Diagnostics',
      image: bpMonitorImg,
      brochureUrl: '/brochures/bp-monitor.pdf'
    },
    {
      name: 'Surgical Instrument Set',
      description: 'Complete surgical instrument kit with stainless steel tools for various procedures.',
      category: 'Surgical',
      image: SurgicalInstrumentSet,
      brochureUrl: '/brochures/surgical-set.pdf'
    },
    {
      name: 'Hospital Bed - Electric',
      description: 'Adjustable electric hospital bed with safety rails and comfortable mattress.',
      category: 'Furniture',
      image: ElectricHospitalBed ,
      brochureUrl: '/brochures/hospital-bed.pdf'
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Advanced medical equipment for comprehensive patient care'
    },
    {
      icon: FlaskConical,
      title: 'Laboratories',
      description: 'Precision tools for testing and research applications'
    },
    {
      icon: Pill,
      title: 'Pharmacies',
      description: 'Essential consumables and pharmaceutical products'
    },
    {
      icon: Heart,
      title: 'NGOs',
      description: 'Supporting community healthcare projects and initiatives'
    }
  ];

  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '500+', label: 'Products Available' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div>
      <Hero />

      {/* Stats Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yamiko Medical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering excellence in medical equipment distribution 
              with unmatched service quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Quality</h3>
              <p className="text-gray-600">All our products meet international quality standards and certifications.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trusted Partner</h3>
              <p className="text-gray-600">Serving 100+ clients across Africa with reliable service and support.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">Years of experience in medical equipment distribution and services.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support for installation, maintenance, and training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular medical equipment trusted by healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting healthcare delivery across multiple sectors with specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <industry.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/industries"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your medical equipment needs and receive a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request Quote
            </Link>
            <a
              href="https://wa.me/265XXXXXXXXX"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;