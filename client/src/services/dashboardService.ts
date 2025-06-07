// This file mocks API calls for the Dashboard component of MacroMate.

import { Goal } from '@/types/Goal'; // Import the Goal type for type safety
// Fetch user goals for calories, water, and macro percentages
export const getGoals = async () => ({
  calorieGoal: 2200,        // Daily calorie goal in kcal
  waterGoal: 2500,          // Daily water goal in ml
  proteinPercent: 30,       // % of calories from protein
  carbsPercent: 40,         // % of calories from carbs
  fatsPercent: 30,          // % of calories from fats
});


export const saveGoals = async (goal: Goal) => {
  console.log('Saving goals:', goal); // Simulate API call
  return true;
};


//  Fetch the current day's meal summary (total nutrients consumed so far)
export const getMealSummary = async () => ({
  calories: 1400,   // Total calories consumed today
  protein: 110,     // Protein consumed in grams
  carbs: 150,       // Carbs consumed in grams
  fat: 60,          // Fat consumed in grams
});

//  Fetch the user's most recent weight entry
export const getCurrentWeight = async () => ({
  weight: 79, // Current weight in kilograms
});

//  Fetch total water consumed for a specific date
export const getWaterTotalForDate = async (_date: string) => {
  void _date; // Prevent unused parameter warning
  return {
    total: 1200, // Water consumed in ml on the specified date
  };
};

//  Log additional water intake for a given date
export const addWaterIntake = async (intake: { date: string; amount: number }) => {
  // Example: { date: '2025-06-05', amount: 300 }
  // In a real app, this would POST to the backend and update the database
  void intake; // Prevent unused parameter warning
  return true; // Returns true if the mock "save" was successful
};

//  Fetch which meals have been logged for the current day
export const getMealLog = async () => ({
  Breakfast: ["eggs"],     // If an array has items, meal is considered logged
  Lunch: [],               // Empty = not logged
  Dinner: ["chicken"],
  Snack: [],
});
