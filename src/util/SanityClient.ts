import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "dkpx0jrt",
  dataset: "blog",
  apiVersion: "vX",
  useCdn: false,
});
