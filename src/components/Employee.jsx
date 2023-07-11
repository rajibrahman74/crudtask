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
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-3 text-white">New Employee</h1>
      <EmployeeForm
        onAddItem={handleAddItem}
        editIndex={editIndex}
        employee={employeeItems[editIndex]}
      />
      <div className="flex flex-wrap -mx-2">
        {employeeItems.map((item, index) => (
          <div key={index} className="w-full px-2 mb-4">
            <EmployeeItem
              item={item}
              onEdit={() => handleEditItem(index)}
              onDelete={() => handleDeleteItem(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;