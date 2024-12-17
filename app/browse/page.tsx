"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useData } from "@/lib/data/data-context";
import { MusicScore } from "@/lib/data/interfaces";
import { useCart } from "@/lib/cart/cart-context";

const ITEMS_PER_PAGE = 6;

export default function BrowsePage() {
  const [allMusicScores, setAllMusicScores] = useState<MusicScore[]>([]);
  const [filteredScores, setFilteredScores] = useState<MusicScore[]>([]);
  const [displayedScores, setDisplayedScores] = useState<MusicScore[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genreFilter, setGenreFilter] = useState("all");
  const [composerFilter, setComposerFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [searchTerm, setSearchTerm] = useState("");

  const dataProvider = useData();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMusicScores = async () => {
      try {
        const scores = await dataProvider.getMusicScores();
        setAllMusicScores(scores);
        setFilteredScores(scores);
      } catch (error) {
        console.error("Failed to fetch music scores:", error);
      }
    };

    fetchMusicScores();
  }, [dataProvider]);

  const genres = [...new Set(allMusicScores.map((score) => score.genre))];
  const composers = [...new Set(allMusicScores.map((score) => score.composer))];

  const applyFilters = () => {
    let result = allMusicScores;
    if (genreFilter !== "all") {
      result = result.filter((score) => score.genre === genreFilter);
    }
    if (composerFilter !== "all") {
      result = result.filter((score) => score.composer === composerFilter);
    }
    result = result.filter(
      (score) => score.price >= priceRange[0] && score.price <= priceRange[1]
    );
    if (searchTerm) {
      result = result.filter(
        (score) =>
          score.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          score.composer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredScores(result);
    setCurrentPage(1);
  };

  useEffect(() => {
    setDisplayedScores(filteredScores.slice(0, currentPage * ITEMS_PER_PAGE));
  }, [filteredScores, currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#111622]">
        Browse Music Scores
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search titles or composers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-[#ee9418] focus:ring-[#ee9418]"
          />
        </div>
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Select value={genreFilter} onValueChange={setGenreFilter}>
            <SelectTrigger
              id="genre"
              className="border-[#ee9418] focus:ring-[#ee9418]"
            >
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="composer">Composer</Label>
          <Select value={composerFilter} onValueChange={setComposerFilter}>
            <SelectTrigger
              id="composer"
              className="border-[#ee9418] focus:ring-[#ee9418]"
            >
              <SelectValue placeholder="Select composer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Composers</SelectItem>
              {composers.map((composer) => (
                <SelectItem key={composer} value={composer}>
                  {composer}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <Slider
            min={0}
            max={50}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="[&>span]:bg-[#ee9418]"
          />
        </div>
      </div>

      <Button
        onClick={applyFilters}
        className="mb-8 bg-[#ee9418] hover:bg-[#d48315] text-white"
      >
        Apply Filters
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedScores.map((score) => (
          <Card key={score.id} className="flex flex-col overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt={score.title}
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
            <CardHeader>
              <CardTitle>{score.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>By {score.composer}</p>
              <p>Genre: {score.genre}</p>
              <p className="font-bold mt-2 text-[#ee9418]">
                ${score.price.toFixed(2)}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                asChild
                variant="outline"
                className="border-[#ee9418] text-[#ee9418] hover:bg-[#ee9418] hover:text-white"
              >
                <Link href={`/preview/${score.id}`}>Preview</Link>
              </Button>
              <Button
                onClick={() => addToCart(score)}
                className="bg-[#ee9418] hover:bg-[#d48315] text-white"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {displayedScores.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No music scores found matching your criteria.
        </p>
      )}

      {displayedScores.length < filteredScores.length && (
        <div className="mt-8 text-center">
          <Button
            onClick={loadMore}
            variant="outline"
            className="border-[#ee9418] text-[#ee9418] hover:bg-[#ee9418] hover:text-white"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
