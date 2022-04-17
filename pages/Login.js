import { signIn } from "next-auth/react";

function Login() {
  return (
   <div className="p-20 h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
  <div className="content text-sm mb-6 md:text-3xl text-center md:text-left">
    <h1 className="text-4xl md:text-6xl text-blue-500 font-bold">Facebook</h1>
    <p>Connect with friends and the world around you on Facebook.</p>
  </div>
  <div className="container mx-auto flex flex-col items-center">
    <div className="drop-shadow-xl w-80 md:w-96 p-6 flex flex-col bg-white rounded-lg">
      <input type="text" placeholder="Email Address or Phone Number" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type="text" placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button onClick={signIn} className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
      <hr />
      <button  onClick={signIn} className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg ">Create New Account</button>
    </div>
    <p className="text-center text-sm my-4">
      <span className="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
    </p>
  </div>
</div>
  );
}

export default Login;
