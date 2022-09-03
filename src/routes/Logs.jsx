function LogsRoute() {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-6 py-3 px-2 bg-zinc-50">
      <table className="table-auto text-center bg-white border-collapse border border-slate-200">
        <thead className="bg-black text-white">
          <tr>
            <th>Time</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="text-sm text-slate-600">
          <tr>
            <td className="border-b border-slate-200 pl-3 py-2">22/12/2022</td>
            <td className="border-b border-slate-200 pl-3 py-2">Sold at price 300</td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 pl-3 py-2">22/12/2022</td>
            <td className="border-b border-slate-200 pl-3 py-2">Sold at price 300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LogsRoute;