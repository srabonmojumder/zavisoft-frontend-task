export default function Loader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-border rounded-full" />
        <div className="absolute inset-0 border-4 border-blue border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
