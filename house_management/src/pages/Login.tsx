import LoginForm from "../components/LoginForm";

function Login() {
  console.log("Component is rendering");

  const handleLogin = (name: String, password: String) => {
    console.log("LOGGED IN");
  };

  return (
    <div className="flex flex-col h-screen items-center p-16">
      <h1 className="text-5xl">Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
export default Login;
