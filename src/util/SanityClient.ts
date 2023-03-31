import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "dkpx0jrt",
  dataset: "blog",
  apiVersion: "v2021-03-25",
  useCdn: false,
});
