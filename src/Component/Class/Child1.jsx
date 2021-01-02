import React, { Component } from 'react'

 class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    minBeli =1;
    render() {
        return ( 
        <div>
            <h4>Child1 adalah Component</h4>
            <p>
            Stok Product =
            {this.props.stok}
            </p>
            <button onClick={()=>this.props.fungsi(this.minBeli)}>BELI</button>
        </div>
        )
    }
}

export default Child1
