import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/login", { username, password });
      console.log(response.data);
      router.push("/logout");
    } catch (error: any) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
