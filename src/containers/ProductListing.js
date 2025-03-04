import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
    Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Group products by category
    const categorizedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
            {Object.keys(categorizedProducts).map((category) => (
                <Box key={category} sx={{ marginBottom: "40px" }}>
                    {/* Category Title */}
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", marginBottom: "10px" }}
                    >
                        {category.toUpperCase()}
                    </Typography>
                    <Divider sx={{ marginBottom: "20px" }} />

                    {/* Product Grid */}
                    <Grid container spacing={3}>
                        {categorizedProducts[category].map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            height: { xs: 180, md: 250 },
                                            objectFit: "contain",
                                            padding: "10px",
                                        }}
                                        image={product.image}
                                        alt={product.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: "1rem",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {product.title.length > 40
                                                ? product.title.substring(
                                                      0,
                                                      40
                                                  ) + "..."
                                                : product.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "#2C3E50",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            ${product.price}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component={Link}
                                            to={`/product/${product.id}`}
                                            fullWidth
                                            sx={{ marginTop: "10px" }}
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default ProductListing;
