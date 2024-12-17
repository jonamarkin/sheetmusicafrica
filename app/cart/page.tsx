"use client";

import { useCart } from "@/lib/cart/cart-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, clearCart, getCartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-secondary">
        Your Shopping Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-muted-foreground">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>By {item.composer}</p>
                  <p>Genre: {item.genre}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="font-bold mt-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-end">
            <p className="text-xl font-bold mb-4">
              Total: ${getCartTotal().toFixed(2)}
            </p>
            <div className="space-x-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
