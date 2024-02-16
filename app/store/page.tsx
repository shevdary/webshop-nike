"use client";

import React, { useState } from "react";
import { Badge } from "@mui/material";
import AppAppBar from "../components/appBar";
import ProductStore from "./components/Store";
import { emptyCart } from "../components/constants/Defaults";
import { CartPage } from "./components/cart/Page";
import { numberOfItems } from "./components/cart/functions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Store(): JSX.Element {
  const [cart, setCart] = useState(emptyCart);
  const [openCart, setOpenCart] = useState(false);
  const [number, setNumber] = useState(numberOfItems(cart));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <AppAppBar
          numberOfItems={number}
          openCart={openCart}
          setOpenCart={setOpenCart}
        />
      </div>
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {!openCart && (
          <ProductStore
            numberOfItems={number}
            openCart={openCart}
            setOpenCart={setOpenCart}
            cart={cart}
            setCart={(c) => {
              setCart(c);
              setNumber(numberOfItems(c));
            }}
          />
        )}

        {openCart && (
          <CartPage
            openCart={openCart}
            setOpenCart={setOpenCart}
            cart={cart}
            setCart={(c) => {
              setCart(c);
              setNumber(numberOfItems(c));
            }}
          />
        )}
      </div>
      <div className="mb-32 grid text-center lg:max-w-2xl lg:w-full lg:mb-0 md:grid-cols-3 lg:text-left">
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
        <Link
          href="/store/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about Nike Sneakers
          </p>
        </Link>
        <div
          role="presentation"
          onClick={() => setOpenCart(true)}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Link href="#">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Cart{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              <Badge badgeContent={number} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
