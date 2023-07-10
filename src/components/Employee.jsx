import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeItem from "./EmployeeItem";

const Employee = () => {
  const [employeeItems, setEmployeeItems] = useState([]);

  const handleAddItem = (item) => {
    setEmployeeItems([...employeeItems, item]);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Employee</h1>

      <EmployeeForm onAddItem={handleAddItem} />

      <div className="flex flex-wrap -mx-2">
        {employeeItems.map((item, index) => (
          <div key={index} className="w-full px-2 mb-4">
            <EmployeeItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;