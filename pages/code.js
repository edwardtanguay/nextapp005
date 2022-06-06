import Head from 'next/head';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';

const Code = () => {
	return (
		<>
			<Head>
				<title>Edward&apos;s Code Examples</title>
				<meta
					name="description"
					content="Lots of code examples to help you in your development."
				/>
				<link rel="icon" href="/code.ico" />
			</Head>
			<Header />
			<Nav />
			<h2>Code Page</h2>
			<p>These are the code examples.</p>
		</>
	);
};

export default Code;
