import moment from 'moment';

export const validateField = (fieldName, value) => {
    switch (fieldName) {
        case 'name':
            if (value.length > 200) {
                return 'Exceeded the limit of 200 characters';
            } else if (!value) {
                return 'Required field';
            }
            break;
        case 'rating':
            if (value < 0 || value > 10) {
                return 'Number from 0 to 10';
            } else if (!value) {
                return 'Required field';
            }
            break;
        default:
            break;
    }
};
