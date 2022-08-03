export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div>
        Hurray, you're back to the main page!
        <br />
        <a href="/login">Login</a>
        <br />
        <a href="/logout">Logout</a>
      </div>
    </div>
  );
}
