'use client'
import { PizzaTypeSelection } from './PizzaTypeSelection'
import { ToppingsSelection } from './ToppingsSelection'
import { CustomerInfo } from './CustomerInfo'
import { TotalPrice } from './TotalPrice'

export default function PizzaForm() {
  return (
    <div className="space-y-6 max-w-2xl">
      <PizzaTypeSelection />
      <ToppingsSelection />
      <TotalPrice />
      <CustomerInfo />
      
      <button
        type="submit"
        className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors font-bold text-lg"
      >
        Place Order! 🍕
      </button>
    </div>
  )
} 