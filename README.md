# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Lessons Learned
### Passing State pulled from API as Props 
- See Cart component
- I was unable to use the ecommerce API to define the isEmpty variable using 'cart.line_items.length' 
- This occurs because the cart content is not immediately loaded from the e-commerce api when the page opens, and so the line_items property on cart does not exist.
- To resolve the issue, I added a conditional if statement to return immediately if the cart object has not loaded

### Adding Link to a clickable component
- See Navbar component <IconButton />
- In this case, we can add property component={Link} to="/cart" to the IconButton component instead of wrapping the component in <Link> to accomplish the same task

### useLocation hook for react-router-dom
- You can conditionally display components based on pathname using this hook and React feature:
    location.pathname === "/" && <ComponentName />