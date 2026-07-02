interface TagListProps {
  tags: string[];
  limit?: number;
  className?: string;
}

export default function TagList({ tags, limit, className = "" }: TagListProps) {
  const visibleTags = limit ? tags.slice(0, limit) : tags;

  return (
    <ul className={`tag-list ${className}`.trim()} aria-label="Technologies">
      {visibleTags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
