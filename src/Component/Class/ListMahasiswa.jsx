import React, { Component } from 'react'
import axios from 'axios';
import qs from 'querystring';
import { Container, Table ,  NavLink, Button, Alert} from 'reactstrap';
import { Link } from 'react-router-dom';
//import { Alert } from 'bootstrap';

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

    //fungsi deletemahasiswa
    DeleteMahasiswa = (idmahasis) => {
        const {mahasiswa} = this.state //panggil mahasiswa
        const data = qs.stringify({ //panggil data yang akan dihapus
            id_mahasiswa:idmahasis// berdasarkan id_mahasiswa
        }) 

        axios.delete(api+'/hapus',
            {
                data: data, //definisi data dari const data
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json => {
            if (json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== idmahasis),
                    display: 'block'
                })
                this.props.history.push("/tampilmahasiswa")
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
                <Alert text="success" color="success" style={{display: 'block'}}>
                {this.state.response}
                </Alert>
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
                            <span>  </span>
                            <Button onClick={()=> this.DeleteMahasiswa(mahasiswa.id_mahasiswa)} color="danger">DELETE</Button>
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
