export type ListingDetail = {
	listingid: number;
	name: string;
	description: string;
	price: number;
	street: string;
	city: string;
	state: string;
	zip: string;
	genre: string;
	ownerId: number;
	photourl: string;
};

export type UserBasic = {
    name: string;
    email: string;
    imageUrl: string;
}