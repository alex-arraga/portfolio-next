import { z } from "zod"

const Car = z.object({
    city_mpg: z.number(),
    class: z.string(),
    combination_mpg: z.number(),
    cylinders: z.number(),
    displacement: z.number(),
    drive: z.string(),
    fuel_type: z.string(),
    highway_mpg: z.number(),
    make: z.string(),
    model: z.string(),
    transmission: z.string(),
    year: z.number()
})

export const CarsResponseSchema = z.array(Car)

export type CarsResponse = z.infer<typeof CarsResponseSchema>;