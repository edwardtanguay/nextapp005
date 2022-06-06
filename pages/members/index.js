import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { DynamicHead } from '../../components/DynamicHead';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/employees.json';

export async function getServerSideProps() {
	const members = (await axios.get(url)).data;
	return {
		props: {
			members,
		},
	};
}

export default function Members({ members }) {
	return (
		<div className="page_members">
			<DynamicHead title="Members" icon="user.ico" />
			<SiteHeader />
			<Nav />
			<code>
				The data on this page is loaded via getServerSideProps() and so
				is{' '}
				<a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
					server-side rendering (SSR)
				</a>
				.
			</code>
			<p>There are {members.length} members.</p>
			<div className="members">this is red</div>
		</div>
	);
}
