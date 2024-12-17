import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function UploadPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upload Your Music Score</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter the title of your music score" />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe your music score" />
        </div>
        <div>
          <Label htmlFor="price">Price ($)</Label>
          <Input id="price" type="number" step="0.01" placeholder="Enter the price" />
        </div>
        <div>
          <Label htmlFor="file">Upload Score (PDF)</Label>
          <Input id="file" type="file" accept=".pdf" />
        </div>
        <Button type="submit">Upload Score</Button>
      </form>
    </div>
  )
}

