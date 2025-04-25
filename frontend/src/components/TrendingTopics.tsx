
import { Button } from "@/components/ui/button";

interface TrendingTopicsProps {
  topics: string[];
}

const TrendingTopics = ({ topics }: TrendingTopicsProps) => {
  return (
    <section className="py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <span className="font-semibold mr-4 mb-2">Trending:</span>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="rounded-full text-sm hover:bg-gray-100"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
