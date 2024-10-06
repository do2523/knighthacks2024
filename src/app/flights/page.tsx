import { api } from '~/trpc/server';

type FlightData = [string, string, string, string, { total: string }][];

const FlightOriginsList = async () => {
  const flights = await api.flight.getFlights() as FlightData;
  console.log(flights); // Check the actual structure in the console

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Flight Origins</h1>
        <ul className="space-y-4">
          {flights?.length > 0 ? (
            flights.map((flight, index) => {
              const [identifier, destination, startDate, endDate, details] = flight;

              return (
                <li key={index} className="mb-4 p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
                  <p className="text-lg text-gray-800"><strong>Identifier:</strong> {identifier}</p>
                  <p className="text-lg text-gray-800"><strong>Destination:</strong> {destination}</p>
                  <p className="text-lg text-gray-800"><strong>Start Date:</strong> {startDate}</p>
                  <p className="text-lg text-gray-800"><strong>End Date:</strong> {endDate}</p>
                  <p className="text-lg text-gray-800"><strong>Price:</strong> ${details.total}</p>
                </li>
              );
            })
          ) : (
            <li className="text-white text-center">No flights available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FlightOriginsList;



























// import { api } from '~/trpc/server';

// const FlightOriginsList = async () => {
//   const flights: string[] = await api.flight.getFlights(); // Directly fetch the data
//   console.log(flights)
//   // console.log(flights.length)
//   return (
//     <div>
//       <h1>Flight Origins</h1>
//       <ul>
//         {flights?.map((flight, index) => (
//           <li key={index}>{flight}</li> // Display each origin in a list item
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FlightOriginsList;
