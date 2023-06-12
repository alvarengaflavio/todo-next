import { z } from "zod";

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(6, {
      message: "A tarefa deve ter no mínimo 6 caracteres.",
    })
    .max(45, {
      message: "A tarefa deve ter no máximo 45 caracteres.",
    })
    .nonempty({
      message: "A tarefa não pode ser vazia.",
    }),
});

export const userAuthSchema = z.object({
  email: z.string().email({
    message: "O email deve ser válido",
  }),
  password: z
    .string()
    .min(4, {
      message: "A senha deve ter no mínimo 6 caracteres",
    })
    .max(45, {
      message: "A senha deve ter no máximo 45 caracteres",
    })
    // .regex(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{4,}$/,
    //   {
    //     message:
    //       "A senha deve conter uma letra maiúscula, uma minúscula, um número e um caractere especial",
    //   }
    // )
    .nonempty({
      message: "A senha não pode ser vazia",
    }),
});
