import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message = 'Something went wrong', onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <AlertCircle className="w-12 h-12 text-red-500" />
      <p className="text-text-secondary text-lg">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue text-white rounded-lg font-medium hover:bg-blue-dark transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
