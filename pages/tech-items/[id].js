import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import techItems from '../../data/techItems.json';
import { NavLink } from '../../components/NavLink';
import { useRouter } from 'next/router';

const TechItems = () => {
	const router = useRouter();
	const { id } = router.query;
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
			<h3>techItem with id={id}</h3>
		</>
	);
};

export default TechItems;