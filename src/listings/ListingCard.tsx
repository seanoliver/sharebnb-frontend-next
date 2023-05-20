import Image from 'next/image';

export default function ListingCard({ listing }) {
	return (
		<div
			className={`
				group relative
				bg-slate-200 dark:bg-slate-700
				rounded-md
				md:p-5 sm:p-1
				max-w-sm
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
					src={listing.imageUrl}
					alt={listing.title}
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
						<a href='#'>
							<span
								aria-hidden='true'
								className='absolute inset-0'
							/>
							{listing.title}
						</a>
					</h3>
					<p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
						{listing.location}
					</p>
				</div>
				<p className='text-sm font-medium text-slate-900 dark:text-slate-100'>
					${listing.pricePerNight}
				</p>
			</div>
		</div>
	);
}
