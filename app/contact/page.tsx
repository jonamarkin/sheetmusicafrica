"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Thank you for your message. We will get back to you soon!");
  };

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
          Contact Us
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We'd love to hear from you! Whether you have a question
                    about our services, need help with an order, or just want to
                    say hello, don't hesitate to reach out.
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> info@sheetmusicafrica.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +1 (234) 567-8900
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Music Street, Harmony City,
                    Rhythm Country
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ee9418] hover:bg-[#d48315] text-white"
                    >
                      {isSubmitting && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      q: "How do I purchase sheet music?",
                      a: "You can browse our collection and purchase sheet music directly through our website. Once you've made a purchase, you can download the sheet music immediately.",
                    },
                    {
                      q: "Can I preview the sheet music before buying?",
                      a: "Yes, we offer preview images for most of our sheet music. Look for the 'Preview' button on the product page.",
                    },
                    {
                      q: "Do you offer refunds?",
                      a: "Due to the digital nature of our products, we generally do not offer refunds. However, if you experience technical issues, please contact our support team.",
                    },
                  ].map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-[#ee9418]">{faq.q}</h3>
                      <p>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
