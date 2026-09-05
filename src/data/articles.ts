import readingTime from 'reading-time/lib/reading-time';
import { parseFrontmatter } from '../lib/frontmatter';

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  readingTimeMinutes: number;
  tags: string[];
  content: string;
};

const articleFiles = import.meta.glob<string>(
  '../content/articles/*/index.md',
  {
    eager: true,
    import: 'default',
    query: '?raw',
  }
);

const articleAssets = import.meta.glob<string>(
  '../content/articles/**/*.{avif,gif,jpeg,jpg,png,svg,webp}',
  { eager: true, import: 'default', query: '?url' }
);

const parseArticle = (path: string, source: string): Article => {
  const { frontmatter, content } = parseFrontmatter(source, path);

  const pathSegments = path.split('/');
  const slug = pathSegments[pathSegments.length - 2];
  if (!slug) throw new Error(`Could not determine a slug for ${path}.`);

  const estimate = readingTime(content);

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    readingTime: estimate.text,
    readingTimeMinutes: estimate.minutes,
    tags: frontmatter.tags.split(',').map((tag) => tag.trim()),
    content,
  };
};

export const articles = Object.entries(articleFiles)
  .map(([path, source]) => parseArticle(path, source))
  .sort((first, second) => second.date.localeCompare(first.date));

export const formatArticleDate = (date: string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

export const resolveArticleAsset = (slug: string, source: string) => {
  if (!source.startsWith('./')) return source;
  return (
    articleAssets[`../content/articles/${slug}/${source.slice(2)}`] ?? source
  );
};
