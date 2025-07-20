import GoalItem from "./GoalItem";

export default function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <section className="space-y-6">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </section>
  );
}
