import React, { Component } from 'react'
import axios from 'axios';
//import qs from 'querystring';
import { Container, Table ,  NavLink, Button} from 'reactstrap';

const api = "http://localhost:3001" 

class ListMahasiswa extends Component {
    constructor (props){
        super(props)
        this.state = {

            mahasiswa: [],
            response:'',
            display:'none'

        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                mahasiswa: res.data.values //values dari mahasiswa
            })

        })
    }


    render() {
        return (
            <Container>
            <h2>Daftar Mahasiswa</h2>
            <NavLink href="/tampilmahasiswa/tambah"><Button color="blue">Tambah Data Mahasiswa</Button></NavLink>
            <Table className='table-striped'>
          
                <thead>
                    <tr>
                      <th>NIM</th>
                      <th>NAMA</th>
                      <th>JURUSAN</th>
                      <th>AKSI</th>
                    </tr>
                </thead>

                <tbody className=''>
                  {this.state.mahasiswa.map(mahasiswa =>
                      <tr>
                          <td>{mahasiswa.nim}</td>
                          <td>{mahasiswa.nama}</td>
                          <td>{mahasiswa.jurusan}</td>
                          <td>Edit | Hapus</td>
                      </tr>
                  )}
                </tbody>

            </Table>
        </Container>
        )
    }
}

export default ListMahasiswa
