import React from 'react';
import PropTypes from 'prop-types';

import DetailBox from './DetailBox';

const Container = props => {
    console.log('products....', props.productList);
    console.log('criteria list...', props.criteriaList);
    return (
        <div className="productDisplay">
            {/* show a box for each product */}
            {/* filter as per criteria list */}
            {props.productList
                && props.productList.map(item => {
                // para cada produto
                // passar pela lista de criterios de filtro
                    if (props.criteriaList.length > 0) {
                        const nodes = props.criteriaList.map(criteria => {
                            console.log('ciretir', criteria);
                            console.log('tim', item);
                            console.log('tim', item.tampons);
                            console.log('tim3', item.tampons[0]['size']);
                            const nodes = item.tampons.map(tmp => {
                                console.log('tmp[criteria.type.toString()]', tmp[criteria.type.toString()]);
                                console.log('criteria.value', criteria.value);
                                if (tmp[criteria.type.toString()].includes(criteria.value)) {
                                    console.log('return????');
                                    return (<DetailBox content={item} />);
                                }
                            })
                            return nodes;
                        })
                        return nodes;
                    }
                    if (props.criteriaList.length === 0) {
                            return (<DetailBox content={item} />);
                        }
                    
               })
            }
                
        </div>
    )
}

Container.propTypes = {
    productList: PropTypes.array,
    criteriaList: PropTypes.array,
}

export default Container
