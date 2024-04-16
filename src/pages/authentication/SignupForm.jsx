/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useSignUpWithEmail from "../../hooks/useSignUpWithEmail";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { loading, error, signup } = useSignUpWithEmail();

  function onSubmit({fullName,email,password,userName}) {
    signup(
      { fullName,userName , email, password},
      {
        onSettled: () => reset(),
      }
    );
    console.log(userName);

  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={loading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="User name" error={errors?.userName?.message}>
        <Input
          type="text"
          id="userName"
          disabled={loading}
          {...register("userName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={loading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={loading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={loading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={loading}
          onClick={reset}
        >
          <NavLink to="/login">Cancel</NavLink>
        </Button>
        <Button disabled={loading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
