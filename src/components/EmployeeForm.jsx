import { useForm } from "react-hook-form";
import Button from "./Button";
const EmployeeForm = () => {
  const { register } = useForm();
  return (
    <form className="mb-4">
      <input
        type="text"
        placeholder="First Name"
        {...register("fullName", { required: true })}
        className="border p-2 w-full mb-2"
      />

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Phone No"
        {...register("phone", { required: true })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="salary"
        {...register("salary", { required: true })}
        className="border p-2 w-full mb-2"
      />
      <Button name="Add employee" />
    </form>
  );
};

export default EmployeeForm;
