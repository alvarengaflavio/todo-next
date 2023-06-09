import { Prisma } from "@prisma/client";
import { z } from "zod";
import { AuthRequiredException } from "./exceptions";

export function exceptionHandler(error: any) {
  if (error instanceof AuthRequiredException) {
    const errObj = buildAuthErrorObject(error);

    return new Response(JSON.stringify(errObj), {
      status: 403,
      statusText: errObj.name ?? "Forbidden",
    });
  }

  if (error instanceof z.ZodError) {
    const errObj = buildZodErrorObject(error);

    return new Response(JSON.stringify(errObj), {
      status: errObj.code ?? 400,
      statusText: errObj.name ?? "Unprocessable Content",
    });
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    const errObj = buildPrismaErrorObject(error);

    return new Response(JSON.stringify(errObj), {
      status: errObj.code ?? 400,
      statusText: errObj.name ?? "Bad Request",
    });
  }

  const message = buildErrorObject(error);

  return new Response(JSON.stringify(message), {
    status: message.code ?? 500,
    statusText: message.name ?? "Internal Server Error",
  });
}

// * HELPERS FUNCTIONS

const buildErrorObject = (error: any): ErrorObject => {
  if (error instanceof SyntaxError) {
    return {
      name: "Bad Request",
      message: "Invalid JSON",
      code: 400,
    };
  }

  return {
    name: error?.name ?? "Internal Server Error",
    message: error?.message ?? "Internal Server Error",
    code: error?.code ?? 500,
  };
};

const getPrismaError = (error: any) => {
  return error.message
    .split("\n")
    .map((line: string) => {
      if (line.includes("Argument title:")) {
        return line.split("Argument title:")[1].trim();
      }
    })
    .join("");
};

const buildPrismaErrorObject = (
  error: Prisma.PrismaClientValidationError
): ErrorObject => {
  return {
    name: "Bad Request",
    code: (error?.cause as number) ?? 400,
    message: getPrismaError(error) ?? "Internal Server Error",
  };
};

const buildZodErrorObject = (error: z.ZodError): ErrorObject => {
  return {
    name: "Unprocessable Content",
    code: 422,
    message: error.issues[0]?.message ?? "Unprocessable Content",
  };
};

const buildAuthErrorObject = (error: AuthRequiredException): ErrorObject => {
  return {
    name: "Forbidden Error",
    code: 403,
    message: "Forbidden - " + error.message ?? "Forbidden",
  };
};

interface ErrorObject {
  name: string;
  message: string;
  code: number;
}
