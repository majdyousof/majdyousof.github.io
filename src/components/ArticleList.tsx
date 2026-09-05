import React from 'react';
import { Link } from 'react-router-dom';
import { formatArticleDate, type Article } from '../data/articles';
import '../styling/ArticleList.css';

type ArticleListProps = {
  articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <>
    {articles.length === 0 ? (
      <p className="empty-state">No articles match these tags.</p>
    ) : (
      <ol className="article-list">
        {articles.map((article) => (
          <li key={article.slug} className="article-entry">
            <div className="article-copy">
              <h2>
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.description}</p>
            </div>
            <aside
              className="article-note"
              aria-label={`${article.title} details`}
            >
              <span>{formatArticleDate(article.date)}</span>
              <span>{article.readingTime}</span>
              <span>{article.tags.join(' · ')}</span>
            </aside>
          </li>
        ))}
      </ol>
    )}
  </>
);

export default ArticleList;
