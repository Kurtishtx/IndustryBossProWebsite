import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostTemplate from '../../../../components/BlogPostTemplate';
import { CATEGORIES, getCategory } from '../../../../lib/blog';

export async function generateStaticParams() {
  const params: { industry: string; slug: string }[] = [];
  for (const c of CATEGORIES) {
    for (const post of c.posts) {
      params.push({ industry: c.slug, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata(
  { params }: { params: Promise<{ industry: string; slug: string }> }
): Promise<Metadata> {
  const { industry, slug } = await params;
  const posts = getCategory(industry)?.posts;
  if (!posts) return {};
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | IndustryBossPro Blog`, description: post.description };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ industry: string; slug: string }> }
) {
  const { industry, slug } = await params;
  const posts = getCategory(industry)?.posts;
  if (!posts) notFound();
  const postIndex = posts.findIndex(p => p.slug === slug);
  const post = posts[postIndex];
  if (!post) notFound();
  // Wrap-around silo chain: blog N links to blog N-1, and blog 1 links to the last blog.
  const prevPost = posts.length > 1 ? posts[(postIndex - 1 + posts.length) % posts.length] : undefined;
  const nextPost = posts.length > 1 ? posts[(postIndex + 1) % posts.length] : undefined;

  const url = `https://industrybosspro.com/blog/${industry}/${slug}`;
  const industryLabel = getCategory(industry)!.label;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@type': 'Organization', name: 'IndustryBossPro', url: 'https://industrybosspro.com' },
        publisher: {
          '@type': 'Organization',
          name: 'IndustryBossPro',
          logo: { '@type': 'ImageObject', url: 'https://industrybosspro.com/icon.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        about: post.hubKeyword,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://industrybosspro.com/blog' },
          { '@type': 'ListItem', position: 2, name: industryLabel, item: `https://industrybosspro.com/blog/${industry}` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostTemplate post={post} industry={industry} prevPost={prevPost} nextPost={nextPost} />
    </>
  );
}
