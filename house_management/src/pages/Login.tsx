import LoginForm from "../components/LoginForm";
import { useSignIn } from "react-auth-kit";
import { Api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const signIn = useSignIn();
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleLogin = (name: string, password: string) => {
    Api.postUser(name, password).then((data) => {
      console.log(data);
      if (data.access_token.length > 0) {
        signIn({
          token: data.access_token,
          expiresIn: data.expires_in,
          tokenType: "Bearer",
          authState: { role: data.user_role },
        });
        setLoggedIn(true)
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    });
  };

  return (
    <div className="flex flex-col h-screen items-center p-16">
      <h1 className="text-5xl font-bold">{loggedIn? "Login 🔓" : "Login 🔒"}</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
export default Login;
