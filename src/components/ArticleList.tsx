import { Link } from 'react-router-dom';
import type { Article } from '../data/articles';
import ContentList from './ContentList';

const ArticleList = ({ articles }: { articles: Article[] }) => (
  <ContentList
    items={articles}
    emptyMessage="No articles match these tags."
    itemKey={(article) => article.slug}
    renderTitle={(article) => (
      <Link to={`/articles/${article.slug}`}>{article.title}</Link>
    )}
    renderDetail={(article) => article.readingTime}
  />
);

export default ArticleList;
