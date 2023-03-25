import "../styles/globals.scss";
import Layout from "../hocs/Layout";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }) {
	if (Component.getLayout)
		return Component.getLayout(<Component {...pageProps} />);

	return (
		<>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}
