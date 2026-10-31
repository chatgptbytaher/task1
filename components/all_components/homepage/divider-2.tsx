import { cn } from "@/lib/utils";

interface Divider2Props {
  className?: string;
}

export default function Divider2({ className }: Divider2Props) {
  return (
    <div className={cn("border w-variant-cb23eb3a-188e-4961-4b60-4654cb231014", className)} data-wf--border--variant="reversed">
      {" "}
      <div className="border_line" id="" style={{ backgroundColor: "#000" }} />
      {" "}
      <div className="border_line _2" id="" style={{ backgroundColor: "#000" }} />
      {" "}
      <div className="border_line _3" id="" style={{ backgroundColor: "#000" }} />
      {" "}
      <div className="border_line _4" id="" style={{ backgroundColor: "#000" }} />
      {" "}
      <div className="border_line _5" id="" style={{ backgroundColor: "#000" }} />
      {" "}
    </div>
  );
}
