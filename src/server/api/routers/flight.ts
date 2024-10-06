import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
console.log("!!!!!!!!!!!************8")
// import fetch from "node-fetch"; // or native fetch if in an environment supporting it
// First step: Get the Access Token
async function getAccessToken() {
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
    body: params
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.access_token) {
      return data.access_token;
    } else {
      throw new Error('Failed to retrieve access token');
    }
  } catch (error) {
    console.log('err?')
    throw new Error(`Error fetching access token:`);
  }
}

// Second step: Use the access token to get a list of flight destinations
async function getFlightDestinations(accessToken: string) {
  const url = 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200';

  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.data) {
      return data.data; // Return the flight destinations
    } else {
      throw new Error('Failed to retrieve flight destinations');
    }
  } catch (error) {
    throw new Error(`Error fetching flight destinations: `);
  }
}
// test
// Main function for fetching flight destinations
async function fetchFlightDestinations() {
  const accessToken = await getAccessToken();
  if (accessToken) {
    const flightDestinations = await getFlightDestinations(accessToken);
    const origins = flightDestinations.map((flight: any) => [flight.type, flight.origin, flight.departureDate, flight.returnDate, flight.price]);
    // console.log(origins)
    return origins;
  } else {
    throw new Error('Could not retrieve access token');
  }
}
fetchFlightDestinations();

// Create tRPC router
export const flightRouter = createTRPCRouter({
  getFlights: publicProcedure.query(async () => {
    // Fetch and return flight destinations
    try {
      const flightData = await fetchFlightDestinations();
      console.log('yay');
      return flightData;
    } catch (error) {
      throw new Error('LOL');
    }
  }),
});
