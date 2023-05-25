"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Sua Mensagem foi enviada.",
        });
      }}
    >
      Mostrar Toast
    </Button>
  );
}
