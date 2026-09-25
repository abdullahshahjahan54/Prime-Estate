import React from 'react';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import { PROPERTIES_DATA } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate }) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-neutral-200 text-center max-w-md">
          <h2 className="text-xl font-bold font-display text-neutral-900 mb-2">Guide Not Found</h2>
          <p className="text-xs text-neutral-500 mb-6">
            The requested real estate guide or market report could not be found.
          </p>
          <button
            onClick={() => onNavigate('/blog')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800"
          >
            Return to All Guides
          </button>
        </div>
      </div>
    );
  }

  // Related properties
  const relatedProperties = PROPERTIES_DATA.filter((p) => 
    post.relatedPropertySlugs.includes(p.slug)
  );

  // Other blog posts
  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  // Schema.org Article Structured Data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://primeestate.vercel.app${post.featuredImage}`,
    datePublished: '2026-03-01T08:00:00+05:00',
    dateModified: '2026-03-20T10:00:00+05:00',
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Prime Estate',
      logo: {
        '@type': 'ImageObject',
        url: 'https://primeestate.vercel.app/og-image.jpg',
      },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <SEO
        title={`${post.title} | Prime Estate`}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.featuredImage}
        ogType="article"
        jsonLd={articleSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: 'Real Estate Guides', href: '/blog' },
            { label: post.title }
          ]}
          onNavigate={onNavigate}
        />

        {/* Article Header */}
        <header className="my-8">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
            <span className="font-semibold text-amber-700 uppercase tracking-wider">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              <span>{post.publishedDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            {post.title}
          </h1>

          <div className="mt-6 pt-6 border-t border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm font-display">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">{post.author}</div>
                <div className="text-[11px] text-neutral-500">{post.authorRole}</div>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="p-2 rounded-xl border border-neutral-200 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 text-xs text-neutral-700"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-10 shadow-sm border border-neutral-200 bg-neutral-900">
          <img
            src={post.featuredImage}
            alt={post.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Table of Contents */}
        {post.headings.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-10 text-xs">
            <div className="font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Table of Contents</span>
            </div>
            <ul className="space-y-2 text-neutral-600">
              {post.headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="hover:text-amber-800 transition-colors hover:underline block"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-neutral max-w-none mb-12 text-sm text-neutral-800 leading-relaxed space-y-6">
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              const text = paragraph.replace('### ', '');
              return (
                <h2 key={idx} className="text-xl font-bold font-display text-neutral-950 pt-4">
                  {text}
                </h2>
              );
            }
            return (
              <p key={idx} className="whitespace-pre-line leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Tags */}
        <div className="py-6 border-y border-neutral-200 flex items-center flex-wrap gap-2 text-xs mb-12">
          <Tag className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-500 mr-2">Topics:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-neutral-100 text-neutral-800 px-3 py-1 rounded-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Featured in this Guide
                </span>
                <h3 className="text-xl font-bold text-neutral-950 font-display">
                  Relevant Properties for Sale
                </h3>
              </div>
              <button
                onClick={() => onNavigate('/buy')}
                className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
              >
                <span>View More Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProperties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <div className="mb-16 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-950 font-display mb-6">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {otherPosts.map((op) => (
                <div
                  key={op.id}
                  className="bg-white p-5 rounded-2xl border border-neutral-200 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-amber-700">{op.category}</span>
                    <h4 className="text-sm font-bold text-neutral-950 font-display my-1">
                      {op.title}
                    </h4>
                    <p className="text-neutral-500 line-clamp-2">{op.excerpt}</p>
                  </div>
                  <button
                    onClick={() => onNavigate(`/blog/${op.slug}`)}
                    className="mt-4 font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
