import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    <>
<div className="p-20 h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
  <div className="content text-sm mb-6 md:text-3xl text-center md:text-left">
    <h1 className="text-4xl md:text-6xl text-blue-500 font-bold">Facebook</h1>
    <p>Connect with friends and the world around you on Facebook.</p>
  </div>
  <div className="container mx-auto flex flex-col items-center">
    <form className="drop-shadow-xl w-80 md:w-96 p-6 flex flex-col bg-white rounded-lg h-64 items-center justify-center">
      {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="md:p-3 p-2 px-3 bg-blue-500 text-white rounded-md"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
    </form>
    <p className="text-center text-sm my-4">
      <span className="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
    </p>
  </div>
</div>
    </> 
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
