// app/routes/auth/github/callback.tsx
import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("github", request, {
    successRedirect: "/success",
    failureRedirect: "/failure",
  });
};