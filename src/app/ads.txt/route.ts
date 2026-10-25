export function GET() {
  const content = "google.com, pub-5825245351059712, DIRECT, f08c47fec0942fa0\n";
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
