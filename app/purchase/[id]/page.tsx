import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"

// This would typically come from a database
const musicScores = [
  { id: 1, title: "African Symphony No. 1", composer: "Kwame Nkrumah", price: 19.99 },
  { id: 2, title: "Savanna Rhythms", composer: "Miriam Makeba", price: 14.99 },
  { id: 3, title: "Drums of the Serengeti", composer: "Fela Kuti", price: 24.99 },
]

export default function PurchasePage({ params }: { params: { id: string } }) {
  const score = musicScores.find(s => s.id === parseInt(params.id))

  if (!score) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Purchase {score.title}</h1>
      <p className="mb-4">By {score.composer}</p>
      <p className="font-bold mb-4">${score.price.toFixed(2)}</p>
      <form className="space-y-4">
        {/* Payment form fields would go here */}
        <Button type="submit">Complete Purchase</Button>
      </form>
    </div>
  )
}

