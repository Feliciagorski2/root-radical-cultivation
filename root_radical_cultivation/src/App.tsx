import React from 'react';
import { Leaf, Menu, ShoppingCart, Search } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Root Radical Cultivation</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#plants" className="hover:text-emerald-200">Plants</a>
              <a href="#services" className="hover:text-emerald-200">Services</a>
              <a href="#about" className="hover:text-emerald-200">About</a>
              <a href="#contact" className="hover:text-emerald-200">Contact</a>
              <button className="p-2 hover:bg-emerald-700 rounded-full">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-emerald-700 rounded-full">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
            <div className="md:hidden">
              <button className="p-2 hover:bg-emerald-700 rounded-full">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-emerald-900">
              Welcome to Root Radical Cultivation
            </h1>
            <p className="mt-4 text-lg text-emerald-800">
              Add your main message here
            </p>
          </div>
        </section>

        {/* Plants Section */}
        <section id="plants" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Plants</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Add your plant cards here */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Add your services here */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <div className="mt-8">
              {/* Add your about content here */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <div className="mt-8">
              {/* Add your contact form or information here */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">&copy; {new Date().getFullYear()} Root Radical Cultivation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;