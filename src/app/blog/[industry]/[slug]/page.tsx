import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostTemplate from '../../../../components/BlogPostTemplate';
import { snowPosts } from '../../../../lib/blog-snow-data';
import { snowPlowingPosts, iceManagementPosts, snowSchedulingPosts } from '../../../../lib/blog-snow-sub-data';
import { poolServicePosts, poolCleaningPosts, poolMaintenancePosts, poolRoutePosts } from '../../../../lib/blog-pool-data';

const SILO_DATA: Record<string, typeof snowPosts> = {
  'snow-removal': snowPosts,
  'snow-plowing': snowPlowingPosts,
  'ice-management': iceManagementPosts,
  'snow-removal-scheduling': snowSchedulingPosts,
  'pool-service': poolServicePosts,
  'pool-cleaning': poolCleaningPosts,
  'pool-maintenance': poolMaintenancePosts,
  'pool-route': poolRoutePosts,
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
  if (!posts) return {};
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | IndustryBossPro Blog`, description: post.description };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ industry: string; slug: string }> }
) {
  const { industry, slug } = await params;
  const posts = SILO_DATA[industry];
  if (!posts) notFound();
  const postIndex = posts.findIndex(p => p.slug === slug);
  const post = posts[postIndex];
  if (!post) notFound();
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : undefined;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : undefined;
  return <BlogPostTemplate post={post} industry={industry} prevPost={prevPost} nextPost={nextPost} />;
}
