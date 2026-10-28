import { Plus } from "lucide-react";
import { img, clientAvatars } from "@/data/home4";

export default function Avatars() {
  return (
    <div className="flex items-center -space-x-2">
      {clientAvatars.map((a) => (
        <img key={a} src={img(a)} alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
      ))}
      <span className="z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-brand text-white">
        <Plus size={16} />
      </span>
    </div>
  );
}
