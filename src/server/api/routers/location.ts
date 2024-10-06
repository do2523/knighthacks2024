import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// First step: Get the Access Token
async function getAccessToken() {
  const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';

  const clientId = 'PPKaqbe4HDc0KuSRftO3gXvibjphpBGR';  // Replace with your actual client ID
  const clientSecret = 'm2k9aBBN5nNBXh0K';               // Replace with your actual client secret

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params
  };

  try {
    console.log('Fetching access token...');
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.access_token) {
      console.log('Access token received:', data.access_token);
      return data.access_token;
    } else {
      console.error('Failed to retrieve access token:', data);
      throw new Error('Failed to retrieve access token');
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error(`Error fetching access token: ${error}`);
  }
}

// Second step: Use the access token to get a list of hotel offers
async function getHotelOffers(accessToken: string) {
  const url = 'https://test.api.amadeus.com/v2/shopping/hotel-offers';

  // Define the parameters for the API request
  const params = new URLSearchParams();
  params.append('cityCode', 'PAR');               // City IATA code (e.g., PAR for Paris)
  params.append('checkInDate', '2024-12-01');     // Example check-in date
  params.append('checkOutDate', '2024-12-05');    // Example check-out date
  params.append('roomQuantity', '1');
  params.append('adults', '2');
  params.append('currency', 'USD');

  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  };

  try {
    console.log(`Fetching hotel offers with params: ${params.toString()}`);
    const response = await fetch(`${url}?${params.toString()}`, options);
    const data = await response.json();
    console.log('Raw response from Amadeus API:', data);  // Log the raw API response
    if (data.data) {
      console.log('Hotel offers received:', data.data);
      return data.data; // Return the hotel offers
    } else {
      console.error('Failed to retrieve hotel offers:', data);
      throw new Error('Failed to retrieve hotel offers');
    }
  } catch (error) {
    console.error('Error fetching hotel offers:', error);
    throw new Error(`Error fetching hotel offers: ${error}`);
  }
}

// Main function for fetching hotel offers
async function fetchHotelOffers() {
  try {
    console.log('Starting hotel offer fetch process...');
    const accessToken = await getAccessToken();
    if (accessToken) {
      const hotelOffers = await getHotelOffers(accessToken);
      const offers = hotelOffers.map((offer: any) => ({
        hotelName: offer.hotel?.name,
        address: offer.hotel?.address?.lines?.join(", "),
        city: offer.hotel?.address?.cityName,
        checkInDate: offer.available[0]?.offers[0]?.checkInDate,
        checkOutDate: offer.available[0]?.offers[0]?.checkOutDate,
        price: offer.available[0]?.offers[0]?.price?.total,
        currency: offer.available[0]?.offers[0]?.price?.currency,
      }));
      console.log('Formatted hotel offers:', offers);
      return offers;
    } else {
      console.error('Access token was not retrieved');
      throw new Error('Could not retrieve access token');
    }
  } catch (error) {
    console.error('Error in fetchHotelOffers:', error);
    throw new Error('Error during hotel offer fetch process');
  }
}

// Create tRPC router
export const hotelRouter = createTRPCRouter({
  getHotels: publicProcedure.query(async () => {
    try {
      console.log('Starting tRPC hotel query...');
      const hotelData = await fetchHotelOffers();
      console.log('Hotel data fetched successfully');
      return hotelData;
    } catch (error) {
      console.error('Failed to fetch hotel offers in tRPC:', error);
      throw new Error('Failed to fetch hotel offers');
    }
  }),
});
