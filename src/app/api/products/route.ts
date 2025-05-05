import { NextRequest } from "next/server";

export async function GET() {
  const data = {
    success: true,
    message: "Data fetched successfully",
    status: 200,
  };

  return Response.json({ data });
}
export async function POST(req: NextRequest) {
  const product = await req.json();

  console.log(product);
  return Response.json({});
}
