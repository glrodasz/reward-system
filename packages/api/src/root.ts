import { authRouter } from './router/auth';
import { botRouter } from './router/bot';
import { itemRouter } from './router/item';
import { storeRouter } from './router/store';
import { userRouter } from './router/user';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  bot: botRouter,
  user: userRouter,
  store: storeRouter,
  item: itemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
