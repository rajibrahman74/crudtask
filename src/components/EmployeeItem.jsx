

const EmployeeItem = ({ item }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="">Full Name: {item.fullName}</h3>
      <p className="mb-2">Email: {item.email}</p>
      <p className="mb-4">Phone No.: {item.phone}</p>
      <p className="mb-4">salary: {item.salary}</p>
    </div>
  );
};

export default EmployeeItem;
