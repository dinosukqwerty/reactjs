import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Container, Button, Table} from 'reactstrap'

const api = 'http://localhost:3001'

function HooksUseEffect() {
    
    const [mahasiswa, setMahasiswa] = useState([])

    // useEffet(()=> {
    //     axios.get(api + '/tampil').then(res => {
    //         this.setState({

    //         })
    //     })
    // })

    useEffect(() => {
        //manggil use effect
        axios.get(api+'/tampil').then(res => {
                setMahasiswa(res.data.values)
            })
        }, [])


    return (
        <Container>
            <h2>Daftar Mahasiswa</h2>
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
                {mahasiswa.map(mahasiswa =>
                    <tr key={mahasiswa.id_mahasiswa}>
                        <td>{mahasiswa.nim}</td>
                        <td>{mahasiswa.nama}</td>
                        <td>{mahasiswa.jurusan}</td>
                        <td>
                            <Button>EDIT</Button>
                            <span>  </span>
                            <Button>DELETE</Button>
                        </td>
                    </tr>
                )}
                </tbody>

            </Table>
        </Container>
    )
}

export default HooksUseEffect
