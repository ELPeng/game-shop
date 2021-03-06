import { Typography, Button, Card, CardActions, CardContent, CardMedia  } from "@material-ui/core"

import useStyles from './styles'

const CartItem = ({ item }) => {
    const classes  = useStyles()
    console.log(item)
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h6">{item.price.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size='small'>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type="button" size='small'>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary">Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartItem
