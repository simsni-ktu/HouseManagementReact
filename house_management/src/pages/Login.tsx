import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="flex flex-col h-screen items-center p-16">
      <h1 className="text-5xl">Login</h1>
        <LoginForm 
        onSubmit= {handleLogin}
        setName = {setName}
        setPassword = {setPassword}
        />
    </div>
  );
}
export default Login;


