import { useState } from "react";

export default function GoalForm({ onAddGoal }) {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      ...form,
      targetAmount: Number(form.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    onAddGoal(newGoal);
    setForm({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input name="name" placeholder="Goal Name" value={form.name} onChange={handleChange} className="border p-2 w-full" required />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={form.targetAmount} onChange={handleChange} className="border p-2 w-full" required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 w-full" required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange} className="border p-2 w-full" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Goal</button>
    </form>
  );
}
