type StatCardProps = {
  title: string;
  value: string | number;
  color: "blue" | "green" | "purple";
};

export default function StatCard({ title, value, color }: StatCardProps) {
  const colorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className={`mt-2 text-3xl font-bold ${colorClasses[color]}`}>
        {value}
      </p>
    </div>
  );
}
