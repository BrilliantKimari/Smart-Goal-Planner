import { useState } from "react";

export default function GoalItem({ goal, onUpdateGoal, onDeleteGoal }) {
  const [deposit, setDeposit] = useState("");
  const progress = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100);
  const now = new Date();
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
  const isOverdue = goal.savedAmount < goal.targetAmount && daysLeft < 0;
  const isWarning = !isOverdue && daysLeft <= 30;

  function handleDeposit() {
    const amount = Number(deposit);
    if (!amount || amount <= 0) return;
    onUpdateGoal(goal.id, { savedAmount: goal.savedAmount + amount });
    setDeposit("");
  }

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{goal.name}</h2>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount} | Saved: ${goal.savedAmount}</p>
      <div className="w-full bg-gray-200 rounded h-4 my-2">
        <div
          className={`h-full ${progress >= 100 ? "bg-green-600" : "bg-blue-500"}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={isOverdue ? "text-red-500" : isWarning ? "text-yellow-600" : "text-gray-700"}>
        {isOverdue ? "Overdue" : `Time Left: ${daysLeft} days`}
      </p>
      <div className="mt-2">
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="Deposit amount"
          className="border p-1 mr-2"
        />
        <button onClick={handleDeposit} className="bg-green-600 text-white px-3 py-1 rounded">
          Deposit
        </button>
        <button onClick={() => onDeleteGoal(goal.id)} className="ml-2 text-red-600 underline">
          Delete
        </button>
      </div>
    </div>
  );
}
