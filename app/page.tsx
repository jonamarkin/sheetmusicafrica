"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 hero-pattern">
        <motion.div
          className="container px-4 md:px-6"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div className="space-y-2" variants={fadeIn}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                African Sheet Music,{" "}
                <span className="text-[#ee9418]">Digitally Delivered</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Discover, purchase, and instantly access authentic African sheet
                music. Connect with composers and bring the rhythms of Africa to
                life.
              </p>
            </motion.div>
            <motion.div
              className="md:space-x-4 xs:items-center"
              variants={fadeIn}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#ee9418] text-white hover:bg-[#d48315]"
              >
                <Link href="/browse">Browse Scores</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-[#d48315] border-white hover:bg-white hover:text-[#111622] mt-3"
              >
                <Link href="/upload">Upload Your Score</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Scores Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <motion.div
          className="container px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#111622]"
            variants={fadeIn}
          >
            Featured Scores
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "African Symphony No. 1",
                composer: "Kwame Nkrumah",
                image: "/place.png?height=400&width=600",
              },
              {
                title: "Savanna Rhythms",
                composer: "Miriam Makeba",
                image: "/place.png?height=400&width=600",
              },
              {
                title: "Drums of the Serengeti",
                composer: "Fela Kuti",
                image: "/place.png?height=400&width=600",
              },
            ].map((score, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
                variants={fadeIn}
              >
                <Image
                  src={score.image}
                  alt={score.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {score.title}
                  </h3>
                  <p className="text-[#ee9418]">by {score.composer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <motion.div
          className="container px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#111622]"
            variants={fadeIn}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Browse",
                description:
                  "Explore our vast collection of African sheet music from various composers and genres.",
                icon: "🎵",
              },
              {
                title: "Preview",
                description:
                  "Get a sneak peek of the scores before making a purchase to ensure it meets your needs.",
                icon: "👀",
              },
              {
                title: "Purchase",
                description:
                  "Securely buy the scores you love and instantly download them to start playing.",
                icon: "💳",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 text-center bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="text-4xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-bold text-[#111622]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#111622] text-white">
        <motion.div
          className="container px-4 md:px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div className="space-y-2" variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Musical Community
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Whether you're a composer or a music enthusiast, there's a place
                for you in Sheet Music Africa.
              </p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Button
                asChild
                size="lg"
                className="bg-[#ee9418] text-white hover:bg-[#d48315]"
              >
                <Link href="/auth">Sign Up Now</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
