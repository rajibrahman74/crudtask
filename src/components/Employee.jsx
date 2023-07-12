import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeItem from "./EmployeeItem";
import Swal from "sweetalert2";

const Employee = () => {
  const [employeeItems, setEmployeeItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddItem = (item) => {
    if (editIndex !== null) {
      const updatedItems = [...employeeItems];
      updatedItems[editIndex] = item;
      setEmployeeItems(updatedItems);
      setEditIndex(null);
    } else {
      setEmployeeItems([...employeeItems, item]);
    }
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
  };

  const handleDeleteItem = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItems = [...employeeItems];
        updatedItems.splice(index, 1);
        setEmployeeItems(updatedItems);
        setEditIndex(null);
        Swal.fire("Deleted!", "The employee data has been deleted.", "success");
      }
    });
  };

  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold mb-3 text-white">New Employee</h1>
      <EmployeeForm
        onAddItem={handleAddItem}
        editIndex={editIndex}
        employee={employeeItems[editIndex]}
      />
      <div className="mt-12">
        <table className="w-full md:w-5/6 mx-auto block md:table">
          <thead className="table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Name
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Phone
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Salary
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 md:text-center text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            <>
              {employeeItems.map((item, index) => (
                <tr
                  key={index}
                  className="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
                >
                  <EmployeeItem
                    item={item}
                    onEdit={() => handleEditItem(index)}
                    onDelete={() => handleDeleteItem(index)}
                  />
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
