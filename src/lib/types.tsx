export type ListingDetail = {
	id: number;
	hostId: number;
	title: string;
	description: string;
	location: string;
	pricePerNight: number;
	maxGuests: number;
	imageUrl: string;
	createdAt: Date;
	updatedAt: Date;
};

export type UserBasic = {
    name: string;
    email: string;
    imageUrl: string;
}