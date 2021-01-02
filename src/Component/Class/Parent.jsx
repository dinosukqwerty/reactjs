import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stok : 10
            
        }
    }
    
beliProduk = (jumlah) => {
    this.setState({
        stok: this.state.stok - jumlah
    })
}

    render() {
        return (
            <div>
                <Child1 
                stok={this.state.stok}
                fungsi={this.beliProduk.bind(this)}/>
                
                <Child2 
                stok={this.state.stok}/>
            </div>
        )
    }
}

export default Parent

