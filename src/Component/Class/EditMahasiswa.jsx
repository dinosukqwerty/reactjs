import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Container, FormGroup, Input, Label, Row,  Col, Form, Button, Alert } from 'reactstrap'

const api = 'http://localhost:3001'

class EditMahasiswa extends Component {
    constructor (props){
        super(props)
    
        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,        
            nama: this.props.location.state.nama,        
            jurusan: this.props.location.state.jurusan,  
            response: '',
            display: 'none'              
        
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    //fungsi ubah
    editMahasiswa = (id_mahasiswa) => {
        const data = qs.stringify({
            id_mahasiswa : id_mahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan

        })
    axios.put(api+'/ubah', data)
    .then(json => {
        if(json === 200){
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        }else {
            this.setState({
                response: json.data.values,
                display: 'block'
            })
        } 
    })
    }

    render() {
        return (
            <Container>
                <h2>Form Input Data</h2>
                <Form clasname="form">
                    <Col>
                    <Label>NIM</Label>
                    <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder="masukkan nim"/>
                        </Col>
                    </Row>
                    </FormGroup>
                    <Label>Nama</Label>
                    <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="masukkan nama"/>
                        </Col>
                    </Row>
                    </FormGroup>
                    <Label>Jurusan</Label>
                    <FormGroup>
                    <Row>
                        <Col>
                            <Input type="text" name="jurusan" value={this.state.jurusan} onChange={this.handleChange} placeholder="masukkan jurusan"/>
                        </Col>
                    </Row>
                    </FormGroup> 
                    <Label>Tambah</Label>
                    <FormGroup>
                    <Row>
                        <Col>
                            <Button type="button" onClick={()=>this.editMahasiswa(this.state.id_mahasiswa)}>Update</Button>
                        </Col>
                    </Row>
                    </FormGroup>                                       
                    </Col>
                </Form>
                <Alert text="SUKSESSS" color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
            </Container>
        )
    }
}

export default EditMahasiswa