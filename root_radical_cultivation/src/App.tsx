import React from 'react';
import { Leaf, Menu, ShoppingCart, Search, ArrowRight } from 'lucide-react';

function App() {
  const featuredPlants = [
    {
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80",
      price: "$45",
      category: "Indoor Plants"
    },
    {
      name: "Snake Plant",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&q=80",
      price: "$35",
      category: "Air Purifying"
    },
    {
      name: "Fiddle Leaf Fig",
      image: "https://images.unsplash.com/photo-1597055181300-b7b43e861b92?auto=format&fit=crop&q=80",
      price: "$65",
      category: "Popular"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-emerald-800 text-white fixed w-full z-50">
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
              <button className="p-2 hover:bg-emerald-700 rounded-full" title="Search plants">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-emerald-700 rounded-full" title="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
            <div className="md:hidden">
              <button className="p-2 hover:bg-emerald-700 rounded-full" title="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80"
              alt="Beautiful garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Cultivate Your <br />
              Perfect Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover our curated collection of rare and beautiful plants, 
              expertly grown to transform your space into a living paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-full text-lg font-semibold transition-colors">
                Shop Plants
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-100 text-emerald-800 rounded-full text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Featured Plants */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Plants</h2>
                <p className="text-gray-600">Discover our most popular selections</p>
              </div>
              <button className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700">
                View All <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPlants.map((plant, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-80">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-emerald-600">
                        {plant.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plant.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-emerald-600">{plant.price}</span>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                View All Plants <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative h-96 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80"
                  alt="Indoor Plants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Indoor Plants</h3>
                  <p className="text-sm opacity-75">Perfect for your home or office</p>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&q=80"
                  alt="Succulents"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Succulents</h3>
                  <p className="text-sm opacity-75">Low maintenance beauty</p>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80"
                  alt="Air Plants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Air Plants</h3>
                  <p className="text-sm opacity-75">No soil required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Green Community</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to receive care tips, special offers, and first access to new plants.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6" />
                <span className="ml-2 text-lg font-bold">Root Radical Cultivation</span>
              </div>
              <p className="text-emerald-200">
                Bringing nature into your space with carefully curated plants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#plants" className="text-emerald-200 hover:text-white">Plants</a></li>
                <li><a href="#services" className="text-emerald-200 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-emerald-200 hover:text-white">About Us</a></li>
                <li><a href="#contact" className="text-emerald-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-emerald-200 hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white">Plant Care</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-emerald-200 mb-4">Follow us for plant care tips and updates</p>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-200 hover:text-white">Instagram</a>
                <a href="#" className="text-emerald-200 hover:text-white">Facebook</a>
                <a href="#" className="text-emerald-200 hover:text-white">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-12 pt-8 text-center text-emerald-200">
            <p>&copy; {new Date().getFullYear()} Root Radical Cultivation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;