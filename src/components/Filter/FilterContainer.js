import React from 'react';
import PropTypes from 'prop-types';
import './_container.module.css';

const Container = (props) => {
    return (
        <div className="filterContainer">
            <form>
                        <input
                            type="checkbox"
                            name="bySizeSmall"
                            value="size.small"
                            onChange={() => props.handleFilter({ type: 'size', value:'small' })}
                        />
                        <label>
                            Small
                        </label>
                        <input
                            type="checkbox"
                            name="bySizeRegular"
                            value="size.regular"
                            onChange={() => props.handleFilter({ type: 'size', value: 'regular' })}
                        />
                        <label>
                            Regular
                        </label>
            </form>
        </div>
    )
}

Container.propTypes = {
    handleFilter: PropTypes.func,
}

export default Container;
