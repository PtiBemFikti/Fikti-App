import Image from "next/image";
import { CandidatePerson } from "@/types/pemira";

const fallbackImage = "/pemira/background-calon.png";

type CandidatePortraitProps = {
  person: CandidatePerson;
  role: string;
  sizes: string;
  className?: string;
  showLabel?: boolean;
};

export default function CandidatePortrait({
  person,
  role,
  sizes,
  className = "",
  showLabel = false,
}: CandidatePortraitProps) {
  return (
    <div className={`relative min-w-0 overflow-hidden ${className}`}>
      <Image
        src={person.image || fallbackImage}
        alt={person.name ? `${role}: ${person.name}` : `Foto ${role}`}
        fill
        className="object-cover object-center"
        sizes={sizes}
      />
      {showLabel && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">
            {role}
          </p>
          <p className="truncate text-sm font-semibold text-white">
            {person.name}
          </p>
        </div>
      )}
    </div>
  );
}
