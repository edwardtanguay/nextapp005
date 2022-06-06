/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';
import { useRouter } from 'next/router';
import * as qstr from '../../qtools/qstr';
import axios from 'axios';
import styles from '../../styles/TechItem.module.css';

const url = 'https://edwardtanguay.netlify.app/share/techitems.json';

const TechItems = () => {
	const [techItem, setTechItem] = useState({});
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;
		const id = router.query['id'];
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
			{Object.entries(techItem).length > 0 && (
				<>
				<h2>{techItem.title}</h2>
				<p className={styles.description}>{techItem.description}</p>
					<p><a target="_blank" href={`https://onespace.netlify.app/techItems?id=${techItem.id}`} rel="noreferrer">get more info</a></p>
				</>
			)}
		</>
	);
};

export default TechItems;
