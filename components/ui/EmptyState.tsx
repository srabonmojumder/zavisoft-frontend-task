import { PackageOpen } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = 'No items found',
  description = 'Try adjusting your search or filters.',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3 bg-white rounded-2xl">
      <PackageOpen className="w-12 h-12 text-text-secondary" />
      <h3 className="text-lg font-semibold text-dark">{title}</h3>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
}
