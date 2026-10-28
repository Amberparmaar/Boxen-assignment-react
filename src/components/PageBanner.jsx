export default function PageBanner({ title }) {
  return (
    <section className="bg-hero px-5 pb-20 pt-40 text-center text-white">
      <h1 className="text-4xl font-semibold md:text-6xl">{title}</h1>
    </section>
  );
}
