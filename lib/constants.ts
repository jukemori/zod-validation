export const PIZZA_OPTIONS = [
  { value: 'margherita', label: 'Margherita' },
  { value: 'pepperoni', label: 'Pepperoni' },
  { value: 'hawaiian', label: 'Hawaiian' },
] as const

export const PIZZA_BASE_PRICES = {
  margherita: 10,
  pepperoni: 12,
  vegetarian: 11,
  hawaiian: 13,
}

export const EXTRA_TOPPINGS = [
  'Extra Cheese 🧀',
  'Mushrooms 🍄',
  'Bell Peppers 🫑',
  'Olives 🫒',
  'Bacon 🥓',
  'Jalapeños 🌶️',
] as const

export const TOPPING_PRICE = 1.5 