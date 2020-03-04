import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "3a5n8zp2",
  dataset: "production",
  useCdn: true
});

export default client;
