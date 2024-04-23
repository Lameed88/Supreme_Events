import "@/styles/globals.css";
import "@/styles/Home.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <title>SuPREme</title>
            </Head>
            <Component {...pageProps} />
            <ToastContainer theme="dark" />
        </>
    );
}
