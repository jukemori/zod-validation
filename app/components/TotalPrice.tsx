import { useFormContext } from 'react-hook-form'
import { PIZZA_BASE_PRICES, TOPPING_PRICE } from '@/lib/constants'
import type { PizzaFormData } from '@/lib/schema'
import type { PizzaType } from '@/lib/types'

export function TotalPrice() {
  const { watch } = useFormContext<PizzaFormData>()

  const selectedPizzaType = watch('pizzaType') as PizzaType
  const selectedToppings = watch('toppings') as string[]

  const basePrice = PIZZA_BASE_PRICES[selectedPizzaType] || 0
  const toppingsPrice = selectedToppings.length * TOPPING_PRICE
  const totalPrice = basePrice + toppingsPrice

  if (!selectedPizzaType) return null

  return (
    <div className="text-xl font-bold border-t pt-4">
      Total Price: ${totalPrice.toFixed(2)}
    </div>
  )
}