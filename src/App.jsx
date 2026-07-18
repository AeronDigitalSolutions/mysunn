import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import CategoryGrid from './components/CategoryGrid';
import TrendingCategories from './components/TrendingCategories';
import FlashDeals from './components/FlashDeals';
import ProductRow from './components/ProductRow';
import LifestyleGrid from './components/LifestyleGrid';
import FeaturedBrands from './components/FeaturedBrands';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerReviews from './components/CustomerReviews';
import AppBanner from './components/AppBanner';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const bestSellers = [
    { id: 1, title: 'SMART WATCH SERIES 8', description: 'Bulk order | Min 50 pcs', price: 735, originalPrice: 1000, discount: '26% OFF', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80', badges: ['High Margin'] },
    { id: 2, title: 'WIRELESS EARBUDS PRO', description: 'Noise Cancelling | Bulk 100 pcs', price: 725, originalPrice: 800, discount: '9% OFF', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'PORTABLE SPEAKER BT', description: 'Electronics | Min 20 pcs', price: 635, originalPrice: 1000, discount: '36% OFF', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80', badges: ['Trending'] },
    { id: 4, title: 'LED RING LIGHT SET', description: 'Creator Tools | Min 10 pcs', price: 825, originalPrice: 1200, discount: '31% OFF', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80' }
  ];

  const newArrivals = [
    { id: 5, title: 'MINI PROJECTOR', description: 'Home Theater | Min 10 pcs', price: 4500, originalPrice: 6000, discount: '25% OFF', image: 'https://images.unsplash.com/photo-1585862705417-67012ef89366?auto=format&fit=crop&w=400&q=80', tag: 'NEW' },
    { id: 6, title: 'SMART PLUG WIFI', description: 'Home Automation', price: 450, originalPrice: 900, discount: '50% OFF', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80', tag: 'NEW' },
    { id: 7, title: 'BAMBOO CUTTING BOARD', description: 'Kitchenware | Min 50 pcs', price: 299, image: 'https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&w=400&q=80', tag: 'NEW' },
    { id: 8, title: 'YOGA MAT PRO', description: 'Fitness | Bulk 100 pcs', price: 350, originalPrice: 500, discount: '30% OFF', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&q=80', tag: 'NEW' }
  ];

  const recommended = [
    { id: 9, title: 'VACUUM INSULATED FLASK', description: 'Travel | Min 30 pcs', price: 550, originalPrice: 800, discount: '31% OFF', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80', badges: ['AI Pick'] },
    { id: 10, title: 'POWER BANK 10000mAh', description: 'Accessories', price: 899, originalPrice: 1499, discount: '40% OFF', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=400&q=80', badges: ['AI Pick'] },
    { id: 11, title: 'DESK ORGANIZER', description: 'Office | Min 40 pcs', price: 199, image: 'https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=400&q=80', badges: ['AI Pick'] },
    { id: 12, title: 'MASSAGE GUN', description: 'Wellness | Min 5 pcs', price: 1800, originalPrice: 3500, discount: '48% OFF', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=80', badges: ['AI Pick'] }
  ];

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSearch />
        <CategoryGrid />
        <TrendingCategories />
        <FlashDeals />
        
        <ProductRow 
          title="Best Sellers" 
          highlight="Weekly" 
          products={bestSellers} 
        />
        
        <ProductRow 
          title="New Arrivals" 
          products={newArrivals} 
        />
        
        <LifestyleGrid />
        
        <ProductRow 
          title="Recommended For You" 
          highlight="AI" 
          products={recommended} 
        />
        
        <FeaturedBrands />
        <WhyChooseUs />
        <CustomerReviews />
        <AppBanner />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
