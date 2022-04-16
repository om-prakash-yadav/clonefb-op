import Head from "next/head";
import Login from "./Login";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Feed from "../components/Feed";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Facebook clone by OP </title>
        <meta name="description" content="Created by OM PRAKASH YADAV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? (
        <>
          <Header />
          <main className="flex justify-items-center md:flex bg-gray-100">
            <Sidebar />

            <Feed />

            <Widgets />
          </main>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
