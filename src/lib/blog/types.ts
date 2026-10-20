export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
  intro: string;
  sections: { h2: string; content: string }[];
  hubSlug: string;
  hubKeyword: string;
  industry: string;
}
