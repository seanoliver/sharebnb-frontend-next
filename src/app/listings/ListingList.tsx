import ListingCard from './ListingCard';
import { ListingDetail } from '@/lib/types';
import { useEffect, useState } from 'react';

/**
 * Listings data type which will be returned from the server.
 * An array of listing objects.
 */

type Props = { listingsData: ListingDetail[] };

/**
 *  Renders the main list of listings on the homepage.
 */
export default function ListingList() {
	const [data, setData] = useState<ListingDetail[]>([]);
	const [isLoading, setLoading] = useState(false);

	// TODO: Switch to env variable
	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:3001/listings')
			.then((res) => res.json())
			.then((data) => {
				console.log('data: ', data);
				setData(data.listings);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	return (
		<div
			className={`
                ListingList
                flex flex-wrap flex-row
                justify-evenly
                gap-10
            `}>
			{data.map((l, i) => (
				<ListingCard
					listing={l}
					key={i}
				/>
			))}
		</div>
	);
}
