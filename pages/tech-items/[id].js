import { useEffect, useState } from 'react';
import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import techItems from '../../data/techItems.json';
import { NavLink } from '../../components/NavLink';
import { useRouter } from 'next/router';

const TechItems = () => {
	const [techItem, setTechItem] = useState({});
	const router = useRouter();

	useEffect(() => {
		const { id } = router.query;
		const techItem = techItems.find((m) => m.id === id);
		console.log(techItem, 'here');
		alert('ok');
	}, []);
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
			{/* <h3>{techItem.title}</h3> */}
		</>
	);
};

export default TechItems;
