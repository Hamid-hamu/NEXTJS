"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const productsData: Product[] = [
  { id: 1, name: "Wireless Headphones", price: "$120", image: "https://images.unsplash.com/photo-1518448026015-7f36d2fc3e5d?auto=format&fit=crop&w=400&q=80", isNew: true },
  { id: 2, name: "Smartwatch", price: "$250", image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "DSLR Camera", price: "$800", image: "https://images.unsplash.com/photo-1519183071298-a2962f450d95?auto=format&fit=crop&w=400&q=80", isNew: true },
  { id: 4, name: "Gaming Laptop", price: "$1500", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Bluetooth Speaker", price: "$90", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "VR Headset", price: "$350", image: "https://images.unsplash.com/photo-1581276879432-15b2c8a93f53?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Fitness Tracker", price: "$70", image: "https://images.unsplash.com/photo-1565372910506-44f3b9732d44?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Smartphone", price: "$699", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", isNew: true },
  { id: 9, name: "Drone", price: "$999", image: "https://images.unsplash.com/photo-1504198266281-1659ae67c5a1?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Wireless Mouse", price: "$35", image: "https://images.unsplash.com/photo-1585079542064-1b6f9b1c3a0d?auto=format&fit=crop&w=400&q=80" },
];

export default function CardsSection() {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome to Cards Section</h1>

      <div className="mb-6 flex gap-2 max-w-md">
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-gray-800/50 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-cyan-400"
        />
        <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:scale-105 transition-transform">
          Search
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative bg-gray-800/50 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.5)] overflow-hidden flex flex-col"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236,72,153,0.7)" }}
            >
              {product.isNew && (
                <motion.div
                  className="absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-cyan-400 to-pink-500 rounded shadow-[0_0_10px_rgba(236,72,153,0.7)]"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >
                  NEW
                </motion.div>
              )}

              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-300 mt-1">{product.price}</p>
                </div>
                <Button
                  className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:scale-105 transition-transform"
                >
                  Buy Now
                </Button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-300 col-span-full text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}
