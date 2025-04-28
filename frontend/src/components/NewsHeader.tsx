
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
const NewsHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>


          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-serif font-bold italic">
              <span className="text-news-red">The</span> Daily
            </h1>
          </div>


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
            <Button
              variant="default"
              onClick={() => navigate('/')}
              className="bg-news-red hover:bg-red-700"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={() => navigate('/')}
              className="bg-news-red hover:bg-red-700"
            >
              <LogIn className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

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

        {searchOpen && (
          <div className="pt-4 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-news-red"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                variant="ghost"
                size="icon"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-4 p-2 border border-dashed border-red-400">
              <strong>Search Result:</strong>
              <div dangerouslySetInnerHTML={{ __html: searchQuery }} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewsHeader;
