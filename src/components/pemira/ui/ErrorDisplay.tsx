// components/ui/ErrorDisplay.tsx
type ErrorDisplayProps = {
  message: string;
};

export default function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {message}
      </div>
    </div>
  );
}
