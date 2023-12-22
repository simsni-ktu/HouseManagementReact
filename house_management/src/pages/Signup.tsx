import LoginForm from "../components/LoginForm";
import { useSignIn } from "react-auth-kit";
import { Api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

function Signup() {
  const signIn = useSignIn();
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleLogin = (name: string, email:string, password: string) => {

    console.log("asdas")
    Api.registerUser(name, email, password).then((data) => {
      console.log(data);
      if(data.name.length > 0){
        alert("Success")
        navigate("/login")
      }
    }).catch(() =>{
        alert("Failed")
    });

  };

  return (
    <div className="flex flex-col h-screen items-center p-16">
      <h1 className="text-5xl font-bold">Register</h1>
      <RegisterForm onSubmit={handleLogin} />
    </div>
  );
}
export default Signup;
