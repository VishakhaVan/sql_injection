
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  category: string;
  imageUrl: string;
  excerpt?: string;
  author: string;
  date: string;
  size?: "small" | "medium" | "large";
}

const ArticleCard = ({
  title,
  category,
  imageUrl,
  excerpt,
  author,
  date,
  size = "medium",
}: ArticleCardProps) => {
  return (
    <Card className="border-0 shadow-none h-full hover:opacity-90 transition-opacity">
      <div className="flex flex-col h-full">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full object-cover ${
              size === "small" ? "h-48" : size === "medium" ? "h-56" : "h-72"
            }`}
          />
        </div>
        <CardContent className="flex-1 pt-4 px-0">
          <div className="news-category">{category}</div>
          <h3 
            className={`font-serif font-bold ${
              size === "small" ? "text-lg" : size === "medium" ? "text-xl" : "text-2xl"
            } mb-2`}
          >
            {title}
          </h3>
          
          {excerpt && size !== "small" && (
            <p className="text-gray-600 mb-3 line-clamp-3">{excerpt}</p>
          )}
          
          <div className="text-xs text-gray-500">
            <span className="font-semibold">{author}</span>
            <span className="mx-1">•</span>
            <span>{date}</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ArticleCard;
