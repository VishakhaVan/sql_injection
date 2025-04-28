
import ArticleCard from "@/components/ArticleCard";

interface Article {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  excerpt?: string;
  author: string;
  date: string;
}

interface LatestNewsSectionProps {
  articles: Article[];
}

const LatestNewsSection = ({ articles }: LatestNewsSectionProps) => {
  // Use the first article as the main feature, and the rest as side articles
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4);
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Latest News</h2>
          <a 
            href="#" 
            className="text-news-red hover:underline font-medium"
          >
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ArticleCard
              title={mainArticle.title}
              category={mainArticle.category}
              imageUrl={mainArticle.imageUrl}
              excerpt={mainArticle.excerpt}
              author={mainArticle.author}
              date={mainArticle.date}
              size="large"
            />
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            {sideArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                category={article.category}
                imageUrl={article.imageUrl}
                author={article.author}
                date={article.date}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
