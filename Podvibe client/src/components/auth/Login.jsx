import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8081/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${url}/auth/signin`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Assuming the response contains the user data
        localStorage.setItem("auth", JSON.stringify(response.data.user));
        setToken(response.data.token); //stores Token
        navigate("/"); 
      }
    } catch (error) {
      console.error("Error Logging In:", error);
      setError("Invalid email or password."); // Display error message
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Log In to PodVibe</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Password"
            required
          />
        </div>

        {error && (
          <div
            className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {error}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            disabled={disabled}
            type="submit"
            className="disabled:opacity-50 disabled:cursor-not-allowed inline-block rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}
