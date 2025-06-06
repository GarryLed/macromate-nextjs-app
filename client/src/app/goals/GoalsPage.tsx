'use client';

import { useEffect, useState } from 'react';
import { Goal } from '@/types/goal'; 
import {
  getGoals,
  saveGoals, 
} from '@/services/dashboardService'; 

export default function Goals() {
  const [goal, setGoal] = useState<Goal>({
    calorieGoal: 0,
    proteinPercent: 0,
    carbsPercent: 0,
    fatsPercent: 0,
    waterGoal: 0,
  });

  const [nutritionSaved, setNutritionSaved] = useState(false);

  // Fetch goals from backend when component mounts
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await getGoals();
        setGoal({
          calorieGoal: data.calorieGoal ?? 0,
          proteinPercent: data.proteinPercent ?? 0,
          carbsPercent: data.carbsPercent ?? 0,
          fatsPercent: data.fatsPercent ?? 0,
          waterGoal: data.waterGoal ?? 0,
        });
      } catch (err) {
        console.error('Failed to fetch goals:', err);
      }
    };

    fetchGoals();
  }, []);

  // Save goals to backend
  const handleSaveGoals = async () => {
    try {
      await saveGoals(goal);
      setNutritionSaved(true);
      setTimeout(() => setNutritionSaved(false), 3000);
    } catch (err) {
      console.error('Failed to save nutrition goals:', err);
    }
  };

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGoal((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6 bg-white rounded shadow-bg">
      <h2 className="text-2xl font-bold mb-4">Nutrition Goals</h2>

      <div className="space-y-4">
        <label className="block">
          Calorie Goal
          <input
            type="number"
            name="calorieGoal"
            value={goal.calorieGoal}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </label>

        <label className="block">
          Protein %
          <input
            type="number"
            name="proteinPercent"
            value={goal.proteinPercent}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </label>

        <label className="block">
          Carbs %
          <input
            type="number"
            name="carbsPercent"
            value={goal.carbsPercent}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </label>

        <label className="block">
          Fats %
          <input
            type="number"
            name="fatsPercent"
            value={goal.fatsPercent}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </label>

        <label className="block">
          Water Goal (ml)
          <input
            type="number"
            name="waterGoal"
            value={goal.waterGoal}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-1"
          />
        </label>

        <button
          onClick={handleSaveGoals}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Save Goals
        </button>

        {nutritionSaved && (
          <p className="text-green-600 mt-2">Goals saved successfully!</p>
        )}
      </div>
    </div>
  );
}
