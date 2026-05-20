import { signInWithGoogle } from "../lib/supabase";

export default function Login() {
  return (
    <div className="page">
      <h2>Login System</h2>

      <button onClick={signInWithGoogle}>
        Continue With Google
      </button>

      <div className="card">
        <h3>Email Login</h3>

        <input placeholder="Email" />
        <input placeholder="Password" type="password" />

        <button>Login</button>
      </div>
    </div>
  );
}
