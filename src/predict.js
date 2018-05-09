// import lib
import dt from './decision-tree'

// import csv
// csv => training set
import data from './data'

// config: categoryAttr: custom_ingredients
const config = {
  trainingSet: data,
  categoryAttr: 'custom_ingredients',
  ignoredAttributes: [
    'name',
    'age',
    'height_feet',
    'height_inch',
    'weight',
    'meals_per_day',
    'how_to_consume',
    'vegan_whey',
    'when_to_take',
    'flavor',
    'convert_height_to_inches',
    'bmi',
    'body_fat',
    'fat_weight',
    'lean_weight',
    'bmr',
    'calories_based_on_activity',
    'calories_based_on_goal',
    'protein_grams_per_day',
    'fat_grams_per_day',
    'carb_grams_per_day',
    'total_grams',
    'protein_calories_per_day',
    'fat_calories_per_day',
    'carb_calories_per_day',
    'total_calories',
    'protein_grams_per_serving',
    'fat_grams_per_serving',
    'carb_grams_per_serving',
    'total_grams_per_serving',
    'protein_daily_value',
    'fat_daily_value',
    'carb_daily_value',
    'protein_calories_per_serving',
    'fat_calories_per_serving',
    'carb_calories_per_serving',
    'total_calories_per_serving'
  ]
}

// fit model: building decision tree
const decisionTree = new dt.DecisionTree(config)

// building random forest
const numberOfTrees = 3
const randomForest = new dt.RandomForest(config, numberOfTrees)

export default (info) => {
  return {
    decisionTree: decisionTree.predict(info),
    randomForest: randomForest.predict(info)
  }
}
