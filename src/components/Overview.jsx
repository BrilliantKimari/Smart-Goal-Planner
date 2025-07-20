export default function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-gray-100 p-4 rounded mb-6">
      <h2 className="text-2xl font-bold mb-2">Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  );
}
