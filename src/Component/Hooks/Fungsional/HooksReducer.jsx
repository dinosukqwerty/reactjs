import React, {useReducer}from 'react'
import { Container, Row, Col, Card, CardImg, Button} from 'reactstrap'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'tambah': return state + 1
        case 'kurang' : return state - 1    
        default:
            return state
    }
}

function HooksReducer() {

    const [count,dispatch] = useReducer(reducer, initialState)

    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                <Card>
                    <CardImg top width="100%" src="https://placeimg.com/640/480/nature" alt="Card image cap" />
                </Card>
                </Col>
                <Col xs="6"> 
                    <h2>Foto Pemandangan</h2>
                    <h2>Harga : 120.000</h2>
                    <h3>Jumlah barang yang ada pesan</h3>
                    <Row>
                        <Col><Button onClick={()=>dispatch('tambah')} color="primary">+</Button></Col>
                        <Col> {count} </Col>
                        <Col><Button onClick={()=>dispatch('kurang')} color="warning">-</Button></Col>
                    </Row>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default HooksReducer