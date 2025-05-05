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
  const data = {
    data: req.body,
    success: true,
    message: "Data created successfully",
    status: 200,
  };

  return Response.json({ data });
}
