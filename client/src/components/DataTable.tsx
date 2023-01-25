import React from "react";
import {GeneralUtils} from "../utils";
import {useBricksFetchQuery} from "../hooks/useBricksFetchQuery";

export const DataTable: React.FC = () => {
  const { data, isLoading } = useBricksFetchQuery();

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="container mx-auto px-4 py-4">
        {data && data.results.length == 0 && (
          <div className="mx-auto">
            <h1> No Data! Please head to http://0.0.0.0:8000/bricks/ login and create some via the UI</h1>
          </div>
        )}
      <div className="overflow-x-auto">
        {data && data.results.length > 0 && (
          <table className="table w-full">
            <thead>
            <tr>
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
            {data.results.map((brick, i) => (
                  <tr key={i}>
                    <td>{GeneralUtils.getPrettyDate(brick.instance_created_date)}</td>
                    <td>{brick.owner}</td>
                    <td>{GeneralUtils.capitalise(brick.status)}</td>
                    {brick.history && (
                      <>
                        <td>{brick.history[0].status}</td>
                        <td>{GeneralUtils.getPrettyDate(brick.instance_created_date)}</td>
                        <td>{brick.history.length}</td>
                        <td><a target="_blank" href={`http://localhost:8000/bricks/${brick.id}/history`}>View History</a></td>
                      </>
                    )}
                  </tr>
            ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )

}
