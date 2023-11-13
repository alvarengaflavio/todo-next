import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";
import { Toggle } from "./ui/toggle";

interface EditTodoCardProps {
  id: number;
  title: string;
  description?: string;
  content?: string;
  footer: string;
}

const EditTodoCard: FC<EditTodoCardProps> = (props) => {
  const { title, description, content, footer, id } = props;

  return (
    <Card className="flex flex-col justify-between align-center">
      <CardHeader>
        <CardTitle className="text-center">
          {title ? title : "Card Title"}
        </CardTitle>
        <CardDescription className="text-center">
          {description ? description : "Card Description"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center">{content ? content : "Card Content"}</p>
      </CardContent>

      <CardFooter className="flex justify-around align-bottom">
        <Toggle
          variant={"outline"}
          className="w-16 h-16 px-2 bg-background data-[state=on]:bg-primary transition-colors ease-in"
          size={"lg"}
          pressed={footer === "true" ? true : false}
          onClick={() => {
            console.log("toggle");
          }}
        >
          {footer === "true" ? "Completa" : "Incompleta"}
        </Toggle>
      </CardFooter>
    </Card>
  );
};

export default EditTodoCard;
