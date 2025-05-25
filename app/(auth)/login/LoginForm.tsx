"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { GiPadlock } from "react-icons/gi";

import { useForm } from "react-hook-form";

import { useEffect, useRef } from "react";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, [input]);

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome Back To ChatApp</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              {...register("email", { required: "Email is required" })}
              defaultValue=""
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
              ref={input}
            />
            <Input
              {...register("password", { required: "Password is required" })}
              defaultValue=""
              label="Password"
              type="password"
              variant="bordered"
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              isDisabled={!isValid}
              fullWidth
              color="secondary"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
