import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostTemplate from '../../../../components/BlogPostTemplate';
import { poolServicePosts } from '../../../../lib/blog-pool-data';
import { landscapeSchedulingPosts } from '../../../../lib/blog-landscaping-data';
import { iceManagementPosts } from '../../../../lib/blog-snow-sub-data';
import { weedControlPosts } from '../../../../lib/blog-lawn-care-data';
import { poolCleaningPosts } from '../../../../lib/blog-pool-data';
import { poolMaintenancePosts } from '../../../../lib/blog-pool-data';
import { landscapeMaintenancePosts } from '../../../../lib/blog-landscaping-data';
import { fertilizerPosts } from '../../../../lib/blog-lawn-care-data';
import { snowPlowingPosts } from '../../../../lib/blog-snow-sub-data';
import { lawnChemicalPosts } from '../../../../lib/blog-lawn-care-data';
import { lawnTreatmentPosts } from '../../../../lib/blog-lawn-care-data';
import { snowPosts } from '../../../../lib/blog-snow-data';
import { lawnCarePosts } from '../../../../lib/blog-lawn-care-data';
import { irrigationPosts, sprinklerSystemPosts, irrigationBusinessPosts, irrigationSchedulingPosts } from '../../../../lib/blog-irrigation-data';
import { pestControlPosts, exterminatorPosts, pestManagementPosts, pestSchedulingPosts } from '../../../../lib/blog-pest-data';
import { mosquitoControlPosts, mosquitoSprayPosts, mosquitoTreatmentPosts, mosquitoBusinessPosts } from '../../../../lib/blog-mosquito-data';
import { fenceCompanyPosts, fenceInstallationPosts, fenceBusinessPosts } from '../../../../lib/blog-fence-data';
import { lawnMowingPosts, mowingBusinessPosts, grassCuttingPosts, lawnMowingSchedulingPosts } from '../../../../lib/blog-mowing-data';

const SILO_DATA: Record<string, typeof poolServicePosts> = {
  'pool-service': poolServicePosts,
  'landscape-scheduling': landscapeSchedulingPosts,
  'ice-management': iceManagementPosts,
  'weed-control': weedControlPosts,
  'pool-cleaning': poolCleaningPosts,
  'pool-maintenance': poolMaintenancePosts,
  'landscape-maintenance': landscapeMaintenancePosts,
  'fertilizer': fertilizerPosts,
  'snow-plowing': snowPlowingPosts,
  'lawn-chemical-application': lawnChemicalPosts,
  'lawn-treatment': lawnTreatmentPosts,
  'snow-removal': snowPosts,
  'lawn-care': lawnCarePosts,
  'irrigation': irrigationPosts,
  'sprinkler-system': sprinklerSystemPosts,
  'irrigation-business': irrigationBusinessPosts,
  'irrigation-scheduling': irrigationSchedulingPosts,
  'pest-control': pestControlPosts,
  'exterminator': exterminatorPosts,
  'pest-management': pestManagementPosts,
  'pest-control-scheduling': pestSchedulingPosts,
  'mosquito-control': mosquitoControlPosts,
  'mosquito-spray': mosquitoSprayPosts,
  'mosquito-treatment': mosquitoTreatmentPosts,
  'mosquito-business': mosquitoBusinessPosts,
  'fence-company': fenceCompanyPosts,
  'fence-installation': fenceInstallationPosts,
  'fence-business': fenceBusinessPosts,
  'lawn-mowing': lawnMowingPosts,
  'mowing-business': mowingBusinessPosts,
  'grass-cutting': grassCuttingPosts,
  'lawn-mowing-scheduling': lawnMowingSchedulingPosts,
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
  // Wrap-around silo chain: blog N links to blog N-1, and blog 1 links to the last blog.
  const prevPost = posts.length > 1 ? posts[(postIndex - 1 + posts.length) % posts.length] : undefined;
  const nextPost = posts.length > 1 ? posts[(postIndex + 1) % posts.length] : undefined;
  return <BlogPostTemplate post={post} industry={industry} prevPost={prevPost} nextPost={nextPost} />;
}
