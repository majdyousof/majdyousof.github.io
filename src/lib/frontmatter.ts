export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string;
};

const requiredFields: Array<keyof ArticleFrontmatter> = [
  'title',
  'description',
  'date',
  'tags',
];

export const parseFrontmatter = (source: string, filename: string) => {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) throw new Error(`${filename} must start with frontmatter.`);

  const metadata = Object.fromEntries(
    match[1].split('\n').map((line) => {
      const separator = line.indexOf(':');
      return [
        line.slice(0, separator).trim(),
        line.slice(separator + 1).trim(),
      ];
    })
  ) as Partial<ArticleFrontmatter>;

  if (requiredFields.some((field) => !metadata[field])) {
    throw new Error(`${filename} has incomplete frontmatter.`);
  }

  return { frontmatter: metadata as ArticleFrontmatter, content: match[2] };
};
