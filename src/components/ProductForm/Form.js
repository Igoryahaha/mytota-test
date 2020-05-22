import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form as FormComponent,
    FormGroup,
    FormFeedback,
    CustomInput,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';
import { isEmpty } from 'lodash';
import { validateField } from '../../utils/validator';
import PropTypes from 'prop-types';

function Form({
    isOpenForm,
    toogleForm,
    saveProduct,
    currentProduct = null,
    currentProductId = null
}) {
    const [data, setData] = useState(currentProduct ? currentProduct : {});
    const [errorMessages, setErrorMessages] = useState({});

    useEffect(() => {
        setData({ ...currentProduct });
    }, [currentProduct]);

    useEffect(() => {
        const errorMessages = {};
        Object.keys(data).forEach((fieldName) => {
            const message = validateField(fieldName, data[fieldName]);
            if (message) {
                errorMessages[fieldName] = message;
            }
        });
        if (!(data.name && data.rating)) {
            errorMessages.main = 'Required fields is empty';
        }
        setErrorMessages(errorMessages);
    }, [data]);

    const save = (event) => {
        event.preventDefault();
        saveProduct(currentProductId, data);
        toogleForm();
        setData({});
    };

    const onChange = (event) =>
        setData({ ...data, [event.target.name]: event.target.value });

    return (
        <Modal isOpen={isOpenForm} toggle={toogleForm}>
            <FormComponent>
                <ModalHeader toggle={toogleForm}>
                    {currentProductId ? 'Edit' : 'Add'}
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label className="required">Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            invalid={!!errorMessages.name}
                            required
                            defaultValue={data.name}
                            onChange={onChange}
                        />
                        <FormFeedback>{errorMessages.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Brand</Label>
                        <Input
                            type="text"
                            placeholder="Enter brand"
                            name="brand"
                            required
                            defaultValue={data.brand}
                            onChange={onChange}
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="required">Enter Rating</Label>
                                <Input
                                    type="number"
                                    placeholder="Enter rating"
                                    name="rating"
                                    invalid={!!errorMessages.rating}
                                    required
                                    defaultValue={data.rating}
                                    onChange={onChange}
                                />
                                <FormFeedback>
                                    {errorMessages.rating}
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Enter Items In Stock</Label>
                                <Input
                                    type="number"
                                    placeholder="Enter items in stock"
                                    name="itemsInStock"
                                    required
                                    defaultValue={data.itemsInStock}
                                    onChange={onChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Enter Receipt Date</Label>
                                <Input
                                    type="date"
                                    name="receiptDate"
                                    defaultValue={data.receiptDate}
                                    placeholder="Enter receipt date"
                                    onChange={onChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        disabled={!isEmpty(errorMessages)}
                        onClick={save}
                        type="submit"
                    >
                        Save
                    </Button>
                    <Button color="danger" onClick={toogleForm}>
                        Close
                    </Button>
                </ModalFooter>
            </FormComponent>
        </Modal>
    );
}

Form.propTypes = {
    toogleForm: PropTypes.func.isRequired,
    saveProduct: PropTypes.func.isRequired,
    isOpenForm: PropTypes.bool.isRequired,
    currentProduct: PropTypes.object,
    currentProductId: PropTypes.number
};

export default Form;
