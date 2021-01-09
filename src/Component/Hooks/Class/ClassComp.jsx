import React, { Component } from 'react'

class ClassComp extends Component {
    constructor (props){
        super(props)

        this.state={
            jumlahdata: 9
        }
    }

    tambahjumlahdata = () => {
        this.setState({
            jumlahdata: this.state.jumlahdata + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello jumlah data nya{this.state.jumlahdata}</h1>
                <button onClick={this.tambahjumlahdata}>Tambah Jumlah Data</button>
            </div>
        )
    }
}

export default ClassComp