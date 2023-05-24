import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

interface PageProps {
  id: number;
  title: string;
  description?: string;
  content?: string;
  footer: string;
}

const EditTodoCard: FC<PageProps> = (props) => {
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
        <p>{footer === "true" ? "Completa" : "Incompleta"}</p>
      </CardFooter>
    </Card>
  );
};

export default EditTodoCard;
