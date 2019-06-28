import React from 'react'
import Buttons from './Buttons';

const Cards =props=> {
        return (
            <div > 
                <div key={props.photo.id} >
                                <div className="card" style={{border:'2px solid white'}}>
                                    <img src={props.photo.img} alt="Avatar" style={{ "width": "100%",}} />
                                    <div class="container">
                                        <h4><b> {props.photo.productName !== null ? props.photo.productName
                                            : ''}</b></h4>
                                              <p>Price:{props.photo.price}</p> 

                                    </div>
                                    <Buttons
                                    buttonName='Add Cart'/>
                                </div>
                            </div>
            </div>
        )
    }


export default Cards
