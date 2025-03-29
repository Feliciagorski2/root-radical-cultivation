import React from 'react';
import { Leaf, MapPin, Truck, Shield, Menu, ShoppingCart, Search } from 'lucide-react';

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

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80"
            alt="Beautiful garden landscape"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Space<br />Into a Living Paradise
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover our curated collection of plants and expert landscaping services. 
            From rare specimens to complete garden transformations, we bring your vision to life.
          </p>
          <div className="mt-10 flex space-x-4">
            <a href="#shop" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
              Shop Plants
            </a>
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50">
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-lg">
              <Truck className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-lg">Safe Plant Delivery</h3>
                <p className="text-gray-600">Carefully packaged and delivered to your door</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-lg">
              <MapPin className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-lg">Local Expertise</h3>
                <p className="text-gray-600">Serving your area with specialized knowledge</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-lg">
              <Shield className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-lg">Plant Health Guarantee</h3>
                <p className="text-gray-600">30-day guarantee on all plants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;