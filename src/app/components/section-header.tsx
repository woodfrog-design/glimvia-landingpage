import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}