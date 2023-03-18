import React from 'react'
import { Container, FormControl, Navbar, Dropdown, Badge, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { CartState } from '../context/Context'

import { AiFillDelete } from 'react-icons/ai'


const Header = () => {
    const { state, dispatch } = CartState();

    return (
        <Navbar bg='dark' variant='dark' style={{ "height": "10vh" }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text style={{ width: "60%" }}>
                    <FormControl
                        placeholder="Search your products">
                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{state.cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 300 }}>
                            {state.cart.length == 0 ? "Cart is Empty" : (
                                <div className='CartList'>
                                    {state.cart.map((c) => (
                                        <div className='CartItem' key={c.id}>
                                            <div>{c.name}</div>
                                            <div><span style={{ fontWeight: "bold" }}>$ {c.price.split(".")[0]}</span>
                                                <AiFillDelete
                                                    fontSize="15px"
                                                    style={{ cursor: "pointer", marginLeft: "10px" }}
                                                    onClick={() => { dispatch({ type: "REMOVE_FROM_CART", payload: c }) }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <Link to="/cart" style={{
                                        position: "sticky",
                                        bottom: "0px"

                                    }}>
                                        <Button style={{ width: "100%" }}>Go to Cart</Button>
                                    </Link>
                                </div>
                            )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

            </Container>
        </Navbar>);
}

export default Header
