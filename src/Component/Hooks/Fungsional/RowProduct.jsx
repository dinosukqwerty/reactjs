import React from 'react'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import {useContext} from 'react'
import { CartContext } from '../../../CartContext'

function RowProduct() {

    const {value, setValue} = useContext(CartContext)

    return (
        <Col>
        <Card>
        <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Calulator</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rp. 2000</CardSubtitle>
          <CardText>bisa berhitung</CardText>
          <Button onClick={()=>setValue(value+1)}>Tambah Ke Keranjang</Button>
        </CardBody>
        </Card>
        </Col>
    )
}

export default RowProduct