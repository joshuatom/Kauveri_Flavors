import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductList from './ProductList';
import Footer from './Footer';
import CartModal from './CartModal';

import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function Shop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartLoaded, setCartLoaded] = useState(false); // ✅ NEW

  // 🔐 Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // 📥 LOAD CART from Firebase
  useEffect(() => {
    if (!user) return;

    const fetchCart = async () => {
      try {
        const docRef = doc(db, "carts", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCart(docSnap.data().items || []);
        } else {
          setCart([]);
        }

        setCartLoaded(true); // ✅ IMPORTANT
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };

    fetchCart();
  }, [user]);

  // 📤 SAVE CART to Firebase (only after load)
  useEffect(() => {
    if (!user || !cartLoaded) return; // 🚫 prevent overwrite

    const saveCart = async () => {
      try {
        await setDoc(doc(db, "carts", user.uid), {
          items: cart,
        });
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    };

    saveCart();
  }, [cart, user, cartLoaded]);

  // ➕ Add item
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`Added ${product.name} to cart!`);
  };

  // ❌ Remove item
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // 🧹 Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // 🧾 Place order
  const handlePlaceOrder = (details) => {
    console.log("Order Placed:", details);
    console.log("Items:", cart);

    alert(`Thank you ${details.name}! Your order has been placed successfully.`);

    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="app">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Hero />

      <ProductList
        searchQuery={searchQuery}
        addToCart={addToCart}
      />

      <Footer onOpenCart={() => setIsCartOpen(true)} />

      {isCartOpen && (
        <CartModal
          cartItems={cart}
          removeFromCart={removeFromCart}
          setCart={setCart} // ✅ IMPORTANT for clear/remove inside modal
          onClose={() => setIsCartOpen(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
}

export default Shop;
