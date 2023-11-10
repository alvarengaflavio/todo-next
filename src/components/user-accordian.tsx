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
  children?: React.ReactNode;
}

const UserAccordion: FC<UserAccordionProps> = ({ className, children }) => {
  return (
    <Accordion type="single" className={cn(" ", className)} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Estou devidamente autenticado?</AccordionTrigger>
        <AccordionContent>
          Abaixo segue o status da autenticação do usuário seguido dos dados da
          seção do usuário. Caso o usuário não esteja autenticado, será recebido
          o objeto{" "}
          <code className="bg-slate-200 dark:bg-slate-800 px-0.5 rounded-sm">
            null
          </code>
          .
          <br />
          <br /> {children}
          <br />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default UserAccordion;
