import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail, addToCart } from "../redux/actions/productActions";
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

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selectedProduct);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProductDetail(productId));
    }, [dispatch, productId]);

    return (
        <Box sx={{ padding: "20px", maxWidth: "1100px", margin: "auto" }}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    padding: "20px",
                    alignItems: "center",
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: { xs: "100%", md: 400 },
                        height: { xs: 250, md: 400 },
                        objectFit: "contain",
                        padding: "10px",
                    }}
                    image={product.image}
                    alt={product.title}
                />

                <CardContent
                    sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", marginBottom: "10px" }}
                    >
                        {product.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#555", marginBottom: "15px" }}
                    >
                        {product.description}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#333" }}
                    >
                        ${product.price}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "left" },
                            marginTop: "15px",
                        }}
                    >
                        <IconButton
                            onClick={() =>
                                setQuantity(Math.max(1, quantity - 1))
                            }
                            color="primary"
                        >
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ margin: "0 10px" }}>
                            {quantity}
                        </Typography>
                        <IconButton
                            onClick={() => setQuantity(quantity + 1)}
                            color="primary"
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                            dispatch(addToCart({ ...product, quantity }))
                        }
                        fullWidth
                        sx={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            fontSize: "1rem",
                        }}
                    >
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProductDetail;
