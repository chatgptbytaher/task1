import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={cn("border", className)} data-wf--border--variant="base">
      <div className="border_line" id="" style={{ backgroundColor: "#e9dcd2" }} />
      <div className="border_line _2" id="" style={{ backgroundColor: "#e9dcd2" }} />
      <div className="border_line _3" id="" style={{ backgroundColor: "#e9dcd2" }} />
      <div className="border_line _4" id="" style={{ backgroundColor: "#e9dcd2" }} />
      <div className="border_line _5" id="" style={{ backgroundColor: "#e9dcd2" }} />
    </div>
  );
}
