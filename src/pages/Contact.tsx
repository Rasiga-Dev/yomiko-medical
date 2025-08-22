import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+265-XXX-XXX-XXX',
      description: 'Call us during business hours for immediate assistance',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@yamikomedical.com',
      description: 'Send us your inquiries and we\'ll respond within 24 hours',
      color: 'green'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: '+265-XXX-XXX-XXX',
      description: 'Chat with us instantly for quick support and quotes',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: 'Lilongwe, Malawi',
      description: 'Schedule a visit to see our products and meet our team',
      color: 'orange'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency Support', hours: '24/7 Available' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to discuss your medical equipment needs? Our expert team is here to help you 
              find the right solutions for your healthcare facility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-${method.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`h-8 w-8 text-${method.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className={`text-${method.color}-600 font-medium mb-2`}>{method.details}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours 
                with a detailed response to your inquiry.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Main Office</h4>
                      <p className="text-gray-600">
                        Lilongwe, Malawi<br />
                        Central Business District<br />
                        Medical Equipment Hub
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+265-XXX-XXX-XXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@yamikomedical.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Support</h3>
                <p className="text-red-700 mb-4">
                  For urgent medical equipment failures or emergency supply needs, 
                  our 24/7 support team is ready to assist you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+265XXXXXXXXX"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-center"
                  >
                    Emergency Hotline
                  </a>
                  <a
                    href="https://wa.me/265XXXXXXXXX"
                    className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200 text-center"
                  >
                    WhatsApp Emergency
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Lilongwe, we're easily accessible and ready to serve you
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                Google Maps integration would be implemented here<br />
                showing our exact location in Lilongwe, Malawi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you deliver medical equipment?
              </h3>
              <p className="text-gray-600">
                Delivery times vary by location and product availability. For items in stock, 
                we typically deliver within 3-7 business days across Malawi and 1-2 weeks 
                for international orders.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide training for medical equipment?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive training programs for all major equipment. 
                Our certified technicians ensure your staff is properly trained on equipment 
                operation, maintenance, and safety procedures.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What warranty and support do you offer?
              </h3>
              <p className="text-gray-600">
                All our equipment comes with manufacturer warranties ranging from 1-5 years. 
                We also provide ongoing technical support, maintenance services, and have 
                24/7 emergency support available for critical equipment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you work with government tenders and procurement?
              </h3>
              <p className="text-gray-600">
                Absolutely. We have extensive experience with government procurement processes, 
                tender submissions, and large-scale supply contracts. We're registered with 
                government procurement agencies and can handle all compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;