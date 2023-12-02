import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    ignoredRoutes: [],
    publicRoutes: [
        '/api',
        '/api/create_user',
        '/api/projects/calculator',
        '/api/projects/cars-store',
        '/api/projects/tasks'
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

// '/', '/api', '/api/projects/calculator', '/api/projects/cars-store', '/api/projects/tasks'