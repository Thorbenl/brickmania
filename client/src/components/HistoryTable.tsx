import React from "react";
import {BrickHistoryData} from "../types";
import {GeneralUtils} from "../utils";
import {
  useParams
} from "react-router-dom";

export const HistoryTable: React.FC = () => {
  const [data, setData] = React.useState<BrickHistoryData[]>([]);
  let { id } = useParams();
  React.useEffect(() => {
      fetch(`http://localhost:8000/bricks/${id}/history`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
  },[]);

  return (
    <>
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
        <tr>
          <th></th>
          <th>Date Added</th>
          <th>Owner</th>
          <th>Current Status</th>
          <th>Previous Status</th>
          <th>Last changed</th>
          <th>Total number changed</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {data.length > 0 && data.map(brick => (
          <>
            <tr>
              <th>{brick.id}</th>
              <td>{GeneralUtils.getPrettyDate(brick.instance_created_date)}</td>
              <td>{brick.owner}</td>
              <td className={`bg-${brick.status.toLowerCase()}-500`}><span className="text-black">{brick.status.toLowerCase()}</span></td>
              <span>{brick.status.toLowerCase()}</span>

            </tr>
          </>
        ))}
        </tbody>
        <tfoot>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Owner</th>
          <th>Current Status</th>
          <th>Previous Status</th>
          <th>Last changed</th>
          <th>Total number changed</th>
        </tr>
        </tfoot>
      </table>
    </div>
    </>
  )

}
