import React, {useReducer}from 'react'
import { Container, Row, Col, Card, CardImg, Button} from 'reactstrap'

const initialState = {
    jumlah : 1,
    hargasatuan: 120000,
    hargatotal:0

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurang' : return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }  
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
                        <Col><Button onClick={()=>dispatch({type: 'tambah'})} color="primary">+</Button></Col>
                        <Col> {count.jumlah} </Col>
                        <Col><Button onClick={()=>dispatch({type: 'kurang'})} color="warning">-</Button></Col>
                    </Row>
                    <Button color="success" size="lg">Total : RP. {count.hargatotal}</Button>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default HooksReducer