import React, { Component } from 'react'; 

class Order extends Component {
        constructor() {
            super() 
            this.state = {
                messages: [], 
            }
        }

        async componentDidMount() {
            let result = await fetch ("http://localhost:8082/api/messages")
            let data = await result.json() 
            data = this.mapItems(data)
            this.setState({
                messages: data
            })
        }

        mapItems = (data) => {
           return data.map(item => {
                return (
                <div> 
                <h1>{item.product}</h1>
                <h2>{item.toppings}</h2>
                <h3>{item.price}</h3>
                </div>)
            })
        }

        render() {
        return (
            <div className="orderContainer">{this.state.messages}</div>
        )
    }
}

export default Order; 