// Dashboard component 

"use client";

import { useEffect, useState } from 'react';


import {
  getGoals,
  getMealSummary,
  getCurrentWeight,
  getWaterTotalForDate,
  getMealLog
} from '@/services/dashboardService';
import dayjs from 'dayjs';

export default function Dashboard() {
  const today = dayjs().format('YYYY-MM-DD');

  const [calorieGoal, setCalorieGoal] = useState(0);
  const [waterGoal, setWaterGoal] = useState(0);
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [weight, setWeight] = useState(0);
  const [water, setWater] = useState(0);
  const [mealStatus, setMealStatus] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Snack: false,
  });

  useEffect(() => {
    async function loadData() {
      const goals = await getGoals();
      setCalorieGoal(goals.calorieGoal);
      setWaterGoal(goals.waterGoal);

      const summary = await getMealSummary();
      setCalories(summary.calories);
      setProtein(summary.protein);
      setCarbs(summary.carbs);
      setFat(summary.fat);

      const weightRes = await getCurrentWeight();
      setWeight(weightRes.weight);

      const waterRes = await getWaterTotalForDate(today);
      setWater(waterRes.total);

      const log = await getMealLog();
      setMealStatus({
        Breakfast: log.Breakfast.length > 0,
        Lunch: log.Lunch.length > 0,
        Dinner: log.Dinner.length > 0,
        Snack: log.Snack.length > 0,
      });
    }

    loadData();
  }, [today]);

  return (
    <section className="space-y-6">
      <div className="text-gray-700">
        <p>Calories: {calories} / {calorieGoal}</p>
        <p>Water: {water} ml / {waterGoal} ml</p>
        <p>Protein: {protein}g, Carbs: {carbs}g, Fat: {fat}g</p>
        <p>Current Weight: {weight} kg</p>
        <p>Meals Logged:</p>
        <ul>
          {Object.entries(mealStatus).map(([meal, logged]) => (
            <li key={meal}>
              {meal}: {logged ? "✅" : "—"}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
