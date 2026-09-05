import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Link, Navigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import {
  articles,
  formatArticleDate,
  resolveArticleAsset,
} from '../data/articles';
import rehypeSidenotes from '../lib/rehypeSidenotes';
import '../styling/Article.css';

const Article: React.FC = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) return <Navigate to="/articles" replace />;

  return (
    <div className="App">
      <NavBar />
      <PageMeta title={article.title} description={article.description} />
      <main className="content-container article-page">
        <Link className="back-link" to="/articles">
          ← All articles
        </Link>
        <article>
          <header className="article-header">
            <p>
              {formatArticleDate(article.date)} · {article.readingTime}
            </p>
          </header>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeSidenotes]}
            components={{
              img: ({ src, ...properties }) => (
                <img
                  {...properties}
                  src={src ? resolveArticleAsset(article.slug, src) : undefined}
                />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default Article;
