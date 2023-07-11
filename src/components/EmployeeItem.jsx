import Button from "./Button";

const EmployeeItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className="border p-4 mb-2 text-white">
      <h3 className="mb-2">
        <span className="font-bold">Full Name:</span> {item.fullName}
      </h3>
      <h3 className="mb-2">
        <span className="font-bold">Email:</span> {item.email}
      </h3>
      <h3 className="mb-2">
        <span className="font-bold">Phone No:</span> {item.phone}
      </h3>
      <h3 className="mb-2">
        <span className="font-bold">Salary:</span> {item.salary}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <Button name="Edit" onClick={onEdit} />
        <Button name="Delete" onClick={onDelete} />
      </div>
    </div>
  );
};

export default EmployeeItem;