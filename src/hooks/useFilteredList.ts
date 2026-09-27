import { useState } from 'react';

type ListItem = { date: string; tags: string[] };

export const dateSortOptions = {
  newest: {
    label: 'Newest first',
    compare: (first: ListItem, second: ListItem) =>
      second.date.localeCompare(first.date),
  },
  oldest: {
    label: 'Oldest first',
    compare: (first: ListItem, second: ListItem) =>
      first.date.localeCompare(second.date),
  },
};

export function useFilteredList<T extends ListItem, S extends string>(
  items: T[],
  sortOptions: Record<
    S,
    { label: string; compare: (first: T, second: T) => number }
  >,
  initialSort: S
) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<S>(initialSort);

  return {
    items: items
      .filter(
        (item) =>
          !selectedTags.length ||
          selectedTags.some((tag) => item.tags.includes(tag))
      )
      .sort(sortOptions[sort].compare),
    tags: [...new Set(items.flatMap((item) => item.tags))].sort(),
    selectedTags,
    setSelectedTags,
    sort,
    setSort,
    sortOptions,
  };
}
