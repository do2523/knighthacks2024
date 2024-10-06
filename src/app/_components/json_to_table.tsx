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
                                <div key={item.name}>
                                <tr className="border-solid p-[5px] box-border border-black">
                                <td className="border-solid p-[5px] box-border border-black">
                                    <table className="w-full box-border border-collapse border-black">
                                        <tbody>
                                            <tr className="border-solid p-[5px] box-border border-black min-w-[100px] full-w text-center">
                                                <th className="text-left border-solid p-[5px] box-border border-black w-[80px]">time</th>
                                                <th className="text-left border-solid p-[5px] box-border border-black w-[200px]">name</th>
                                                <th className="text-left border-solid p-[5px] box-border border-black w-[100px]">cost</th>
                                                <th className="text-left border-solid p-[5px] box-border border-black">description</th>
                                            </tr>
                                            <tr className="border-solid p-[5px] box-border border-black text-center">
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm max-w-[80px] break-words">{item.time}</td>
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm max-w-[200px] break-words">{item.name}</td>
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm max-w-[100px] break-words">{item.cost}</td>
                                                <td className="text-left border-solid p-[5px] box-border border-black text-sm break-words">{item.description}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                </tr>
                                </div>
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
