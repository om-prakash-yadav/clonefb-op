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
    <div className="drop-shadow-xl w-80 md:w-96 p-6 flex flex-col bg-white rounded-lg h-64 items-center justify-center">
      {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="md:p-3 p-2 flex items-center px-3 border-2 focus:ring-2 ring-blue-400 rounded-md text-md font-semibold"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                 <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="w-5 mr-4" alt="google logo"></img>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
    </div>
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
