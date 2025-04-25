
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedArticleProps {
  title: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  author: string;
  date: string;
}

const FeaturedArticle = ({
  title,
  category,
  imageUrl,
  excerpt,
  author,
  date,
}: FeaturedArticleProps) => {
  return (
    <Card className="border-0 shadow-none overflow-hidden">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-[60vh] object-cover"
        />
        <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <div className="news-category">{category}</div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3">{title}</h2>
          <p className="text-lg mb-4 max-w-3xl">{excerpt}</p>
          <div className="flex items-center text-sm">
            <span className="font-semibold">{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedArticle;
