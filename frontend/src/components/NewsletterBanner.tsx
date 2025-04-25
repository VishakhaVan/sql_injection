
import { Button } from "@/components/ui/button";

const NewsletterBanner = () => {
  return (
    <section className="bg-news-red text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Never Miss a Story</h2>
            <p className="text-white/80">
              Stay up to date with the latest news. Subscribe to our newsletter today.
            </p>
          </div>
          
          <div className="md:w-1/2 max-w-md">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white text-black px-4 py-3 rounded-l w-full focus:outline-none"
              />
              <Button className="bg-news-black hover:bg-gray-900 text-white px-6 rounded-r">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-2 text-white/70">
              By subscribing, you agree to our Privacy Policy and consent to receive news from The Daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
