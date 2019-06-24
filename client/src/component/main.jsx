import React, { Component } from 'react';
import './main.css';
import items from './item.json'


class Main extends Component {
    render() {

        return (
            < main className="deals" >

                {
                    items.map((item, index) => <article className="sale-item" key={index}>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.alt} />
                        {item.lists.map((list, index) => <ul key={index}>
                            <li >{list}</li>
                        </ul>)}

                        <div className="spacer" ></div>
                        <button>BUY NOW</button>

                    </article>)
                }
            </main >
        )
    }

}

export default Main
