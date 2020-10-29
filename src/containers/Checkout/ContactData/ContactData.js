import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';


class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (even) => {
        even.preventDefault();
        console.log('ing' + this.props.ingredients)
        this.setState({loading: true})


        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Msx Schwarzmuller',
                address: {
                    street: 'Test street 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'

        }
        axios.post('/order.json', order)
            .then(response => {
                this.setState({loading: false})

            })
            .catch(error => {
                this.setState({loading: false})

            })
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Your postal address"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )

    }
}

export default ContactData;