import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    // @ts-ignore
    collection: "categories",
  });

  return Response.json(data);
};
