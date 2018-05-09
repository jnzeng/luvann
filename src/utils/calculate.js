import {
  heightToInches,
  bmi,
  bodyFat,
  fatWeight,
  leanWeight,
  bmr,
  caloriesBasedOnActivity,
  caloriesBasedOnGoal,
  proteinGramsPerDay,
  fatGramsPerDay,
  proteinCaloriesPerDay,
  fatCaloriesPerDay,
  carbCaloriesPerDay,
  totalCaloriesPerDay,
  carbGramsPerDay,
  totalGramsPerDay,
  proteinGramsPerServing,
  fatGramsPerServing,
  carbGramsPerServing,
  totalGramsPerServing,
  proteinDailyValuePercentage,
  fatDailyValuePercentage,
  carbDailyValuePercentage,
  proteinCaloriesPerServing,
  fatCaloriesPerServing,
  carbCaloriesPerServing,
  totalCaloriesPerServing
} from './conversions'

import predict from '@/predict'

export default function (answers) {
  const data = answers

  data.height = heightToInches(data)
  data.convert_height_to_inches = heightToInches(data)
  data.bmi = bmi(data)
  data.body_fat = bodyFat(data)
  data.fat_weight = fatWeight(data)
  data.lean_weight = leanWeight(data)
  data.bmr = bmr(data)
  data.calories_based_on_activity = caloriesBasedOnActivity(data)
  data.calories_based_on_goal = caloriesBasedOnGoal(data)
  data.protein_grams_per_day = proteinGramsPerDay(data)
  data.fat_grams_per_day = fatGramsPerDay(data)
  data.protein_calories_per_day = proteinCaloriesPerDay(data)
  data.fat_calories_per_day = fatCaloriesPerDay(data)
  data.carb_calories_per_day = carbCaloriesPerDay(data)
  data.total_calories_per_day = totalCaloriesPerDay(data)
  data.carb_grams_per_day = carbGramsPerDay(data)
  data.total_grams_per_day = totalGramsPerDay(data)
  data.total_grams = totalGramsPerDay(data)
  data.protein_grams_per_serving = proteinGramsPerServing(data)
  data.fat_grams_per_serving = fatGramsPerServing(data)
  data.carb_grams_per_serving = carbGramsPerServing(data)
  data.total_grams_per_serving = totalGramsPerServing(data)
  data.protein_daily_value = proteinDailyValuePercentage(data)
  data.fat_daily_value = fatDailyValuePercentage(data)
  data.carb_daily_value = carbDailyValuePercentage(data)
  data.protein_calories_per_serving = proteinCaloriesPerServing(data)
  data.fat_calories_per_serving = fatCaloriesPerServing(data)
  data.carb_calories_per_serving = carbCaloriesPerServing(data)
  data.total_calories_per_serving = totalCaloriesPerServing(data)

  // prediction
  data.custom_ingredients = predict(data)

  return data
}
