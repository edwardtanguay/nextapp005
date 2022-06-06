import Head from 'next/head';
import { SiteHeader } from '../components/SiteHeader';
import { Nav } from '../components/Nav';
import techItems from '../data/techItems.json';

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
			<SiteHeader />
			<Nav />
			<p>These are the code examples.</p>
			<ul>
				{techItems.map((techItem, index) => {
					return (
						<li key={index}>{techItem.title}</li>
					)
				})}
			</ul>
		</>
	);
};

export default Code;
