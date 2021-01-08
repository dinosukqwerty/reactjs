import React, { Component } from 'react'
import axios from 'axios';
//import qs from 'querystring';
import { Container, Table ,  NavLink, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

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
                      <tr key={mahasiswa.id_mahasiswa}>
                          <td>{mahasiswa.nim}</td>
                          <td>{mahasiswa.nama}</td>
                          <td>{mahasiswa.jurusan}</td>
                          <td>
                            <Link to = 
                            {
                                {
                                    pathname: '/tampilmahasiswa/ubah',
                                    state: {
                                        id_mahasiswa: mahasiswa.id_mahasiswa,
                                        nim: mahasiswa.nim,
                                        nama: mahasiswa.nama,
                                        jurusan: mahasiswa.jurusan
    
                                    }
    
                                }
                            }> <Button>EDIT</Button>
                            </Link>
                          </td>
                      </tr>
                  )}
                </tbody>

            </Table>
        </Container>
        )
    }
}

export default ListMahasiswa
