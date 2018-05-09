/* eslint-env jest */

const {
  heightToInches,
  bmi,
  bfp,
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
  carbGramsPerDay
} = require('../../src/utils/conversions')

test('heightToInches', () => {
  expect(heightToInches(5, 9)).toEqual(69)
})

test('bmi', () => {
  const height = 66
  const weight = 101
  expect(bmi(weight, height)).toBeCloseTo(16.3)
})

test('bfp (female)', () => {
  const age = 24
  const gender = 'f'
  const bmi = 16.3

  expect(bfp(gender, bmi, age)).toBeCloseTo(0.2)
})

test('bfp (male)', () => {
  const gender = 'm'
  const age = 52
  const bmi = 28.58

  expect(bfp(gender, bmi, age)).toBeCloseTo(0.3)
})

test('fatWeight', () => {
  const weight = 101
  const bfp = 0.2

  expect(fatWeight(weight, bfp)).toBeCloseTo(20.2)
})

test('leanWeight', () => {
  const weight = 101
  const fatWeight = 20

  expect(leanWeight(weight, fatWeight)).toBeCloseTo(81)
})

test('bmr (female)', () => {
  const gender = 'f'
  const weight = 101
  const height = 66
  const age = 24

  expect(bmr(gender, weight, height, age)).toBeCloseTo(1291.75)
})

test('bmr (male)', () => {
  const gender = 'm'
  const weight = 188
  const height = 68
  const age = 52

  expect(bmr(gender, weight, height, age)).toBeCloseTo(1747.24)
})

test('caloriesBasedOnActivity (sedentary)', () => {
  expect(caloriesBasedOnActivity('sedentary', 1291.75)).toBeCloseTo(1550.1)
})

test('caloriesBasedOnActivity (lightly_active)', () => {
  expect(caloriesBasedOnActivity('lightly_active', 1278.5)).toBeCloseTo(1757.94)
})

test('caloriesBasedOnActivity (moderately_active)', () => {
  expect(caloriesBasedOnActivity('moderately_active', 1296.6)).toBeCloseTo(2009.73)
})

test('caloriesBasedOnActivity (very_active)', () => {
  expect(caloriesBasedOnActivity('very_active', 1292.75)).toBeCloseTo(2229.99)
})

test('caloriesBasedOnGoal (maintain)', () => {
  expect(caloriesBasedOnGoal('maintain', 1291.75)).toBeCloseTo(1550.1)
})

test('caloriesBasedOnGoal (accelerated_weight_loss)', () => {
  expect(caloriesBasedOnGoal('accelerated_weight_loss', 1290.5)).toBeCloseTo(1048.6)
})

test('caloriesBasedOnGoal (normal_weight_loss)', () => {
  expect(caloriesBasedOnGoal('normal_weight_loss', 1311.4)).toBeCloseTo(1323.68)
})

test('caloriesBasedOnGoal (gain_muscle)', () => {
  expect(caloriesBasedOnGoal('gain_muscle', 1300.6)).toBeCloseTo(1810.72)
})

test('proteinGramsPerDay', () => {
  const leanWeight = 81.123
  expect(proteinGramsPerDay('maintain', leanWeight)).toBeCloseTo(81.123)
  expect(proteinGramsPerDay('accelerated_weight_loss', leanWeight)).toBeCloseTo(81.123)
  expect(proteinGramsPerDay('normal_weight_loss', leanWeight)).toBeCloseTo(81.123)
})

test('proteinGramsPerDay (gain_muscle)', () => {
  const goal = 'gain_muscle'
  const leanWeight = 86.599
  expect(proteinGramsPerDay(goal, leanWeight)).toBeCloseTo(129.9)
})

test('fatGramsPerDay', () => {
  const leanWeight = 81.123
  expect(fatGramsPerDay('maintain', leanWeight)).toBeCloseTo(28.393)
  expect(fatGramsPerDay('accelerated_weight_loss', leanWeight)).toBeCloseTo(28.393)
  expect(fatGramsPerDay('normal_weight_loss', leanWeight)).toBeCloseTo(28.393)
})

test('fatGramsPerDay (gain_muscle)', () => {
  const goal = 'gain_muscle'
  const leanWeight = 86.599
  expect(fatGramsPerDay(goal, leanWeight)).toBeCloseTo(43.3)
})

test('proteinCaloriesPerDay', () => {
  expect(proteinCaloriesPerDay(81.123)).toBeCloseTo(324.492)
})

test('fatCaloriesPerDay', () => {
  expect(fatCaloriesPerDay(28.422)).toBeCloseTo(255.8)
})

test('carbCaloriesPerDay', () => {
  expect(carbCaloriesPerDay(1550.88, 324.49, 255.8)).toBeCloseTo(970.59)
})

test('totalCaloriesPerDay', () => {
  expect(totalCaloriesPerDay(324.49, 255.8, 970.59)).toBeCloseTo(1550.88)
})

test('carbGramsPerDay', () => {
  expect(carbGramsPerDay(970.59)).toBeCloseTo(242.65)
})
