import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 via-primary to-green-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">About National Scholarship Portal</h1>
        <p className="text-sm md:text-lg text-green-100 max-w-3xl mx-auto font-medium leading-relaxed">
          Empowering students across India by providing a transparent, efficient, and centralized platform for scholarship disbursement.
        </p>
      </div>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12 flex flex-col gap-12">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            The National Scholarship Portal (NSP) is a highly scalable, one-stop digital solution for all scholarship schemes offered by the Government of India. 
            Managed by the Ministry of Education, NSP bridges the gap between scholarship providers and deserving students, ensuring that financial aid reaches 
            the right candidates without any leaks or delays.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">Our Vision</h3>
            <p className="text-blue-900/80 leading-relaxed">
              To create a digitally empowered society where every deserving student has unhindered access to education through timely financial assistance, 
              fostering academic excellence and inclusive growth.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Our Mission</h3>
            <p className="text-green-900/80 leading-relaxed">
              To simplify the scholarship application process, implement a robust verification mechanism, and execute direct benefit transfers (DBT) directly 
              into the bank accounts of students, ensuring zero leakage.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Core Objectives & Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-sm">⚡</div>
              <h4 className="font-bold text-gray-800 mb-2">Centralized Platform</h4>
              <p className="text-sm text-gray-600">A single portal for Central, State, and UGC scholarship schemes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-sm">🔍</div>
              <h4 className="font-bold text-gray-800 mb-2">Transparency</h4>
              <p className="text-sm text-gray-600">Real-time tracking of applications for students and institutes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-sm">🛡️</div>
              <h4 className="font-bold text-gray-800 mb-2">No Duplication</h4>
              <p className="text-sm text-gray-600">Advanced deduplication using Aadhar and robust multi-tier verification.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl mb-4 shadow-sm">💸</div>
              <h4 className="font-bold text-gray-800 mb-2">Direct Transfer</h4>
              <p className="text-sm text-gray-600">Scholarship amounts are credited directly to student bank accounts (DBT).</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Ready to start your educational journey?</h2>
          <p className="text-gray-600 mb-6">Join millions of students who have benefited from the National Scholarship Portal.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register/student" className="btn-primary px-8 py-3 rounded-lg shadow hover:scale-105 transition-transform text-center">Apply Now</Link>
            <Link to="/contact" className="btn-secondary px-8 py-3 rounded-lg shadow hover:scale-105 transition-transform text-center">Contact Support</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
