import ListingCard from './ListingCard';
import { sampleListings } from '@/lib/sampleData';

export default function ListingList() {
	return (
		<div
			className={`
                ListingList
                flex flex-wrap flex-row
                justify-evenly
                gap-10
            `}>
			{sampleListings.map((l, i) => (
				<ListingCard
					listing={l}
					key={i}
				/>
			))}
		</div>
	);
}
