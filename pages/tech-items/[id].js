/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';
import { useRouter } from 'next/router';
import * as qstr from '../../qtools/qstr';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/techitems.json';

const TechItems = () => {
	const [techItem, setTechItem] = useState({});
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;
		const id = router.query['id'];
		console.log('333', id);
		(async () => {
			const _techItems = (await axios.get(url)).data;
			const _techItem = _techItems.find((m) => String(m.id) === id);
			console.log('111', _techItems);
			console.log('222', _techItem);
			if (_techItem) {
				_techItem.description = qstr.getQuickDefinitionFromExtras(
					_techItem.extras
				);
				setTechItem(_techItem);
			}
		})();
	}, [router.isReady]);

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
			<h3>
				{Object.entries(techItem).length > 0 && (
					<>
						{techItem.title} - {techItem.description}
					</>
				)}
			</h3>
		</>
	);
};

export default TechItems;
