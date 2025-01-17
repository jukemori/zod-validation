export type PizzaType = 'margherita' | 'pepperoni' | 'vegetarian' | 'hawaiian'

export type PizzaOption = {
  value: PizzaType
  label: string
}

export type PizzaPrices = Record<PizzaType, number>
