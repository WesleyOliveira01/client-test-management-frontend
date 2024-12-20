import ClientCards from "@/components/client/ClientCard";
import { twMerge } from "tailwind-merge";
import Container from "../ui/Container";

interface RenderClientsProps {
  data: any[];
  title?: string;
  box_cn?: string;
  title_cn?: string;
}

const RenderClients = ({
  data,
  box_cn,
  title_cn,
  title,
}: RenderClientsProps) => {
  return (
    data.length > 0 && (
      <Container
        className={twMerge("border-2 border-dotted rounded-xl", box_cn)}
      >
        <h1 className={twMerge("text-xl font-semibold", title_cn)}>{title}</h1>
        <ol className="flex flex-row-reverse flex-wrap gap-2 p-4 justify-evenly">
          {data.map((item) => (
            <ClientCards key={item.id} client={item} />
          ))}
        </ol>
      </Container>
    )
  );
};

export default RenderClients;
