import Image from 'next/image';
import { ListingDetail } from '@/lib/types';

export default function ListingCard({ listing }: { listing: ListingDetail }) {
	const listingUrl =
		process.env.NEXT_PUBLIC_S3_PROTOCOL +
		'://' +
		process.env.NEXT_PUBLIC_S3_HOSTNAME +
		'/' +
		process.env.NEXT_PUBLIC_S3_BUCKET +
		'/' +
		listing.photourl;
	console.log('listingId: ', listing.listingid);
	return (
		<div
			className={`
				group relative
				bg-slate-200 dark:bg-slate-700
				rounded-md
				md:p-5 sm:p-1
				max-w-xs
				shadow-md
				hover:shadow-xl
			`}>
			<div
				className={`
					min-h-80
					aspect-h-1 aspect-w-1 lg:aspect-none
					w-full overflow-hidden
					rounded-t-md
					bg-slate-200
					group-hover:opacity-75
					lg:h-80
				`}>
				<Image
					src={listingUrl}
					alt={listing.name}
					className={`
						h-full w-full
						object-cover object-center
						lg:h-full lg:w-full
					`}
					width={300}
					height={150}
				/>
			</div>
			<div className='mt-4 flex justify-between'>
				<div>
					<h3 className='text-sm text-slate-700 dark:text-slate-200'>
						<a href={`/listing/${listing.listingid}`}>
							<span
								aria-hidden='true'
								className='absolute inset-0'
							/>
							{listing.name}
						</a>
					</h3>
					<p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
						{listing.city}, {listing.state}
					</p>
				</div>
				<p className='text-sm font-medium text-slate-900 dark:text-slate-100'>
					${listing.price}
				</p>
			</div>
		</div>
	);
}
