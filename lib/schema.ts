import { z } from 'zod'

export const pizzaSchema = z.object({
  pizzaType: z.string().min(1, "Choose your favorite pizza! 🍕"),
  toppings: z.array(z.string())
    .min(1, "Please select at least one topping! 🧀")
    .max(2, "Maximum 2 toppings allowed! 🫣"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().min(1, "Email is required! 📧").email("Please enter a valid email address"),
})

export type PizzaFormData = z.infer<typeof pizzaSchema>
