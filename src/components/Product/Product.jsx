import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, CardActions, Typography, IconButton, makeStyles } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './style';
import { ClassRounded } from '@material-ui/icons';

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.image}
                />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardButton}>
                <IconButton>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product

