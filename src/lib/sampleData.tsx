import { ListingDetail, UserBasic } from './types';

export const sampleListings: ListingDetail[] = [
	{
		id: 1,
		hostId: 100,
		title: 'Serene Mountain Camping Spot',
		description:
			'Experience tranquility in this secluded camping spot nestled in the mountains. Perfect for stargazing and hiking.',
		location: 'Rocky Mountains, Colorado',
		pricePerNight: 80,
		maxGuests: 4,
		imageUrl: 'https://placehold.co/300x150/A5B4FC/4F46E5',
		createdAt: new Date('2023-01-20T14:28:23.382Z'),
		updatedAt: new Date('2023-01-20T14:28:23.382Z'),
	},
	{
		id: 2,
		hostId: 101,
		title: 'Peaceful Lakeside RV Park',
		description:
			'Park your RV by a beautiful lakeside. Enjoy fishing, boating, and a fantastic sunset view.',
		location: 'Lake Tahoe, California',
		pricePerNight: 100,
		maxGuests: 6,
		imageUrl: 'https://placehold.co/300x150/A5B4FC/4F46E5',
		createdAt: new Date('2023-02-14T09:20:16.125Z'),
		updatedAt: new Date('2023-02-14T09:20:16.125Z'),
	},
	{
		id: 3,
		hostId: 102,
		title: 'Cozy Forest Cabin Retreat',
		description:
			'Relax in a cozy cabin in the heart of the forest. Great for nature walks and bird watching.',
		location: 'Redwood National Park, California',
		pricePerNight: 120,
		maxGuests: 2,
		imageUrl: 'https://placehold.co/300x150/A5B4FC/4F46E5',
		createdAt: new Date('2023-03-05T16:45:02.611Z'),
		updatedAt: new Date('2023-03-05T16:45:02.611Z'),
	},
	{
		id: 4,
		hostId: 103,
		title: 'Breathtaking Desert Glamping',
		description:
			'Experience a luxury glamping experience in the desert. Enjoy the peace of the desert and clear night skies.',
		location: 'Mojave Desert, Nevada',
		pricePerNight: 150,
		maxGuests: 3,
		imageUrl: 'https://placehold.co/300x150/A5B4FC/4F46E5',
		createdAt: new Date('2023-04-08T12:10:45.318Z'),
		updatedAt: new Date('2023-04-08T12:10:45.318Z'),
	},
	{
		id: 5,
		hostId: 104,
		title: 'Ocean View Beach Camping',
		description:
			'Set up your tent on the sandy beaches with a gorgeous ocean view. Perfect for surfing and beach barbecues.',
		location: 'Big Sur, California',
		pricePerNight: 90,
		maxGuests: 5,
		imageUrl: 'https://placehold.co/300x150/A5B4FC/4F46E5',
		createdAt: new Date('2023-05-12T17:33:48.901Z'),
		updatedAt: new Date('2023-05-12T17:33:48.901Z'),
	},
];

export const user: UserBasic = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};