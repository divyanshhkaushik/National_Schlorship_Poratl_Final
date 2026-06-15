import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 via-primary to-green-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">Get in Touch</h1>
        <p className="text-sm md:text-lg text-green-100 max-w-2xl mx-auto font-medium leading-relaxed">
          Have questions or need assistance with your scholarship application? Our helpdesk team is here to support you.
        </p>
      </div>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information Cards */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For technical queries, application status, or general guidance, feel free to reach out to us using the contact details below.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">📍</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Office Address</h3>
                <p className="text-gray-600 mt-1">NSP Office, Ministry of Education,<br/>Shastri Bhawan, New Delhi,<br/>India - 110001</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">📞</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Call Us</h3>
                <p className="text-gray-600 mt-1">Toll Free: <span className="font-semibold text-primary">1800-XXX-XXXX</span></p>
                <p className="text-gray-500 text-sm mt-1">Available Mon-Fri, 9:00 AM to 6:00 PM</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">📧</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Email Us</h3>
                <p className="text-gray-600 mt-1"><a href="mailto:helpdesk@nsp.gov.in" className="text-primary hover:underline">helpdesk@nsp.gov.in</a></p>
                <p className="text-gray-500 text-sm mt-1">We typically reply within 24-48 hours.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! We will get back to you soon.'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea placeholder="Write your message here..." className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg rounded-lg shadow-md hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
