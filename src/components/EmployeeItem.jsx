const EmployeeItem = ({ item, onEdit, onDelete }) => {
  return (
    <>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
        {item.fullName}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Email</span>
        {item.email}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Phone</span>
        {item.phone}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Salary</span>
        {item.salary}
      </td>
      <td className="md:text-center text-left p-2 md:border md:border-grey-500 block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button
          onClick={onEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 ms-3"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default EmployeeItem;
