'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import PizzaForm from './components/PizzaForm'
import { pizzaSchema, type PizzaFormData } from '@/lib/schema'

export default function Page() {
  const methods = useForm<PizzaFormData>({
    resolver: zodResolver(pizzaSchema),
    defaultValues: {
      toppings: [],
      pizzaType: '',
      name: '',
      email: '',
    },
  })

  const onSubmit = async (data: PizzaFormData): Promise<void> => {
    console.log('Form submitted:', data)
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Order Your Pizza</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <PizzaForm />
        </form>
      </FormProvider>
    </div>
  )
}
