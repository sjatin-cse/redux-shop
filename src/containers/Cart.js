import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    decreaseCartQuantity,
    addToCart,
} from "../redux/actions/productActions";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Grid,
    Box,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate Total Price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <Box sx={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
                Your Cart
            </Typography>

            <Grid container spacing={3}>
                {cartItems.map((item) => (
                    <Grid item xs={12} key={item.id}>
                        <Card
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    objectFit: "contain",
                                    marginRight: "20px",
                                }}
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    ${item.price} x {item.quantity} = $
                                    {item.price * item.quantity}
                                </Typography>
                            </CardContent>

                            {/* Quantity Controls */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <IconButton
                                    onClick={() =>
                                        dispatch(decreaseCartQuantity(item.id))
                                    }
                                    color="primary"
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    sx={{ margin: "0 10px" }}
                                >
                                    {item.quantity}
                                </Typography>
                                <IconButton
                                    onClick={() =>
                                        dispatch(
                                            addToCart({ ...item, quantity: 1 })
                                        )
                                    }
                                    color="primary"
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>

                            {/* Remove Entire Product */}
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                }
                                sx={{ marginLeft: "10px" }}
                            >
                                Remove
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Cart Summary */}
            <Box sx={{ marginTop: "20px", textAlign: "right" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Total: ${totalPrice.toFixed(2)}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: "10px",
                        padding: "10px 20px",
                        fontSize: "1rem",
                    }}
                >
                    Checkout
                </Button>
            </Box>
        </Box>
    );
};

export default Cart;
