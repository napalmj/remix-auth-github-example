// // app/routes/auth/github.tsx
// import type { ActionFunction } from "@remix-run/node";
// import { authenticator } from "~/services/auth.server";

// export let action: ActionFunction = async ({ request }) => {
//   console.log(authenticator.logout)
//     await authenticator.logout(request, { redirectTo: "/" });
//   };

import { ActionFunction, redirect } from '@remix-run/node';
import { destroySession, getSession } from '~/services/session.server';

export let action: ActionFunction = async ({ request }) => {
  let session = await getSession(request.headers.get('Cookie'));
  throw redirect('/', {
    status: 205,
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};