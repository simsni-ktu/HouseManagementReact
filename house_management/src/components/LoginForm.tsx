
interface FormProps{
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    setName: (input: string) => void;
    setPassword: (input: string) => void;

}

function LoginForm({ onSubmit, setName, setPassword }: FormProps) {
  return (
    <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-800 font-bold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
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
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
        </div>
        <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
