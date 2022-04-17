import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 bg-gray-100">
      <img className="w-80" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <h1 className="text-md  md:text-3xl">Facebook helps you connect and share with the people in your life.</h1>

        <div className="mt-8 ">
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

              <div className="absolute h-6 bottom-4 flex justify-items-center items-center ">
                <p className="text-xs   ">Created with ❤ By -</p>
                <p className="text-xs font-bold ml-1">OM PRAKASH</p>
              </div>
            </div>
          ))}
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
