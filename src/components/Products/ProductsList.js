import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Paginator from '../Paginator/Paginator';
import { Container, Row, Col } from 'reactstrap';
import { chunk } from 'lodash';

const ProductList = ({ products, toogleForm, deleteProduct }) => {
    const [currentPage, setPage] = useState(1);
    const productsGroups = chunk(products, 3);
    const getListInfo = () => ({
        totalPages: productsGroups.length,
        currentPage
    });

    const getPage = (pages, page) =>
        pages.length > 0 &&
        pages[page].map((product) => (
            <Col sm="4" key={product.id}>
                <Product
                    product={product}
                    toogleForm={toogleForm}
                    deleteProduct={deleteProduct}
                />
            </Col>
        ));

    return (
        <Container>
            <Row className="mb-5">
                {useMemo(() => getPage(productsGroups, currentPage - 1), [
                    productsGroups,
                    currentPage - 1
                ])}
            </Row>
            <Paginator listInfo={getListInfo()} setPage={setPage} />
        </Container>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;
