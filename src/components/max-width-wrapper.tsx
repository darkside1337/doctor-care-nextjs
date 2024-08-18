import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function MaxWidthWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto px-6 lg:max-w-[1366px] lg:px-[124px]", className)}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
