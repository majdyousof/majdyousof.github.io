import React, { useState } from 'react';
import ArticleList from '../components/ArticleList';
import Dropdown from '../components/Dropdown';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import TagFilter from '../components/TagFilter';
import { articles } from '../data/articles';
import '../styling/App.css';

const sortOptions = {
  newest: 'Newest first',
  oldest: 'Oldest first',
  longest: 'Longest read',
  shortest: 'Shortest read',
} as const;

type ArticleSort = keyof typeof sortOptions;

const Articles: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<ArticleSort>('newest');
  const tags = [...new Set(articles.flatMap((article) => article.tags))].sort();
  const visibleArticles = [
    ...(selectedTags.length
      ? articles.filter((article) =>
          selectedTags.some((tag) => article.tags.includes(tag))
        )
      : articles),
  ].sort((first, second) => {
    if (sort === 'oldest') return first.date.localeCompare(second.date);
    if (sort === 'longest')
      return second.readingTimeMinutes - first.readingTimeMinutes;
    if (sort === 'shortest')
      return first.readingTimeMinutes - second.readingTimeMinutes;
    return second.date.localeCompare(first.date);
  });

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
          <div className="list-controls">
            <TagFilter
              tags={tags}
              selectedTags={selectedTags}
              onChange={setSelectedTags}
            />
            <Dropdown label="Sort" value={sortOptions[sort]} closeOnOptionClick>
              {Object.entries(sortOptions).map(([value, label]) => (
                <button
                  className={sort === value ? 'selected' : ''}
                  key={value}
                  type="button"
                  onClick={() => setSort(value as ArticleSort)}
                >
                  {label}
                </button>
              ))}
            </Dropdown>
          </div>
          <ArticleList articles={visibleArticles} />
        </section>
      </main>
    </div>
  );
};

export default Articles;
