import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const list = [
  { name: "Facebook", Icon: FaFacebookF, href: "https://www.facebook.com/" },
  { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/" },
  { name: "X", Icon: FaXTwitter, href: "https://x.com/" },
  { name: "LinkedIn", Icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
];

export default function Socials({ className = "h-7 w-7 bg-white/20 text-white", iconSize = 13 }) {
  return (
    <ul className="flex gap-2">
      {list.map(({ name, Icon, href }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={name}
             className={`grid place-items-center rounded-full transition hover:bg-brand hover:text-white ${className}`}>
            <Icon size={iconSize} />
          </a>
        </li>
      ))}
    </ul>
  );
}
