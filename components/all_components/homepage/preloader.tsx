import { cn } from "@/lib/utils";

interface PreloaderProps {
  className?: string;
}

export default function Preloader({ className }: PreloaderProps) {
  return (
    <div className={cn("preloader", className)} style={{ display: "none" }}>
      {" "}
      <div className="logo_text" data-preloader-logo="">
        //EUROPA
      </div>
      {" "}
      <div className="preloader_border">
        {" "}
        <div className="border" data-wf--border--variant="base">
          {" "}
          <div className="border_line" id="" style={{ backgroundColor: "#121212" }} />
          {" "}
          <div className="border_line _2" id="" style={{ backgroundColor: "#121212" }} />
          {" "}
          <div className="border_line _3" id="" style={{ backgroundColor: "#121212" }} />
          {" "}
          <div className="border_line _4" id="" style={{ backgroundColor: "#121212" }} />
          {" "}
          <div className="border_line _5" id="" style={{ backgroundColor: "#121212" }} />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
