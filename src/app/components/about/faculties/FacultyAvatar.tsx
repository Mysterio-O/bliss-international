import Image from "next/image";

type FacultyAvatarProps = {
    name: string;
    image?: string;
    size?: "sm" | "md" | "lg";
};

function getInitials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0].toUpperCase())
        .join("");
}

const sizeMap = {
    sm: { px: 64, className: "size-16" },
    md: { px: 96, className: "size-24" },
    lg: { px: 128, className: "size-32" },
};

export function FacultyAvatar({ name, image, size = "md" }: FacultyAvatarProps) {
    const { px, className } = sizeMap[size];
    const initials = getInitials(name);

    if (image) {
        return (
            <div className={`${className} relative shrink-0 overflow-hidden rounded-2xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background`}>
                <Image
                    src={image}
                    alt={name}
                    width={px}
                    height={px}
                    className="size-full object-cover object-top"
                />
            </div>
        );
    }

    return (
        <div
            className={`${className} relative shrink-0 overflow-hidden rounded-2xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background
        flex items-center justify-center
        bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20
        dark:from-primary/30 dark:via-primary/15 dark:to-secondary/25`}
            aria-label={`Avatar for ${name}`}
        >
            <span
                className={`font-semibold text-primary dark:text-primary select-none ${size === "lg" ? "text-3xl" : size === "md" ? "text-2xl" : "text-lg"
                    }`}
            >
                {initials}
            </span>
        </div>
    );
}