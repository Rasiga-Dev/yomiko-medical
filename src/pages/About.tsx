import React from 'react';
import { Target, Eye, Heart, Award, Users, Globe, Cpu, Wifi, Shield } from 'lucide-react';
import MedicalEquipment_removebg from '../assets/MedicalEquipment_removebg.png';

const About = () => {
  // const values = [
  //   {
  //     icon: Heart,
  //     title: 'Integrity',
  //     description: 'We maintain the highest ethical standards in all our business dealings.'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Quality',
  //     description: 'We ensure all products meet international quality standards and certifications.'
  //   },
  //   {
  //     icon: Users,
  //     title: 'Customer Focus',
  //     description: 'Our clients\' success is our priority, and we tailor solutions to their needs.'
  //   },
  //   {
  //     icon: Globe,
  //     title: 'Partnerships',
  //     description: 'We build strong, lasting relationships with suppliers and clients alike.'
  //   }
  // ];

  const innovations = [
    {
      title: 'Advanced Medical Imaging',
      description: 'Enhancing imaging modalities like spectral CT, MRI, and PET scans for better diagnostics.'
    },
    {
      title: 'Robotics and Automation',
      description: 'Improving surgical precision, reducing errors, and enhancing patient outcomes.'
    },
    {
      title: 'Brain-Computer Interfaces (BCIs)',
      description: 'Developing BCIs to restore vision, hearing, and memory in individuals with disabilities.'
    },
    {
      title: 'Needle-Free Drug Delivery Systems',
      description: 'Revolutionizing vaccinations and treatments with painless, laser-driven injection devices.'
    }
  ];

  const keyareas = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence (AI) and Machine Learning (ML)',
      description: 'Integrating AI and ML to enhance diagnostics, personalize treatments, and streamline administrative processes'
    },
    {
      icon: Wifi,
      title: 'Wearable Technology and Remote Monitoring',
      description: 'Developing wearable devices and remote monitoring systems to track patient health and enable proactive care.'
    },
    {
      icon: Shield,
      title: 'Digital Therapeutics',
      description: ' Using digital technologies to prevent, manage, or treat medical conditions.'
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Medical Device Distribution License',
    'Government Approved Supplier',
    'International Trade Certification'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Text - 2/5 columns = 40% */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-blue-600">Yamiko Medi Tech</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Yamiko Medi Tech is a trusted supplier of medical equipment and healthcare solutions,
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

            {/* Image - 3/5 columns = 60% */}
            <div className="lg:col-span-3">
              <img
                src={MedicalEquipment_removebg}
                alt="Medical Team"
              // className="w-full h-auto object-contain rounded-2xl shadow-2xl"
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
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To improve healthcare outcomes by providing innovative medical solutions, fostering strong
                relationships with healthcare professionals, and ensuring exceptional customer service,
                commitment to ensuring high standards of quality in products, and services developing and
                delivering innovative medical technologies and solutions.

              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To typically focus on improving healthcare outcomes, enhancing patient care, and advancing
                medical innovation and be a global leader in medical technology, providing cutting-edge
                solutions that transform patient care and improve healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by purpose, we aim to transform healthcare delivery with a focus
              on outcomes and efficiency.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

            <div className="space-y-24">
              {/* Goal 1 - Right side */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Empty placeholder for left side */}
                <div></div>

                {/* Right side content */}
                <div className="relative flex items-center">
                  {/* Icon */}
                  <div className="absolute -left-20">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                      <Target className="h-7 w-7 text-green-600" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Improved Patient Outcomes
                    </h3>
                    <p className="text-gray-600">
                      Enhancing patient care and outcomes through innovative medical technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 2 - Left side */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left side content */}
                <div className="relative flex items-center justify-end">
                  {/* Icon */}
                  <div className="absolute -right-20">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
                      <Heart className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Increased Efficiency
                    </h3>
                    <p className="text-gray-600">
                      Streamlining administrative processes and reducing healthcare costs.
                    </p>
                  </div>
                </div>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyareas.map((value, index) => (
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

      {/* Innovations Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Driving Innovation in Healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our forward-looking innovations are shaping the future of medicine —
              combining technology, science, and compassion to deliver better outcomes.
            </p>
          </div>

          <div className="relative border-l-4 border-blue-200">
            {innovations.map((item, index) => (
              <div key={index} className="mb-12 ml-8 relative">
                {/* Circle marker */}
                <div className="absolute -left-6 top-2 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Certifications & Partnerships
              </h2>
              <p className="text-xl text-gray-600 mb-4">
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