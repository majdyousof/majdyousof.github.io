import React from 'react';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';
import ListControls from '../components/ListControls';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import { articles, type Article } from '../data/articles';
import { dateSortOptions, useFilteredList } from '../hooks/useFilteredList';
import '../styling/App.css';

const sortOptions = {
  ...dateSortOptions,
  longest: {
    label: 'Longest read',
    compare: (first: Article, second: Article) =>
      second.readingTimeMinutes - first.readingTimeMinutes,
  },
  shortest: {
    label: 'Shortest read',
    compare: (first: Article, second: Article) =>
      first.readingTimeMinutes - second.readingTimeMinutes,
  },
};

const Articles: React.FC = () => {
  const { items: visibleArticles, ...controls } = useFilteredList(
    articles,
    sortOptions,
    'newest'
  );

  return (
    <div className="App">
      <NavBar />
      <PageMeta
        title="Articles"
        description="Articles and notes by Majd Yousof."
      />
      <main className="content-container">
        <section>
          <h1>Articles</h1>
          <ListControls {...controls} />
          <ArticleList articles={visibleArticles} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
