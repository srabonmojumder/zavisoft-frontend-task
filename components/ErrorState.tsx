interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 text-5xl">!</div>
      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Something went wrong
      </h2>
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
