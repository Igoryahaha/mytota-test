import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Button,
    Col
} from 'reactstrap';
import moment from 'moment';

const shortDateFormat = 'MM/DD/YYYY';
const longDateFormat = 'MM/DD/YYYY hh:mm a';

const Product = ({ product, toogleForm, deleteProduct }) => {
    const receiptDate = product.receiptDate
        ? moment(product.receiptDate).format(shortDateFormat)
        : '-';
    const expirationDate = product.expirationDate
        ? moment(product.expirationDate).format(shortDateFormat)
        : '-';
    const createdAt = product.createdAt
        ? moment(product.createdAt).format(longDateFormat)
        : '-';

    return (
        <Card>
            <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardText tag="div">
                    <ListGroup>
                        <ListGroupItem>Brand: {product.brand}</ListGroupItem>
                        <ListGroupItem>Rating: {product.rating}</ListGroupItem>
                        <ListGroupItem>
                            Featured: {product.featured ? 'Yes' : 'No'}
                        </ListGroupItem>
                        <ListGroupItem>
                            Items In Stock: {product.itemsInStock}
                        </ListGroupItem>
                        <ListGroupItem>
                            Receipt Date: {receiptDate}
                        </ListGroupItem>
                        <ListGroupItem>Created At: {createdAt}</ListGroupItem>
                    </ListGroup>
                </CardText>
                <Col md={{ size: 10, offset: 2 }}>
                    <Button color="primary" onClick={toogleForm(product.id)}>
                        Edit
                    </Button>
                    <Button color="danger" onClick={deleteProduct(product.id)}>
                        Delete
                    </Button>
                </Col>
            </CardBody>
        </Card>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
