import React from 'react'

 function TampilComp(props) {  //menerima data props HooksComp
    return (
        <div>
            <h2>{props.nama}</h2>
            <h3>{props.jumlah}</h3>
            <button onClick={() => props.fungsi(props.jumlah+1)} disabled={props.disabled}>Tambah</button>
        </div>
    )
}

export default TampilComp