import { useFormContext } from 'react-hook-form'
import { EXTRA_TOPPINGS } from '@/lib/constants'
import type { PizzaFormData } from '@/lib/schema'

export function ToppingsSelection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PizzaFormData>()

  return (
    <div>
      <label className="block mb-3 text-lg font-bold">Extra Toppings 🧀</label>
      <div className="grid grid-cols-2 gap-3">
        {EXTRA_TOPPINGS.map((topping) => (
          <label key={topping} className="flex items-center space-x-3">
            <input
              type="checkbox"
              value={topping}
              {...register('toppings')}
              className="form-checkbox h-5 w-5 text-red-500 rounded"
            />
            <span>{topping}</span>
          </label>
        ))}
      </div>
      {errors.toppings?.message && (
        <p className="text-red-500 text-sm mt-1">{errors.toppings.message}</p>
      )}
    </div>
  )
}