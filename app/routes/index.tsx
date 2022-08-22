import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div>
        Hurray, you're back to the main page!
        <Form action="/auth/github" method="post">
          <button>Login with GitHub</button>
        </Form>
        <Form action="/auth/github/logout" method="post" reloadDocument>
          <button>Logout with GitHub</button>
        </Form>
      </div>
    </div>
  );
}
