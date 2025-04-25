import { useEffect, useState } from 'react';
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NewsHeader />

      <main className="flex-grow">
        <TrendingTopics topics={trendingTopics} />

        <section className="py-6">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
            {articles.map((article) => (
              <div key={article.id} className="mb-6">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <div
                  className="mt-2 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
              </div>
            ))}
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
