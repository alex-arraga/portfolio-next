import { z } from 'zod'

// Info Cars API
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


// Car Imagin API
const ImageApiParamsSchema = {
    customer: z.string(),
    make: z.string(),
    modelFamily: z.string(),
    zoomType: z.string(),
    modelYear: z.string(),
    angle: z.string().optional(),
    color: z.string().optional(),
};

export const CarImagesSchema = z.object(ImageApiParamsSchema)
export type CarsImagesResponse = z.infer<typeof CarImagesSchema>

