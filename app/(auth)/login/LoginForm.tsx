"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { GiPadlock } from "react-icons/gi";

import { useForm } from "react-hook-form";

import { loginSchema, LoginSchema } from "@/lib/schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

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
              {...register("email")}
              defaultValue=""
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              {...register("password")}
              defaultValue=""
              label="Password"
              type="password"
              variant="bordered"
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
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
