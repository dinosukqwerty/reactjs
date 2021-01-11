import React from 'react'
import { Container, Row } from 'reactstrap'
import RowProduct from './RowProduct'

function ProductComp() {
    return (
        <div>
            <Container>
                <h2>Product</h2>
                <Row>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                </Row>
            </Container>
        </div>
    )
}

export default ProductComp