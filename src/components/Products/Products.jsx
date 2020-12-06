import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import Product from './Product/Product.jsx';

const useStyles = makeStyles(() => ({
    container: {
      margin: '20px auto',
    }
  }));

const products = [
    { id: 1, name: 'Lipstick', description: 'Cherry red lipsticks', price: '$30', image:'https://cdn.pixabay.com/photo/2017/09/06/20/17/lipstick-2722847_1280.jpg'},
    { id: 2, name: 'Lip gloss', description: 'Glossy like a star', price: '$20', image:'https://cdn.pixabay.com/photo/2016/04/02/14/37/make-up-1302918_1280.jpg'},
    { id: 3, name: 'Lip gloss', description: 'Glossy like a star', price: '$30', image:'https://cdn.pixabay.com/photo/2016/04/02/14/37/make-up-1302918_1280.jpg'},
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.container}>
            <Grid container justify="center" spacing={4}>
                { products.map(product => 
                    <Grid key={product.id} item xs={12} sm ={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                )}
            </Grid>
        </main>
    )
}

export default Products
