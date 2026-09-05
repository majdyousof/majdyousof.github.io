import React from 'react';
import Dropdown from './Dropdown';

type TagFilterProps = {
  tags: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
};

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onChange,
}) => {
  const toggleTag = (tag: string) => {
    onChange(
      selectedTags.includes(tag)
        ? selectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...selectedTags, tag]
    );
  };

  const selectionLabel = selectedTags.length
    ? `${selectedTags.length} tag${selectedTags.length === 1 ? '' : 's'}`
    : 'All tags';

  return (
    <Dropdown
      label="Filter"
      value={selectionLabel}
      footer={
        <button
          type="button"
          disabled={selectedTags.length === 0}
          onClick={() => onChange([])}
        >
          Clear filters
        </button>
      }
    >
      {tags.map((tag) => (
        <label key={tag}>
          <input
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => toggleTag(tag)}
          />
          {tag}
        </label>
      ))}
    </Dropdown>
  );
};

export default TagFilter;
