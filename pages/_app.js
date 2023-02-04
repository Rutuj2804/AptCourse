import "../styles/globals.scss";
import Layout from "../hocs/Layout"
import Head from "next/head";

export default function App({ Component, pageProps }) {

	if(Component.getLayout) return Component.getLayout(<Component {...pageProps} />)

	return (
		<>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
      </Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
