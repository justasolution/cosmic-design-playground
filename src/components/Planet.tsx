import { cn } from "@/lib/utils";

interface PlanetProps {
  size: string;
  position: string;
  animation: string;
  className?: string;
}

const Planet = ({ size, position, animation, className }: PlanetProps) => {
  return (
    <div
      className={cn(
        "planet before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-space-purple/50 before:to-space-blue/50 before:blur-xl before:opacity-50",
        animation,
        className
      )}
      style={{
        width: size,
        height: size,
        ...position.split(" ").reduce((acc, val) => {
          const [prop, value] = val.split("-");
          return { ...acc, [prop]: value };
        }, {})
      }}
    />
  );
};

export default Planet;