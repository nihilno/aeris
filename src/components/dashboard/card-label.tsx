import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function CardLabel({ title, description }: CardLabelProps) {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
  );
}

export default CardLabel;
