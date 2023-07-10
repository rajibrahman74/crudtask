import { useForm } from "react-hook-form";
import Button from "./Button";

const EmployeeForm = ({ onAddItem }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newItem = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      salary: data.salary,
    };
    onAddItem(newItem);
    reset(); // Reset the form fields
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName", { required: true })}
        className="border p-2 w-full mb-2"
      />
      {errors.fullName && <p className="text-red-500">Full Name is required</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className="border p-2 w-full mb-2"
      />
      {errors.email && <p className="text-red-500">Email is required</p>}

      <input
        type="text"
        placeholder="Phone No."
        {...register("phone", { required: true })}
        className="border p-2 w-full mb-2"
      />
      {errors.phone && <p className="text-red-500">Phone No. is required</p>}
      <input
        type="text"
        placeholder="salary"
        {...register("salary", { required: true })}
        className="border p-2 w-full mb-2"
      />
      {errors.phone && <p className="text-red-500">Salary is required</p>}
      <Button type="submit" name="submit" />
    </form>
  );
};

export default EmployeeForm;
