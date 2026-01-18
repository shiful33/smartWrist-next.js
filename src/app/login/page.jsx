"use client";
import React, { Suspense } from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  

  return (
    <section>
      <Suspense fallback={<div>Loading login...</div>}>
        <div className="flex items-center justify-center min-h-[80vh] bg-base-200 px-4">
      <LoginForm />
    </div>
      </Suspense>
    </section>
  );
};

export default LoginPage;
