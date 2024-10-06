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
      <div>
        <table className="w-full box-border border-collapse border border-black text-sm">
          <thead>
            <tr>
              <th className="text-left border p-2">Day</th>
              <th className="text-left border p-2 min-w-[150px]">Time</th>
              <th className="text-left border p-2">Name</th>
              <th className="text-left border p-2 min-w-[100px]">Cost</th>
              <th className="text-left border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {json.map((items) => (
              <Fragment key={items.day}>
                {items.activities.map((item, index) => (
                  <tr key={item.description}>
                    {/* Only display the day for the first activity of the day */}
                    {index === 0 ? (
                      <td rowSpan={items.activities.length} className="border p-2">
                        {items.day}
                      </td>
                    ) : null}
                    <td className="border p-2 text-left min-w-[150px]">{item.time}</td>
                    <td className="border p-2 text-left">{item.name}</td>
                    <td className="border p-2 text-left min-w-[100px]">{item.cost}</td>
                    <td className="border p-2 text-left">{item.description}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }