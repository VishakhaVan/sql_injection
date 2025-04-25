
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-serif font-bold italic">
              <span className="text-news-red">The</span> Daily
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#" className="font-medium hover:text-news-red transition-colors">News</a>
            <a href="#" className="font-medium hover:text-news-red transition-colors">Politics</a>
            <a href="#" className="font-medium hover:text-news-red transition-colors">Culture</a>
            <a href="#" className="font-medium hover:text-news-red transition-colors">Music</a>
            <a href="#" className="font-medium hover:text-news-red transition-colors">Tech</a>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>
          </nav>
          
          {/* Mobile search button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-medium hover:text-news-red transition-colors">News</a>
              <a href="#" className="font-medium hover:text-news-red transition-colors">Politics</a>
              <a href="#" className="font-medium hover:text-news-red transition-colors">Culture</a>
              <a href="#" className="font-medium hover:text-news-red transition-colors">Music</a>
              <a href="#" className="font-medium hover:text-news-red transition-colors">Tech</a>
            </nav>
          </div>
        )}

        {/* Search bar */}
        {searchOpen && (
          <div className="pt-4 pb-2">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-news-red"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2" 
                variant="ghost" 
                size="icon"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewsHeader;
