import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import techItems from '../../data/techItems.json';
import { NavLink } from '../../components/NavLink';

const TechItems = () => {
	return (
		<>
			<Head>
				<title>Edward&apos;s Tech Items</title>
				<meta
					name="description"
					content="Information on various technologies that are popular today."
				/>
				<link rel="icon" href="/code.ico" />
			</Head>
			<SiteHeader />
			<Nav />
			<p>Currently {techItems.length} tech items:</p>
			<ul>
				{techItems.map((techItem, index) => {
					return <li key={index}><NavLink href={`tech-items/${techItem.id}`}>{techItem.title}</NavLink></li>;
				})}
			</ul>
		</>
	);
};

export default TechItems;
