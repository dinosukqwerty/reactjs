// //rfc
// import React from 'react';
import React, {useState} from 'react';

const HooksComp = () => {  
  //arrow function, langsung return tanpa class
    // const jumlah = [9]
    const [jumlah, setJumlah] = useState(9);
    
    return (
        <div>
        <h1>Hello jumlah data nya {jumlah}</h1>
        <button onClick={() => setJumlah (jumlah + 1)}>Tambah Jumlah Data</button>
        </div>
    )
}

export default HooksComp
