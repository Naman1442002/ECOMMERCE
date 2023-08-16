import React, { useState } from "react";
import Filter from "../SubComponent/ProductCatalog/FilterProduct";
import CardGrid from "../CardGrid";
import { useSelector } from 'react-redux';
import Header from "../SubComponent/Home/Header";


const ProductCatelog = () => {
    const productsData = useSelector(state => state.Product.items);
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = [...new Set(productsData.map((product) => product.category))];

    const filteredProducts = selectedCategory
        ? productsData.filter((product) => product.category === selectedCategory)
        : productsData;

    return (
        <>
            <Header/>
            <div className="container " style={{marginTop:'5%'}}>
                <h1 className="text-center mb-4">Product Catalog</h1>
                <div className="row">
                    <div className="col-md-3">
                        <Filter categories={categories} onSelectCategory={setSelectedCategory} />
                    </div>
                    <div className="col-md-9">
                        <CardGrid products={filteredProducts}  cart_btn={false} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCatelog;
