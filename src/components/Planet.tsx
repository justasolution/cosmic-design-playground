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
        "planet",
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