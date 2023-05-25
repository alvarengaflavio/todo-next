"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastWithAction() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Oh não! Algo deu errado.",
          description: "Ocorreu um problema com a sua requisição.",
          action: (
            <ToastAction altText="Tentar Novamente">Reenviar</ToastAction>
          ),
        });
      }}
    >
      Mostrar Toast
    </Button>
  );
}
