'use client';

import Navigation from '@/components/nav';
import ListingList from '../components/listings/ListingList';
import SearchBar from '../components/searchBar';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Home() {
	return (
		<>
			<div className='Home min-h-full'>
				<Navigation />
				<header className='bg-slate-100 shadow'>
					<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						<SearchBar />
					</div>
				</header>
				<main>
					<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
						<ListingList />
					</div>
				</main>
			</div>
		</>
	);
}
