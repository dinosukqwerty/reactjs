import React, { useState } from "react";
import {Col, Row, FormGroup, Label} from 'reactstrap'

export default function TambahComp() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {nama, hobi, julukan, posisi} = formData
        try {

            //    //api google spreadsheet pakai nocodeapi 
            const response = await fetch(
                "https://v1.nocodeapi.com/reactapi/google_sheets/cCnkarEpcUOJoIMx?tabId=Sheet1",
                {
                    method: "post",
                    body: JSON.stringify([[nama, hobi, julukan, posisi]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    return (
        <div className="App">
                <Label>NAMA</Label>
                <form 
                id="TambahComp"
                 name="TambahComp" 
                 onSubmit={sendData}>
                            <Label>Nama Pemain</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                    <input type="text" name="nama" onChange={handleInput} placeholder="Masukkan Nama Pemain"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Hobi Pemain</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                    <input type="text" name="hobi" onChange={handleInput} placeholder="Masukkan Hobi Pemain"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Julukan</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                    <input type="text" name="julukan" onChange={handleInput} placeholder="Masukkan Julukan Pemain"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Posisi</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                    <input type="text" name="posisi" onChange={handleInput} placeholder="Masukkan Julukan Pemain"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Row>
                                <Col>
                                <input name="submit" type="submit" value="Send" />{message}
                                </Col>
                            </Row>
                </form>
        </div>
    
    );
}