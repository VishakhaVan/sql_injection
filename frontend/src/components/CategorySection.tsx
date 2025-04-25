
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

interface CategorySectionProps {
  title: string;
  articles: Article[];
}

const CategorySection = ({ title, articles }: CategorySectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">{title}</h2>
          <a 
            href="#" 
            className="text-news-red hover:underline font-medium"
          >
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              imageUrl={article.imageUrl}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              size="small"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
