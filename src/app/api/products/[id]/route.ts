import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await (
    await dbConnect("products")
  ).findOne({ _id: new ObjectId(id) });

  return Response.json({
    data: data,
    success: true,
    message: "Data fetched successfully",
    status: 200,
  });
}
