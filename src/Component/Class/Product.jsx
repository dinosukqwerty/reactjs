import React, {Component } from 'react'
import './CSS/Product.css'
class Product extends Component {
 constructor(props) {
     super(props)

     this.state = {
        stok: this.props.stok,
        sub: "Beli",
        status: "Tersedia",
        disable : false
     }
 }

 ButtonBeli = () => {
     this.setState({
         stok: this.state.stok -1
     })

     if (this.state.stok ===1) {
         this.setState ({
             status : "habis",
             disable: true
         })
     }
 }

    render() {
        return (
            <div className="box-stok">
                <h2>{this.props.nama}</h2>
                <img src="https://akcdn.detik.net.id/visual/2020/12/03/britain-soccer-champions-league-5_169.jpeg?w=650" alt=""/>
                <p><b>RP. {this.props.harga}</b></p>
                <p>{this.state.stok}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disable}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default Product