import { useFormContext } from 'react-hook-form'
import { PIZZA_OPTIONS } from '@/lib/constants'
import type { PizzaFormData } from '@/lib/schema'

export function PizzaTypeSelection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PizzaFormData>()

  return (
    <div>
      <label className="block mb-3 text-lg font-bold">Pizza Type 🍕</label>
      <div className="space-y-2">
        {PIZZA_OPTIONS.map((option) => (
          <label key={option.value} className="flex items-center space-x-3">
            <input
              type="radio"
              value={option.value}
              {...register('pizzaType')}
              className="form-radio h-5 w-5 text-red-500"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors.pizzaType?.message && (
        <p className="text-red-500 text-sm mt-1">{errors.pizzaType.message}</p>
      )}
    </div>
  )
}