import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("Password", { max: 0, min: 8})} />
      <input type="password" placeholder="Retype Password" {...register("Retype Password", {required: true, min: 8})} />

      <input type="submit" />
    </form>
  );
}