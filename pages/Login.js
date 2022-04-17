import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center bg-gray-100">
      <img
        className="w-80"
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="facebook"
      />
      <h1 className="text-md  md:text-3xl">
        Facebook helps you connect and share with the people in your life.
      </h1>

      <div className="mt-8 ">
        <button
          onClick={signIn}
          className="md:p-3 p-2 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Get Started
        </button>
      </div>
      <div className="absolute bottom-4 flex justify-items-center items-center h-6 ">
        <p className="text-xs   ">Created with ❤ By -</p>
        <p className="text-xs font-bold ml-1">OM PRAKASH</p>
      </div>
    </div>
  );
}

export default Login;
