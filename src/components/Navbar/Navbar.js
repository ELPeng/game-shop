import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core"
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'


import logo from '../../assets/shop.svg'
import useStyles from './styles'

const Navbar = ({ numItems }) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Gameshop.js' height='35px' className={classes.image} />
                        GameShop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        {location.pathname === "/" && 
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color='inherit'>
                                <Badge badgeContent={numItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        }

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
