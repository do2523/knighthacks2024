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

export default function Table(json: {json: data[]}) {
    console.log(json);
  return (
    <div>
      <table className="w-full box-border border-collapse border-black text-sm">
        <tbody className="box-border border-solid border-black">
            <tr>
            <td className="text-left border-solid p-[5px] box-border border-black">Day</td>
            <td className="text-left border-solid p-[5px] box-border border-black">Activities</td>
            </tr>
            
            {json.json.map((items) => {
                return(
                    <Fragment key={items.day}>
                    <tr className="border-solid p-[5px] box-border border-black">
                        <td className="text-left border-solid p-[5px] box-border border-black">{items.day}</td>
                    
                        {items.activities.map(item => {
                            return(
                                <tr key={item.name} className="border-solid p-[5px] box-border border-black">
                                <td className="border-solid p-[5px] box-border border-black">
                                    <table className="w-full box-border border-collapse border-black">
                                        <tbody>
                                            <tr className="border-solid p-[5px] box-border border-black min-w-[100px] full-w text-center">
                                                <th className="text-left border-solid p-[5px] box-border border-black w-[100px]">time</th>
                                                <th className="text-left border-solid p-[5px] box-border border-black w-[100px]">name</th>
                                                <th className="text-left border-solid p-[5px] box-border border-black w-[100px]">cost</th>
                                                <th className="text-left border-solid p-[5px] box-border border-black">description</th>
                                            </tr>
                                            <tr className="border-solid p-[5px] box-border border-black text-center">
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm w-[100px]">{item.time}</td>
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm w-[100px]">{item.name}</td>
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm w-[100px]">{item.cost}</td>
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm">{item.description}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                </tr>
                            )
                        })}
                    </tr>
                    </Fragment>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}
