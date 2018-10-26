import React, { Component } from 'react'; 

class Order extends Component {
        constructor() {
            super() 
            this.state = {
                messages: [], 
                toggleColor: true, 
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
            <div>
                <div className="row">
                    <img id="brain" src="https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2017/10/sushi-brain-recipe/x.jpg"></img>
                    <img id="brain" src="http://www.njfamily.com/7044853(4)(1).jpg"></img>
                    <img id="brain" src="https://holidays.thefuntimesguide.com/files/zombie-food.jpg"></img>
                </div>
            <div className="orderContainer">{this.state.messages}</div>
            </div>
        )
    }
}

export default Order; 