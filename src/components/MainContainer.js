// controls all the actions
// knows all components displayed
// renders a page with boxes showing all available product options
// contains a filter which shows and hides boxes as selected

// style with css modules - it is faster
// add test ids for testing
// use jest and react test library

import React from 'react';
import ProductDisplayContainer from './ProductsDisplay/ProductDisplayContainer';
import FilterContainer from './Filter/FilterContainer';
import apiClient from '../client/apiClient';
import transformApiToJson from '../transformers/apiToJson';

class Container extends React.Component {
    state = {
        isLoading: false,
        filtersSelected: [],
        filterCriteria: [],
    };

    componentWillMount() {
        this.loadProductsList();
    }

    handleFilter = (filterCriteria) => {
        console.log('filterCriteria', filterCriteria);
        
        this.setState(prevState => ({
            filterCriteria: [...prevState.filterCriteria, filterCriteria],
        }))
    }

    loadProductsList = () => {
        const list = apiClient.get()
            .then(response => {
                console.log(response.data);

                const transformedList = response.data.map((item) => {
                    return transformApiToJson(item);
                })

                console.log('transformed list', transformedList);

                this.setState({
                    list: transformedList,
                });
            })
            .catch((err) => {
                throw new Error(err.message);
            })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.isLoading &&
                    <React.Fragment>
                        <FilterContainer handleFilter={this.handleFilter} />
                        <ProductDisplayContainer
                            criteriaList={this.state.filterCriteria}
                            productList={this.state.list}
                        />
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }

}

export default Container;
