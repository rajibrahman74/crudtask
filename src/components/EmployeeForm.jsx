import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from "./Button";

const EmployeeForm = ({ onAddItem, editIndex, employee }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (employee) {
      setValue("fullName", employee.fullName);
      setValue("email", employee.email);
      setValue("phone", employee.phone);
      setValue("salary", employee.salary);
    }
  }, [employee, setValue]);

  // function for submit form data
  const onSubmit = (data) => {
    if (editIndex !== null) {
      const updatedItem = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        salary: data.salary,
      };
      onAddItem(updatedItem);
      reset(); // Reset the form fields after update data

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Employee data updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const newItem = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        salary: data.salary,
      };
      onAddItem(newItem);
      reset(); // Reset the form fields

      // Show SweetAlert2 pop-up for successful addition the new employee data
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Employee data has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-3 w-full md:w-2/5 mx-auto"
    >
      <input
        type="text"
        placeholder="First Name"
        {...register("fullName", { required: true })}
        className={`border p-2 w-full mb-3 ${
          errors.fullName ? "border-red-500" : ""
        }`}
      />
      {errors.fullName && <p className="text-red-500">Full Name is required</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className={`border p-2 w-full mb-3 ${
          errors.email ? "border-red-500" : ""
        }`}
      />
      {errors.email && <p className="text-red-500">Email required or exist</p>}

      <input
        type="text"
        placeholder="Phone No"
        {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
        className={`border p-2 w-full mb-3 ${
          errors.phone ? "border-red-500" : ""
        }`}
      />
      {errors.phone && (
        <p className="text-red-500">
          Phone is required or exist (add number only)
        </p>
      )}

      <input
        type="text"
        placeholder="Salary"
        {...register("salary", { required: true, pattern: /^[0-9]+$/ })}
        className={`border p-2 w-full mb-2 ${
          errors.salary ? "border-red-500" : ""
        }`}
      />
      {errors.salary && (
        <p className="text-red-500">
          Salary is required and should contain only numbers
        </p>
      )}

      <Button
        type="submit"
        name={
          editIndex !== null ? "Update Employee Data" : "Add New Employee Data"
        }
      />
    </form>
  );
};

export default EmployeeForm;
