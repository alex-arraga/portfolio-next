import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    ignoredRoutes: [],
    publicRoutes: [
        '/api',
        '/api/create_user',
        '/api/projects/calculator',
        '/api/projects/calculator/calcs',
        '/api/projects/cars-store',
        '/api/payment/mercado_pago',
        '/api/projects/tasks',
        '/projects/calculator'
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

// '/', '/api', '/api/projects/calculator', '/api/projects/cars-store', '/api/projects/tasks'