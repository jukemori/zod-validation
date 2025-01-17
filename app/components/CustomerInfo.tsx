import { useFormContext } from 'react-hook-form'
import type { PizzaFormData } from '@/lib/schema'

export function CustomerInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PizzaFormData>()

  return (
    <>
      <div>
        <label className="block mb-3 text-lg font-bold">Your Name 👤</label>
        <input
          type="text"
          {...register('name')}
          className="w-full p-3 border rounded-lg"
          placeholder="Enter your name"
        />
        {errors.name?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg font-bold">Email Address 📧</label>
        <input
          type="email"
          {...register('email')}
          className="w-full p-3 border rounded-lg"
          placeholder="Enter your email"
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
    </>
  )
}