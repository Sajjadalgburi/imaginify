/* eslint-disable @next/next/no-async-client-component */
"use client";

import Header from "@/components/shared/Header";
import { TForm } from "@/components/shared/TransformationFrom";
import { transformationTypes } from "@/constants";
import React from "react";
import { getUserById } from "@/lib/actions/user.actions";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationType = async ({
  params: { type },
}: SearchParamProps) => {
  const transfromation = transformationTypes[type];

  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId as string);

  return (
    <>
      <Header title={transfromation.title} subtitle={transfromation.subTitle} />

      <TForm
        action="Add"
        userId={user._id}
        type={transfromation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationType;
