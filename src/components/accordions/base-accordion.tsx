import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface BaseAccordionProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const BaseAccordion: FC<BaseAccordionProps> = ({
  className,
  children,
  title,
}) => {
  return (
    <Accordion type="single" className={cn(" ", className)} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

BaseAccordion.defaultProps = {
  title: "Título do Accordion",
};

export default BaseAccordion;
