export async function GET() {
  const data = {
    success: true,
    message: "Data fetched successfully",
    status: 200,
  };

  return Response.json({ data });
}
