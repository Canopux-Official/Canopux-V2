import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "dark",
  className = "",
  priority = false,
}: LogoProps) {
  // Nav and footer use dark surfaces, white wordmark from /public/icons/CANOPUX.png
  const src =
    variant === "dark" ? "/icons/CANOPUX.png" : "/brand/Canopux_black.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canopux-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canopux-black ${className}`}
      aria-label="Canopux home"
    >
      <Image
        src={src}
        alt="Canopux wordmark with ringed planet mark replacing the letter O"
        width={160}
        height={36}
        className="h-5 w-auto object-contain object-left sm:h-7"
        priority={priority}
      />
    </Link>
  );
}
