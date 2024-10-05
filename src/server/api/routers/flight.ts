import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

interface typess {
    type: string,
    origin: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    price: { total: string },
    links: {
      flightDates: string,
      flightOffers: string,
    }
}




// Step 1: Get the Access Token function
async function getAccessToken(): Promise<string | null> {
  const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';

  // Replace with your actual client_id and client_secret
  const clientId = 'PPKaqbe4HDc0KuSRftO3gXvibjphpBGR';
  const clientSecret = 'm2k9aBBN5nNBXh0K';

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.access_token) {
      return data.access_token;
    } else {
      console.error('Failed to retrieve access token', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
}



// Step 2: Get Flight Destinations function
async function getFlightDestinations(accessToken: string) {
  const url = 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200';

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);
    const data: typess[] | null = await response.json();
    console.log(typeof data)

    if (data) {
      return data;
    } else {
      console.error('Failed to retrieve flight destinations', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching flight destinations:', error);
    return null;
  }
}

export const flightRouter = createTRPCRouter({
    // Procedure to get flight destinations
    getDestinations: publicProcedure
      .query(async ( ) => {
  
        // Example: if you want to query the database with Drizzle (optional)
        // const someData = await db.select().from(someTable).where(...);
  
        // Continue with the Amadeus API request logic
        const accessToken = await getAccessToken();
        if (!accessToken) {
          throw new Error('Failed to retrieve access token');
        }
  
        const destinations = await getFlightDestinations(accessToken);
        if (!destinations) {
          throw new Error('Failed to retrieve flight destinations');
        }
  
        return destinations;
      }),
  });