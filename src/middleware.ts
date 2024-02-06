import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    ignoredRoutes: [],
    publicRoutes: [
        // Client UI
        '/',
        '/projects',
        '/diplomas',
        '/diplomas/show',

        // API
        '/api/cron',
        '/api/create_user',
        '/api/projects/calculator',
        '/api/projects/calculator/calcs',
        '/api/projects/cars-store',
        '/api/payment/mercado_pago',
        '/api/payment/mercado_pago/notify',
        '/api/payment/stripe',
        '/api/payment/stripe/notify',
        '/api/projects/tasks',
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};