import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FlaskConical, 
  Pill, 
  Heart, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import bgimg from '../assets/img4.jpg';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Comprehensive medical equipment solutions for hospitals of all sizes, from rural clinics to major medical centers.',
      features: [
        'Advanced diagnostic equipment',
        'Surgical instruments and tools',
        'Patient monitoring systems',
        'Emergency care equipment',
        'ICU and critical care devices'
      ],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: FlaskConical,
      title: 'Laboratories',
      description: 'Precision tools and equipment for medical, research, and diagnostic laboratories.',
      features: [
        'Laboratory analyzers',
        'Microscopes and imaging systems',
        'Centrifuges and processors',
        'Sample collection tools',
        'Quality control equipment'
      ],
      image: 'https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Pill,
      title: 'Pharmacies',
      description: 'Essential products and equipment to support pharmaceutical operations and patient care.',
      features: [
        'Medication dispensing systems',
        'Storage and refrigeration',
        'Blood pressure monitors',
        'Thermometers and basic diagnostics',
        'Safety and protective equipment'
      ],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'NGOs & Humanitarian Organizations',
      description: 'Supporting community healthcare projects and humanitarian missions with reliable medical equipment.',
      features: [
        'Portable diagnostic devices',
        'Field hospital equipment',
        'Emergency medical supplies',
        'Community health tools',
        'Training and support programs'
      ],
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All equipment meets international standards and certifications'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Supply',
      description: 'Consistent inventory and timely delivery across Africa'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section  style={{ backgroundImage: `url(${bgimg})` }}
       className="bg-cover bg-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8">
              Supporting healthcare delivery across multiple sectors with specialized solutions 
              tailored to meet the unique needs of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <industry.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{industry.title}</h2>
                </div>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Our Solutions Include:</h3>
                  <ul className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group"
                >
                  Get Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Government & Health Boards Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Government Health Boards
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              We partner with government health boards to supply medical equipment for large-scale 
              healthcare infrastructure projects and public health initiatives across Africa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Government Contracts</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Public Health Facilities</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Our Government Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Large-scale procurement and supply</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Tender participation and competitive bidding</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Project management and implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Staff training and capacity building</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Long-term maintenance contracts</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Compliance and regulatory support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yamiko Medical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges each industry faces and provide 
              tailored solutions to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Healthcare Delivery?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help you find the right medical equipment solutions for your industry. 
            Contact our experts for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/products"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;