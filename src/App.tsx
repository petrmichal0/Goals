import { useState } from "react";

import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CoarseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CoarseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CoarseGoal = {
      title: goal,
      description: summary,
      id: Math.random(),
    };
    setGoals((goals) => [...goals, newGoal]);
  }

  function handleDelete(id: number) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDelete} />
    </main>
  );
}
