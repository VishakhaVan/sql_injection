
import NewsHeader from "@/components/NewsHeader";
import NewsFooter from "@/components/NewsFooter";
import FeaturedArticle from "@/components/FeaturedArticle";
import LatestNewsSection from "@/components/LatestNewsSection";
import CategorySection from "@/components/CategorySection";
import NewsletterBanner from "@/components/NewsletterBanner";
import TrendingTopics from "@/components/TrendingTopics";

import { 
  featuredArticle, 
  latestNews, 
  politicsArticles, 
  musicArticles, 
  cultureArticles,
  trendingTopics 
} from "@/mockData/articlesData";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NewsHeader />
      
      <main className="flex-grow">
        <TrendingTopics topics={trendingTopics} />
        
        <section className="py-6">
          <div className="container mx-auto px-4">
            <FeaturedArticle
              title={featuredArticle.title}
              category={featuredArticle.category}
              imageUrl={featuredArticle.imageUrl}
              excerpt={featuredArticle.excerpt}
              author={featuredArticle.author}
              date={featuredArticle.date}
            />
          </div>
        </section>
        
        <LatestNewsSection articles={latestNews} />
        
        <NewsletterBanner />
        
        <CategorySection title="Politics" articles={politicsArticles} />
        
        <div className="bg-news-gray py-10">
          <CategorySection title="Music" articles={musicArticles} />
        </div>
        
        <CategorySection title="Culture" articles={cultureArticles} />
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default Index;
