import { Fragment } from "react";

export interface data {
  day: string,
  activities: {
    cost: string,
    description: string,
    name: string,
    time: string,
  }[]
}

export default function Table({ json }: { json: data[] }) {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-4 rounded-lg shadow-lg">
      {json.map((items) => (
        <Fragment key={items.day}>
          {/* Day Heading Section */}
          <div className="bg-blue-100 rounded-t-lg py-2 px-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-700">{items.day}</h2>
          </div>
          {/* Activities for the day */}
          <table className="w-full border-collapse">
            <tbody>
              {items.activities.map((item) => (
                <tr key={item.description} className="border-b border-gray-300">
                  <td className="p-4 text-left text-gray-600 min-w-[150px]">
                    {item.time}
                  </td>
                  <td className="p-4 text-left text-gray-800 font-semibold">
                    {item.name}
                  </td>
                  <td className="p-4 text-left text-gray-500 min-w-[100px]">
                    {item.cost === "Free" ? "Free" : `$${item.cost}`}
                  </td>
                  <td className="p-4 text-left text-gray-600">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add bottom margin between days */}
          <div className="mb-8"></div>
        </Fragment>
      ))}
    </div>
  );
}
