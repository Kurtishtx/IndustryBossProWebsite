import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostTemplate from '../../../../components/BlogPostTemplate';
import { snowPosts } from '../../../../lib/blog-snow-data';

const SILO_DATA: Record<string, typeof snowPosts> = {
  'snow-removal': snowPosts,
};

export async function generateStaticParams() {
  const params: { industry: string; slug: string }[] = [];
  for (const [industry, posts] of Object.entries(SILO_DATA)) {
    for (const post of posts) {
      params.push({ industry, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata(
  { params }: { params: Promise<{ industry: string; slug: string }> }
): Promise<Metadata> {
  const { industry, slug } = await params;
  const posts = SILO_DATA[industry];
  const post = posts?.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | IndustryBossPro Blog`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: 'article' },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ industry: string; slug: string }> }
) {
  const { industry, slug } = await params;
  const posts = SILO_DATA[industry];
  if (!posts) notFound();

  const idx = posts.findIndex(p => p.slug === slug);
  if (idx === -1) notFound();

  const post = posts[idx];
  // Each post links to the previous one; post[0] links to post[29] (last)
  const prevPost = posts[(idx - 1 + posts.length) % posts.length];

  return <BlogPostTemplate post={post} prevPost={prevPost} industry={industry} />;
}
