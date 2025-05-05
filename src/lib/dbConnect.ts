import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DATABASE_URL!;

export const dbConnect = async (collectionName: string) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
};
