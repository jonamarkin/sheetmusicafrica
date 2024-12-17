"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center text-[#111622]"
          variants={fadeIn}
        >
          About Sheet Music Africa
        </motion.h1>

        <motion.div className="max-w-3xl mx-auto mb-12" variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Sheet Music Africa is dedicated to preserving, promoting, and
                sharing the rich musical heritage of Africa. We aim to connect
                musicians, composers, and music enthusiasts from around the
                world with authentic African sheet music, fostering cultural
                exchange and appreciation through the universal language of
                music.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={staggerChildren}
        >
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Founded in 2023 by a group of passionate African musicians and
                  tech enthusiasts, Sheet Music Africa was born out of a desire
                  to make African sheet music more accessible to the global
                  community. We recognized the need for a platform that not only
                  offers sheet music but also celebrates the diversity and
                  richness of African musical traditions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We envision a world where African music is celebrated,
                  studied, and performed globally. By providing a platform for
                  African composers to share their work and for musicians
                  worldwide to discover new repertoire, we aim to bridge
                  cultural gaps and promote understanding through the power of
                  music.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#111622]">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Kras Arthur Jnr",
                role: "Founder & CEO",
                bio: "Classical pianist with a passion for African choral and lassical music",
              },
              {
                name: "Kras Arthur Jnr",
                role: "Head of Music Curation",
                bio: "Ethnomusicologist specializing in West African traditions",
              },
              {
                name: "Jonathan Ato Markin",
                role: "Tech Lead",
                bio: "Software engineer with a background in music education",
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-[#ee9418]">
                      {member.role}
                    </p>
                    <p className="mt-2">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
