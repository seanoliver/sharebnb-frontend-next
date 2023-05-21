import React, { useState } from 'react';

type formData = {
	location: string;
	guests: string | number | null;
	checkIn: string;
	checkOut: string;
};

export default function SearchBar() {
	const [formData, setFormData] = useState<formData>({
		location: '',
		guests: null,
		checkIn: '',
		checkOut: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData(prev => ({
			...prev,
			[id]: value,
		}));
	};

	return (
		<div className='SearchBar my-3'>
			<form>
				<div className='SearchBar__container flex'>
					<div className='SearchBar__container__location'>
						<input
							type='text'
							id='location'
							placeholder='Where are you going?'
							onChange={handleChange}
							value={formData.location}
							className={`
                            p-2 pl-5 w-96
                            rounded-l-full
                            border-r-2 border-gray-200
                        `}
						/>
					</div>
					<div className='SearchBar__container__guests mr-2'>
						<input
							type='number'
							id='guests'
							placeholder='Guests'
							onChange={handleChange}
							value={formData.guests}
							className={`
                            p-2 w-24
                            rounded-r-full
                        `}
						/>
					</div>
					<div className='SearchBar__container__check-in flex items-center bg-white rounded-full mr-2'>
						<label
							htmlFor='checkIn'
							className={`
                        p-2 pl-5
                        `}>
							Check In
						</label>
						<input
							type='date'
							id='checkIn'
							onChange={handleChange}
							value={formData.checkIn}
							className={`
                        p-2
                        rounded-r-full
                        `}
						/>
					</div>
					<div className='SearchBar__container__check-out flex items-center bg-white rounded-full mr-2'>
						<label
							htmlFor='checkOut'
							className='p-2 pl-5'>
							Check Out
						</label>
						<input
							type='date'
							id='checkOut'
							value={formData.checkOut}
							onChange={handleChange}
							className='p-2 rounded-r-full'
						/>
					</div>
					<div className='SearchBar__container__submit flex items-center justify-end'>
						<button
							type='submit'
							className={`
								rounded-full
								bg-indigo-600
								px-3 py-2
								text-sm font-semibold
								text-white
								shadow-sm
								hover:bg-indigo-500
								focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
								`}>
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
