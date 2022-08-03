// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { GitHubStrategy } from "remix-auth-github";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator(sessionStorage);


let gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.CLIENT as string,
    clientSecret: process.env.SECRET as string,
    callbackURL: "http://localhost:3333/auth/github/callback",
  },
  async ({ accessToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value });
    return profile;
  }
);

authenticator.use(gitHubStrategy);