import Dropdown from './Dropdown';
import TagFilter from './TagFilter';

type ListControlsProps<S extends string> = {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  sort: S;
  setSort: (sort: S) => void;
  sortOptions: Record<S, { label: string }>;
};

export default function ListControls<S extends string>({
  tags,
  selectedTags,
  setSelectedTags,
  sort,
  setSort,
  sortOptions,
}: ListControlsProps<S>) {
  return (
    <div className="list-controls">
      <TagFilter
        tags={tags}
        selectedTags={selectedTags}
        onChange={setSelectedTags}
      />
      <Dropdown label="Sort" value={sortOptions[sort].label} closeOnOptionClick>
        {(Object.keys(sortOptions) as S[]).map((value) => (
          <button
            className={sort === value ? 'selected' : ''}
            key={value}
            type="button"
            aria-pressed={sort === value}
            onClick={() => setSort(value)}
          >
            {sortOptions[value].label}
          </button>
        ))}
      </Dropdown>
    </div>
  );
}
