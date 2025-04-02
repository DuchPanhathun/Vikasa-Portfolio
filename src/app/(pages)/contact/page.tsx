import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Vikasa Consulting",
  description: "Reach out to our team for inquiries, partnership opportunities, or to discuss how we can help your organization thrive.",
};

export default function Contact() {
  return (
    <main className="font-montserrat">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vikasa-espresso to-vikasa-latte py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-10">
              Reach out to our team for inquiries, partnership opportunities, or to discuss how we can help your organization thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* General Inquiries */}
            <div className="bg-vikasa-espresso-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vikasa-espresso mb-4">General Inquiries</h3>
              <p className="text-gray-600 mb-4">For general questions and information about our services</p>
              <a href="mailto:info@vikasa-consulting.com" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold">info@vikasa-consulting.com</a>
            </div>

            {/* Customer Support */}
            <div className="bg-vikasa-gold-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vikasa-espresso mb-4">Customer Support</h3>
              <p className="text-gray-600 mb-4">For existing clients who need assistance</p>
              <a href="tel:+18005551234" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold">+1 (800) 555-1234</a>
              <p className="text-gray-600 mt-2">Mon-Fri: 9am - 6pm EST</p>
            </div>

            {/* Business Opportunities */}
            <div className="bg-vikasa-latte-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vikasa-latte" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-vikasa-espresso mb-4">Business Opportunities</h3>
              <p className="text-gray-600 mb-4">For partnerships and business development inquiries</p>
              <a href="mailto:partnerships@vikasa-consulting.com" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold">partnerships@vikasa-consulting.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Offices Section */}
      <section className="py-16 bg-vikasa-gold-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-vikasa-espresso mb-8">Get in Touch</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold text-gray-700"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="support">Customer Support</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vikasa-gold focus:border-vikasa-gold"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-vikasa-gold focus:ring-vikasa-gold border-gray-300 rounded mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      I agree to the <Link href="/privacy-policy" className="text-vikasa-latte hover:text-vikasa-espresso font-semibold">Privacy Policy</Link> and consent to having my data processed.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>

            {/* Office Locations */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-vikasa-espresso mb-8">Our Offices</h2>
              
              <div className="space-y-8">
                {/* Headquarters */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-vikasa-espresso mb-1">New York <span className="text-vikasa-gold text-sm font-normal">Headquarters</span></h3>
                  <p className="text-gray-600 mb-4">
                    100 Park Avenue, Suite 1500<br />
                    New York, NY 10016<br />
                    United States
                  </p>
                  <div className="flex items-center text-sm text-vikasa-espresso">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-vikasa-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (212) 555-6789
                  </div>
                </div>
              </div><div className="rounded-lg overflow-hidden shadow-md w-full h-[450px] mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6877.6872679805365!2d104.93860407977118!3d11.548182039639055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109576732b0b647%3A0xbb822fdbef903f43!2sThe%20Elys%C3%A9e!5e0!3m2!1sen!2skh!4v1743595562738!5m2!1sen!2skh" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-vikasa-espresso-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-vikasa-espresso mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-vikasa-espresso-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-vikasa-espresso mb-3">What types of organizations does Vikasa work with?</h3>
              <p className="text-gray-700">
                Vikasa partners with organizations across various industries, including Fortune 500 companies, mid-market enterprises, high-growth startups, and non-profit organizations. Our diverse client base spans sectors such as financial services, healthcare, technology, manufacturing, retail, and professional services.
              </p>
            </div>
            
            <div className="bg-vikasa-espresso-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-vikasa-espresso mb-3">How quickly can Vikasa respond to a new project request?</h3>
              <p className="text-gray-700">
                We typically respond to new inquiries within 24-48 business hours. Following an initial consultation, we can generally provide a proposal within one week, depending on project scope and complexity. For urgent matters, please indicate the time-sensitive nature of your request when contacting us.
              </p>
            </div>
            
            <div className="bg-vikasa-espresso-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-vikasa-espresso mb-3">Can Vikasa provide references from past clients?</h3>
              <p className="text-gray-700">
                Yes, we&apos;re happy to provide references from past clients who have worked on similar projects or faced comparable challenges. After our initial discussions to understand your specific needs, we can connect you with relevant client references upon request.
              </p>
            </div>
            
            <div className="bg-vikasa-espresso-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-vikasa-espresso mb-3">Does Vikasa offer virtual consulting services?</h3>
              <p className="text-gray-700">
                Yes, we offer fully virtual consulting engagements as well as hybrid models that combine on-site and remote work. Our team has extensive experience delivering high-impact results through digital collaboration tools and methodologies, ensuring seamless communication regardless of physical location.
              </p>
            </div>
            
            <div className="bg-vikasa-espresso-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-vikasa-espresso mb-3">How does Vikasa approach project pricing?</h3>
              <p className="text-gray-700">
                Our pricing models vary based on engagement type, scope, and duration. We offer fixed-fee project pricing, retainer arrangements, and value-based pricing options. Following initial consultations to understand your specific needs and objectives, we provide transparent pricing proposals tailored to your project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-vikasa-espresso">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white max-w-3xl mx-auto mb-8">
            Schedule a complimentary 30-minute consultation with one of our senior consultants to discuss your challenges and explore potential solutions.
          </p>
          <Link 
            href="/schedule-consultation" 
            className="bg-vikasa-gold hover:bg-vikasa-gold-dark text-white font-semibold px-8 py-3 rounded-md transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 