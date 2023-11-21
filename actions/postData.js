"use server";
import { getXataClient } from "@/src/xata";
import { revalidatePath } from "next/cache";
const xata = getXataClient();

export const postData = async (formData) => {
  const diagnoze = formData.get("diagnoze");
  const operacija = formData.get("operacija");
  const planas = Boolean(formData.get("planas"));
  const ekstra = Boolean(formData.get("ekstra"));
  const protezas = Boolean(formData.get("protezas"));

  await xata.db.Operacijos.create({
    diagnoze,
    operacija,
    planas,
    ekstra,
    protezas,
  });

  revalidatePath("/");
};
