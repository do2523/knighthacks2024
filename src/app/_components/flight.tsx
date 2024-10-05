import { api } from "~/trpc/server";

const FlightDestinationsPage = async() => {
  const test = await api.flight.getDestinations();


  return (
    <div>
      <h1>Flight Destinations</h1>
      <ul>
        {/* {test?.map((destination, index) => (
          <li key={index}>{destination.destination}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default FlightDestinationsPage;
