import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import { CartContext } from '../../CartContext';
import CardComp from './CardComp';
import {useContext} from 'react'
function About() {


    
    return (
        <div>
            <Jumbotron>
            <h1 className="display-3">About us </h1>
            <p className="lead">Hallo</p>
            <hr className="my-2" />
            <p>INI Halaman About pake Router</p>
            <p className="lead">
            <Button color="primary">Learn More</Button>
            </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" Judul ="Belajar React Bersama Coach Youtube dan Google" Tanggal = "30 Desember 2020"/></Col>
           
                    <Col><CardComp id="2" Judul ="Belajar Masak di TV RCTI dalam program acara The Master" Tanggal = "30 Desember 2020"/></Col>
        
                    <Col><CardComp id="3" Judul ="Belajar Berenang Bersama Coach Michel Arteta" Tanggal = "30 Desember 2020"/></Col>
                </Row>
            </Container>            
        </div>
    )
}

export default About