/* eslint-disable camelcase */

function heightToInches ({height_feet, height_inch}) {
  return height_feet * 12 + height_inch
}

function bmi ({weight, convert_height_to_inches}) {
  return weight / (convert_height_to_inches * convert_height_to_inches) * 703
}

function bodyFat ({gender, bmi, age}) {
  const k = gender === 'f' ? 5.4 : 16.2
  return (1.2 * bmi + 0.23 * age - k) / 100
}

function fatWeight ({weight, body_fat}) {
  return weight * body_fat
}

function leanWeight ({weight, fat_weight}) {
  return weight - fat_weight
}

function bmr ({gender, weight, convert_height_to_inches, age}) {
  if (gender === 'f') {
    return 655 + (4.35 * weight) + (4.7 * convert_height_to_inches) - (4.7 * age)
  } else {
    return 66 + (6.23 * weight) + (12.7 * convert_height_to_inches) - (6.8 * age)
  }
}

function caloriesBasedOnActivity ({activity, bmr}) {
  const k = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725
  }[activity]

  return k * bmr
}

function caloriesBasedOnGoal ({goal, bmr}) {
  const c = bmr * 1.2
  const k = {
    maintenance: 0,
    accelerated_weight_loss: 500,
    normal_weight_loss: 250,
    gain_muscle: -250
  }[goal]
  return c - k
}

function proteinGramsPerDay ({goal, lean_weight}) {
  const k = {
    maintenance: 1.0,
    accelerated_weight_loss: 1.0,
    normal_weight_loss: 1.0,
    gain_muscle: 1.5
  }[goal]
  return k * lean_weight
}

function fatGramsPerDay ({goal, lean_weight}) {
  const k = {
    maintenance: 0.35,
    accelerated_weight_loss: 0.35,
    normal_weight_loss: 0.35,
    gain_muscle: 0.5
  }[goal]
  return k * lean_weight
}

function proteinCaloriesPerDay ({protein_grams_per_day}) {
  return protein_grams_per_day * 4
}

function fatCaloriesPerDay ({fat_grams_per_day}) {
  return fat_grams_per_day * 9
}

function carbCaloriesPerDay ({calories_based_on_goal, protein_calories_per_day, fat_calories_per_day}) {
  return calories_based_on_goal - protein_calories_per_day - fat_calories_per_day
}

function totalCaloriesPerDay ({protein_calories_per_day, fat_calories_per_day, carb_calories_per_day}) {
  return protein_calories_per_day + fat_calories_per_day + carb_calories_per_day
}

function carbGramsPerDay ({carb_calories_per_day}) {
  return carb_calories_per_day / 4
}

function totalGramsPerDay ({protein_grams_per_day, carb_grams_per_day, fat_grams_per_day}) {
  return protein_grams_per_day + carb_grams_per_day + fat_grams_per_day
}

function proteinGramsPerServing ({protein_grams_per_day, meal_or_snack, meal_per_day}) {
  if (meal_or_snack === 'mealReplacement') {
    return protein_grams_per_day / meal_per_day
  } else {
    return protein_grams_per_day * 0.1
  }
}

function fatGramsPerServing ({fat_grams_per_day, meal_or_snack, meal_per_day}) {
  if (meal_or_snack === 'mealReplacement') {
    return fat_grams_per_day / meal_per_day
  } else {
    return fat_grams_per_day * 0.1
  }
}

function carbGramsPerServing ({carb_grams_per_day, meal_or_snack, meal_per_day}) {
  if (meal_or_snack === 'mealReplacement') {
    return carb_grams_per_day / meal_per_day
  } else {
    return carb_grams_per_day * 0.1
  }
}

function totalGramsPerServing ({protein_grams_per_serving, carb_grams_per_serving, fat_grams_per_serving}) {
  return protein_grams_per_serving + carb_grams_per_serving + fat_grams_per_serving
}

function proteinDailyValuePercentage ({protein_grams_per_day}) {
  return protein_grams_per_day / 50
}

function fatDailyValuePercentage ({fat_grams_per_day}) {
  return fat_grams_per_day / 65
}

function carbDailyValuePercentage ({carb_grams_per_day}) {
  return carb_grams_per_day / 300
}

function proteinCaloriesPerServing ({protein_grams_per_serving}) {
  return protein_grams_per_serving * 4
}

function fatCaloriesPerServing ({fat_grams_per_serving}) {
  return fat_grams_per_serving * 9
}

function carbCaloriesPerServing ({carb_grams_per_serving}) {
  return carb_grams_per_serving * 4
}

function totalCaloriesPerServing ({protein_calories_per_serving, carb_calories_per_serving, fat_calories_per_serving}) {
  return protein_calories_per_serving + carb_calories_per_serving + fat_calories_per_serving
}

module.exports = {
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
}
