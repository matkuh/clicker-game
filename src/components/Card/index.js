import React from 'react'
import './style.css'

function Card(props) {
    return (

            <div className="col s3" onClick={()=> props.cardClick(props.id)}>
                <div className="card-panel center">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                </div>
            </div>

    )
}

export default Card
