import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "blog",
  apiVersion: "v2021-03-25",
  useCdn: false,
});
