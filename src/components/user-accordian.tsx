import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface UserAccordionProps {
  className?: string;
  props?: React.ComponentPropsWithoutRef<"div">;
}

const UserAccordion: FC<UserAccordionProps> = ({ className, props }) => {
  return (
    <Accordion type="single" className={cn(" ", className)} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default UserAccordion;
