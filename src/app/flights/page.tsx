import { api } from '~/trpc/server';

const FlightOriginsList = async () => {
  const flights: string[] = await api.flight.getFlights(); // Directly fetch the data
  console.log(flights)
  // console.log(flights.length)
  return (
    <div>
      <h1>Flight Origins</h1>
      <ul>
        {flights?.map((flight, index) => (
          <li key={index}>{flight}</li> // Display each origin in a list item
        ))}
      </ul>
    </div>
  );
};

export default FlightOriginsList;
