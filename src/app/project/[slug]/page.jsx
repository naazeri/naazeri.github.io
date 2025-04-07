export async function generateStaticParams() {
  // Replace with your logic to fetch possible slugs
  const slugs = ['1', '2', '3']; // Example
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <>
      <div className="index-page">{slug}</div>
    </>
  );
}
