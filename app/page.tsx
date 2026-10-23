"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailIsValid = email.trim() !== "" && email.endsWith("@gmail.com");
    const passwordIsValid = password.trim().length > 8;

    if (!emailIsValid || !passwordIsValid) {
      setError(
        "Please enter a valid Gmail address and a password longer than 8 characters."
      );
      return;
    }

    setError("");
    router.push("/notes");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in</h1>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="name@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button type="submit" className="login-button">
            Login
          </button>

          {error ? <p className="form-error">{error}</p> : null}
        </form>
      </section>
    </main>
  );
}
