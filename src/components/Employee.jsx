import EmployeeForm from "./EmployeeForm";

const Employee = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">New Employee</h1>
      <EmployeeForm />
    </div>
  );
};

export default Employee;