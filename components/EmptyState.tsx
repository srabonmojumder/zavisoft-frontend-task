interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "No items found",
  description = "There's nothing to display right now.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
