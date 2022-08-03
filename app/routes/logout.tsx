import { Form } from "@remix-run/react";
// app/routes/login.tsx
export default function Login() {
    return (
      <Form action="/auth/end" method="post">
        <button>Logout with GitHub</button>
      </Form>
    );
  }