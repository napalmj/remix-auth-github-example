import { Form } from "@remix-run/react";
// app/routes/login.tsx
export default function Login() {
    return (
      <Form action="/auth/github" method="post">
        <button>Login with GitHub</button>
      </Form>
    );
  }