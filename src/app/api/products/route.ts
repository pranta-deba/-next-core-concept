import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await (await dbConnect("products")).find({}).toArray();

  return Response.json({
    data: data,
    success: true,
    message: "Data fetched successfully",
    status: 200,
  });
}
export async function POST(req: Request) {
  const product = await req.json();

  console.log(product);
  return Response.json({});
}
