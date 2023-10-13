async function TodosPage() {
  
      const respond = await fetch("http://localhost:3000/api/todos", {
        cache: "no-store",
      });
      const data = await respond.json();
      

  return (
    <section className="mt-24 w-full h-full flex justify-center">
      <table className="table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left text-gray-700 uppercase font-semibold">
              ID
            </th>
            <th className="px-6 py-3 text-left text-gray-700 uppercase font-semibold">
              Name
            </th>
            <th className="px-6 py-3 text-left text-gray-700 uppercase font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.todos.map((todo) => (
            <tr key={todo.id} className="hover:bg-gray-100">
              <td className="px-6 py-4"><a href={`/todos/${todo.id}`}>{todo.id}</a></td>
              <td className="px-6 py-4">{todo.name}</td>
              <td className="px-6 py-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TodosPage;
