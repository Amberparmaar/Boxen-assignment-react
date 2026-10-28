import { Link } from "react-router-dom";
import { Box } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-white">
      <Box className="text-brand" size={34} strokeWidth={2.2} />
      <span className="text-3xl font-medium tracking-tight">Bexon</span>
    </Link>
  );
}
