import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageBanner title="404 – Page not found" />
      <div className="px-5 py-20 text-center">
        <p className="mb-6 text-ink/70">This page no longer exists or has moved.</p>
        <Button to="/">Back to home</Button>
      </div>
    </>
  );
}
