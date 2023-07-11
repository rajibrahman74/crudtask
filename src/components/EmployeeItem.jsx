import Button from "./Button";

const EmployeeItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="">Full Name: {item.fullName}</h3>
      <p className="mb-2">Email: {item.email}</p>
      <p className="mb-2">Phone No: {item.phone}</p>
      <p className="mb-2">Salary: {item.salary}</p>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Button name="Edit" onClick={onEdit} />
        <Button name="Delete" onClick={onDelete} />
      </div>
    </div>
  );
};

export default EmployeeItem;