import React from 'react';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business dealings.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We ensure all products meet international quality standards and certifications.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients\' success is our priority, and we tailor solutions to their needs.'
    },
    {
      icon: Globe,
      title: 'Partnerships',
      description: 'We build strong, lasting relationships with suppliers and clients alike.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Medical Device Distribution License',
    'Government Approved Supplier',
    'International Trade Certification'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Yamiko Medical
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Yamiko Medical is a trusted supplier of medical equipment and healthcare solutions, 
                dedicated to improving healthcare delivery across Africa through reliable, 
                high-quality products and exceptional service.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Products Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Service</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To improve healthcare delivery by providing accessible, affordable, and high-quality 
                medical equipment to healthcare providers across Africa. We are committed to bridging 
                the gap between advanced medical technology and healthcare institutions that need it most.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most reliable and innovative medical equipment distributor in Africa, 
                known for our exceptional service quality, comprehensive product range, and 
                unwavering commitment to improving healthcare outcomes across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships with clients, 
              suppliers, and the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certifications & Partnerships
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our commitment to quality and compliance is reflected in our certifications 
                and strategic partnerships with leading medical equipment manufacturers worldwide.
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">ISO</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Licensed</div>
                <div className="text-sm text-gray-600">Distributor</div>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Gov.</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Global</div>
                <div className="text-sm text-gray-600">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to building lasting relationships and making a positive impact 
              on healthcare delivery across Africa through our expertise and commitment to excellence.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our experienced professionals understand the unique challenges of 
                  medical equipment distribution in Africa.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">
                  We leverage our international partnerships to bring the best medical 
                  equipment to African healthcare providers.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  We believe in contributing to the development of healthcare 
                  infrastructure and community well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;