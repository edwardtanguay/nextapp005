import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import techItems from '../../data/techItems.json';
import { NavLink } from '../../components/NavLink';
import { useRouter } from 'next/router';
import * as qstr from '../../qtools/qstr';

const TechItems = () => {
	const router = useRouter();
	const { id } = router.query;
	// const techItem = techItems.find((m) => String(m.id) === id);
	// console.log(techItem);
	// const description = qstr.getQuickDefinitionFromExtras(techItem.extras);	
	const description = qstr.getQuickDefinitionFromExtras('nn');	

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
			{/* {techItem && <h3>{techItem.title} - {description}</h3>} */}
			{<h3>{description}</h3>}
		</>
	);
};

export default TechItems;
