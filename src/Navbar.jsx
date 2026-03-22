import React, { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Navbar = ({ searchQuery, setSearchQuery, cartCount, onOpenCart }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate(); // ✅ FIXED (inside component)

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">

                {/* Logo */}
                <div className="brand-container">
                    <img src="/logo.png" alt="Kauveri Flavors" className="brand-logo-img" />
                </div>

                {/* Search */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for pickles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                {/* Actions */}
                <div className="nav-actions">
                    <button className="cart-btn" onClick={onOpenCart}>
                        🛒 Cart ({cartCount})
                    </button>

                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;