import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { saveProduct } from '../../actions/product';
import { getProductsById } from '../../reducers/products';
import PropTypes from 'prop-types';

function ProductForm({
    isOpenForm,
    saveProduct,
    toogleForm,
    products,
    currentProductId = null
}) {
    return (
        <Form
            isOpenForm={isOpenForm}
            toogleForm={toogleForm}
            saveProduct={saveProduct}
            currentProductId={currentProductId}
            currentProduct={products[currentProductId]}
        />
    );
}

ProductForm.propTypes = {
    toogleForm: PropTypes.func.isRequired,
    saveProduct: PropTypes.func.isRequired,
    isOpenForm: PropTypes.bool.isRequired,
    products: PropTypes.object,
    currentProductId: PropTypes.number
};

const mapStateToProps = (state) => {
    const productsById = getProductsById(state);

    return {
        products: productsById
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveProduct: (id, product) => dispatch(saveProduct(id, product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
