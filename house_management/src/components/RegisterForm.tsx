import { useState } from "react";
import { Link } from "react-router-dom";

interface FormProps {
  onSubmit: (name: string, email:string, password: string) => void;
}

function useError() {
  const [error, setError] = useState(new Map<string, string>());

  const updateError = (key: string, value: string) => {
    setError((prevError) => {
      const newError = new Map(prevError);
      newError.set(key, value);
      return newError;
    });
  };

  return { error, updateError };
}

function RegisterForm({ onSubmit }: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, updateError } = useError();

  const handleNameChange = (input: string) => {
    updateError("name", "");
    setName(input);
  };
  const handlePasswordChange = (input: string) => {
    updateError("password", "");
    setPassword(input);
  };
  const handleEmailChange = (input: string) => {
    updateError("email", "");
    setEmail(input);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    if (name.trim().length === 0 && password.trim().length === 0) {
      updateError("password", "Password cannot be empty");
      updateError("name", "Name cannot be empty");
      updateError("email", "Email cannot be empty");

      return;
    }
    if (name.trim().length === 0) {
      updateError("name", "Name cannot be empty");
      return;
    }
    if (email.trim().length === 0) {
        updateError("email", "Email cannot be empty");
        return;
      }
    if (password.trim().length === 0) {
      updateError("password", "Password cannot be empty");
      return;
    }
    onSubmit(name, email, password);
  };

  return (
    <div className="max-w-xl py-6 px-8  mt-8 bg-white rounded shadow-xl">
      <form onSubmit={(e) => handleSubmit(e, name, email, password)}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-800 font-bold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="username"
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
          {error.get("name") !== "" && (
            <p className="text-red-500 text-xs mt-2">{error.get("name")}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-800 font-bold">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            onChange={(e) => handleEmailChange(e.target.value)}
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
          {error.get("email") !== "" && (
            <p className="text-red-500 text-xs mt-2">{error.get("email")}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-800 font-bold">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => handlePasswordChange(e.target.value)}
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
          {error.get("password") !== "" && (
            <p className="text-red-500 text-xs mt-2">{error.get("password")}</p>
          )}
        </div>
        <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
          Register
        </button>
        <Link to="/login">
          <p className="cursor-pointer py-2 px-4 block mt-6  bg-indigo-500 text-white font-bold w-full text-center rounded">
            Login
          </p>
        </Link>
      </form>
    </div>
  );
}

export default RegisterForm;
