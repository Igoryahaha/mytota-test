import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import ProductForm from '../ProductForm/ProductForm';
import { fetchProducts } from '../../actions/products';
import { deleteProduct } from '../../actions/product';

class ProductsContainer extends Component {
    constructor() {
        super();
        this.state = {
            isOpenForm: false,
            currentProductId: null
        };
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(fetchProducts());
    }

    toogleForm = (id = null) => () =>
        this.setState({
            isOpenForm: !this.state.isOpenForm,
            currentProductId: id
        });

    deleteProduct = (id) => () => this.props.dispatch(deleteProduct(id));

    render() {
        const { products } = this.props;
        const { isOpenForm, currentProductId } = this.state;

        return (
            <Fragment>
                <Header name="Products" />
                <Button onClick={this.toogleForm()}>Add product</Button>
                <ProductsList
                    products={products}
                    toogleForm={this.toogleForm}
                    deleteProduct={this.deleteProduct}
                />
                <ProductForm
                    isOpenForm={isOpenForm}
                    toogleForm={this.toogleForm()}
                    currentProductId={currentProductId}
                />
            </Fragment>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const products = state.products;

    return {
        products
    };
};

export default connect(mapStateToProps)(ProductsContainer);
