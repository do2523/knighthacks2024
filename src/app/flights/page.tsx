import { api } from '~/trpc/server';

const FlightOriginsList = async () => {
  const flights: string[] = await api.flight.getFlights(); // Directly fetch the data
  console.log(flights);

  return (
    <div className='bg-black min-h-screen'>
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-100">Flight Origins</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flights?.map((flight, index) => (
          <div 
            key={index} 
            className="bg-blue-200 shadow-md rounded-lg p-10 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">Location: {flight}</h2>
          </div>
        ))}
      </div>
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
