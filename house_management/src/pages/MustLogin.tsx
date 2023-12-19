import { Link } from "react-router-dom";

function MustLogin() {
  return (
    <>
      <Link
        className="flex justify-center items-center m-16 font-bold"
        to="/login"
      >
        YOU MUST LOG IN
      </Link>
    </>
  );
}

export default MustLogin;
