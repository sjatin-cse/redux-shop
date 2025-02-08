import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <AppBar position="sticky" color="primary" sx={{ padding: "10px 0" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h5"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    ReduxShop
                </Typography>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    {/* <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton> */}
                    <IconButton component={Link} to="/cart" color="inherit">
                        <Badge
                            badgeContent={cartItems.length}
                            color="secondary"
                        >
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
