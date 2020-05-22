import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Example = ({ ...props }) => {
    const { currentPage, totalPages } = props.listInfo;
    const onClick = (number) => (e) => {
        e.preventDefault();
        props.setPage(number);
    };

    const getPaginationForPage = () => {
        switch (currentPage) {
            case 1:
            case 2:
                return (
                    <>
                        <PaginationItem disabled={currentPage === 1}>
                            <PaginationLink onClick={onClick(1)} href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled={currentPage === 2}>
                            <PaginationLink onClick={onClick(2)} href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled={currentPage === 3}>
                            <PaginationLink onClick={onClick(3)} href="#">
                                3
                            </PaginationLink>
                        </PaginationItem>
                    </>
                );
                break;
            case totalPages:
            case totalPages - 1:
                return (
                    <>
                        <PaginationItem
                            disabled={currentPage === totalPages - 2}
                        >
                            <PaginationLink
                                onClick={onClick(totalPages - 2)}
                                href="#"
                            >
                                {totalPages - 2}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem
                            disabled={currentPage === totalPages - 1}
                        >
                            <PaginationLink
                                onClick={onClick(totalPages - 1)}
                                href="#"
                            >
                                {totalPages - 1}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled={currentPage === totalPages}>
                            <PaginationLink
                                onClick={onClick(totalPages)}
                                href="#"
                            >
                                {totalPages}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                );
                break;
            default:
                return (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                onClick={onClick(currentPage - 1)}
                                href="#"
                            >
                                {currentPage - 1}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem disabled>
                            <PaginationLink
                                onClick={onClick(currentPage)}
                                href="#"
                            >
                                {currentPage}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                onClick={onClick(currentPage + 1)}
                                href="#"
                            >
                                {currentPage + 1}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                );
                break;
        }
    };

    return (
        <Pagination>
            <PaginationItem disabled={currentPage === 1}>
                <PaginationLink first href="#" onClick={onClick(1)} />
            </PaginationItem>
            <PaginationItem disabled={currentPage === 1}>
                <PaginationLink
                    previous
                    href="#"
                    onClick={onClick(currentPage - 1)}
                />
            </PaginationItem>
            {currentPage > 2 && (
                <PaginationItem disabled>
                    <PaginationLink disabled href="#">
                        ...
                    </PaginationLink>
                </PaginationItem>
            )}
            {getPaginationForPage()}
            {currentPage < totalPages - 1 && (
                <PaginationItem disabled>
                    <PaginationLink disabled href="#">
                        ...
                    </PaginationLink>
                </PaginationItem>
            )}
            <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink
                    next
                    href="#"
                    onClick={onClick(currentPage + 1)}
                />
            </PaginationItem>
            <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink last href="#" onClick={onClick(totalPages)} />
            </PaginationItem>
        </Pagination>
    );
};

export default Example;
