import React, { Component } from 'react'
import axios from 'axios'
//import qs from 'querystring'
// import {Table, Button, Container, NavLink, Alert} from 'reactstrap'
import {Table, NavLink, Button, Container} from 'reactstrap'

//const api = "https://sheet.best/api/sheets/d592b003-ff1d-4260-aa8f-41115ea47047"

class ListComp extends Component {
    constructor (props){
        super(props)

        this.state = {
            pemain : [],
            display: 'none'

        }
    }

    // componentDidMount(){
    //     axios.get(api+'/tampil').then(res=>{
    //         this.setState({
    //             pemain: res()
    //        )
    //     })
    // }

    componentDidMount(){
        axios.get(`https://sheet.best/api/sheets/d592b003-ff1d-4260-aa8f-41115ea47047`)
            .then(res=>{
                const pemain =  res.data;
                this.setState({pemain})
            })
    }
    
    
    render() {
        return (
          <Container>
              <h2>Daftar Pemain dari API</h2>
              <NavLink href="/pemain/tambah"><Button color="blue">Tambah data</Button></NavLink>
              <Table className='table-striped'>
            
                  <thead>
                      <tr>
                        <th>Nama</th>
                        <th>Hobi</th>
                        <th>Julukan</th>
                        <th>Posisi</th>
                        <th>Action</th>
                      </tr>
                  </thead>

                  <tbody className=''>
                    {this.state.pemain.map(pemain =>
                        <tr>
                            <td>{pemain.nama}</td>
                            <td>{pemain.hobi}</td>
                            <td>{pemain.julukan}</td>
                            <td>{pemain.posisi}</td>
                            <td>Edit | Hapus</td>
                        </tr>
                    )}
                  </tbody>

              </Table>
          </Container>
        )
    }
}

export default ListComp