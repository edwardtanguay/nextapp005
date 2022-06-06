import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Info Site</title>
				<meta
					name="description"
					content="Edward's info site with code examples and howtos."
				/>
				<link rel="icon" href="/globe.ico" />
			</Head>
			<h1>Info Site</h1>
      <p>Welcome to this site.</p>
      <p className={styles.highlight}>More changes coming soon...</p>
		</>
	);
}
