// stateless
import React from 'react'
import PropTypes from 'prop-types'
import './_DetailBox.module.css';

const DetailBox = props => {
    console.log(props.content);
    return (
        <div className="detailBox">
            <img height="100" width="100" src={props.content.productImage} />
            <div>
                <p>Price: {props.content.price.toString()}</p>
                <p>Packages:</p>
                {console.log('tampons', props.content.tampons)}
                {console.log(Array.isArray(props.content.tampons))} 
                        <div>
                            {props.content.tampons.map(item => {
                                console.log('item ???', item);
                                return (
                                <div className="optionBox">
                                    <p>size: {item.size.toString()} </p>
                                    <p>coating: {item.coating.toString()} </p>
                                    <p>amount: {item.amount.toString()} </p>
                                </div>
                                )
                            })}
                        </div>
            </div>
        </div>
    )
}

DetailBox.propTypes = {
    content: PropTypes.shape({}),
}

export default DetailBox;
