import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, User, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Buying Guides', 'Market Guides', 'Investment Strategy', 'Commercial Property', 'Rental Advice'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'all') return true;
    return post.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title="Real Estate Guides, Market Reports & Investment Insights | Prime Estate"
        description="Read in-depth guides on buying property in Pakistan, legal due diligence checklists, commercial yield comparisons, and local market analysis."
        canonicalPath="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[{ label: 'Real Estate Guides & Blog' }]}
          onNavigate={onNavigate}
        />

        <div className="my-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Market Intelligence & Due Diligence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display mt-2 leading-tight">
            Real Estate Guides & Market Insights
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Essential knowledge for buyers, sellers, landlords, and institutional investors. Practical legal advice, FBR tax guidelines, and neighborhood investment comparisons.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-medium transition-colors capitalize whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>

        {/* Featured Top Article */}
        {filteredPosts.length > 0 && selectedCategory === 'all' && (
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 mb-12 shadow-sm grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-neutral-100">
              <img
                src={filteredPosts[0].featuredImage}
                alt={filteredPosts[0].imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                  <span className="font-semibold text-amber-700 uppercase tracking-wider">{filteredPosts[0].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredPosts[0].publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{filteredPosts[0].readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-display mb-3 leading-snug">
                  {filteredPosts[0].title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {filteredPosts[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="text-xs text-neutral-500">
                  By <strong className="text-neutral-900">{filteredPosts[0].author}</strong>
                </div>

                <button
                  onClick={() => onNavigate(`/blog/${filteredPosts[0].slug}`)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(selectedCategory === 'all' ? filteredPosts.slice(1) : filteredPosts).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="font-semibold text-amber-700">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 hover:text-amber-800 transition-colors line-clamp-2 mb-2 font-display">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-auto text-xs">
                <span className="text-neutral-500">{post.publishedDate}</span>
                <button
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="font-semibold text-neutral-900 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
