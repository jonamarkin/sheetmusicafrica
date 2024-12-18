import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This would typically come from a database
const musicScores = [
  {
    id: 1,
    title: "African Symphony No. 1",
    composer: "Kwame Nkrumah",
    price: 19.99,
  },
  { id: 2, title: "Savanna Rhythms", composer: "Miriam Makeba", price: 14.99 },
  {
    id: 3,
    title: "Drums of the Serengeti",
    composer: "Fela Kuti",
    price: 24.99,
  },
];

export default async function PreviewPage(props: {
  params: Promise<{ id: string }>;
}) {
  // Await the params object before accessing its properties
  const params = await props.params;

  const id = params.id;
  const score = musicScores.find((s) => s.id === parseInt(id));

  if (!score) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{score.title}</h1>
      <p className="mb-4">By {score.composer}</p>
      <p className="font-bold mb-4">${score.price.toFixed(2)}</p>
      <div className="bg-gray-200 p-4 mb-6 rounded">
        <p>Preview of the music score would be displayed here.</p>
        <p>This could be an image or an interactive sheet music viewer.</p>
      </div>
      <Button asChild>
        <Link href={`/purchase/${score.id}`}>Purchase</Link>
      </Button>
    </div>
  );
}
