import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function CardLabel({ title, description }: CardLabelProps) {
  return (
    <CardHeader className="relative z-50 text-center sm:text-left">
      <CardTitle className="text-2xl font-semibold md:text-3xl">
        {title}
      </CardTitle>
      {description && (
        <CardDescription className="md:text-lg">{description}</CardDescription>
      )}
    </CardHeader>
  );
}

export default CardLabel;
