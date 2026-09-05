import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseFrontmatter } from '../src/lib/frontmatter';

const siteUrl = 'https://majdyousof.github.io';
const articlesDirectory = 'src/content/articles';
const outputPath = 'public/rss.xml';

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (character) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
      })[character] ?? character
  );

const articles = await Promise.all(
  (await readdir(articlesDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map(async (entry) => {
      const directory = entry.name;
      const source = await readFile(
        join(articlesDirectory, directory, 'index.md'),
        'utf8'
      );
      const { frontmatter } = parseFrontmatter(source, `${directory}/index.md`);
      return { ...frontmatter, slug: directory };
    })
);

articles.sort((first, second) => second.date.localeCompare(first.date));

const items = articles.map((article) => {
  const url = `${siteUrl}/articles/${article.slug}`;
  return `    <item>
      <title>${escapeXml(article.title)}</title>
      <description>${escapeXml(article.description)}</description>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
});

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Majd Yousof</title>
    <description>Articles and notes by Majd Yousof.</description>
    <link>${siteUrl}</link>
${items.join('\n')}
  </channel>
</rss>
`;

await mkdir('public', { recursive: true });
await writeFile(outputPath, feed);
