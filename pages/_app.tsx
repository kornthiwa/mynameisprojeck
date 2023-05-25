import { Layout } from "@/layout/page/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);
  if (router.pathname == "/") {
    console.log("Login");
  } else if (router.pathname == "/home") {
    console.log("Home");
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
