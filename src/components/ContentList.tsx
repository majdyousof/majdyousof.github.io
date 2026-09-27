import type { ReactNode } from 'react';
import { formatDate } from '../lib/dates';
import '../styling/ContentList.css';

type ContentItem = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

type ContentListProps<T extends ContentItem> = {
  items: T[];
  emptyMessage: string;
  itemKey: (item: T) => string;
  renderTitle: (item: T) => ReactNode;
  renderDetail: (item: T) => ReactNode;
};

export default function ContentList<T extends ContentItem>({
  items,
  emptyMessage,
  itemKey,
  renderTitle,
  renderDetail,
}: ContentListProps<T>) {
  if (!items.length) return <p className="empty-state">{emptyMessage}</p>;

  return (
    <ol className="content-list">
      {items.map((item) => (
        <li key={itemKey(item)} className="content-entry">
          <div className="content-copy">
            <h2>{renderTitle(item)}</h2>
            <p>{item.description}</p>
          </div>
          <aside className="content-note" aria-label={`${item.title} details`}>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <span>{renderDetail(item)}</span>
            <span>{item.tags.join(' · ')}</span>
          </aside>
        </li>
      ))}
    </ol>
  );
}
