// //rfc
// import React from 'react';
import React, {useState} from 'react';
import TampilComp from './TampilComp';

const HooksComp = () => {  
  //arrow function, langsung return tanpa class
    // const jumlah = [9]
    const [jumlah, setJumlah] = useState(9);

    //login
    const [dataLogin, setDataLogin] = useState ({nama:'saya', token:'123qwe', isLogin: false })
    
    //cek kondisi, sudah ligin atau belum 

    let tampil;

    if (dataLogin.isLogin){
      tampil = <TampilComp
        nama = {dataLogin.nama}
        fungsi = {setJumlah.bind(this)}
        jumlah = {jumlah} />
    } else {
      tampil = <TampilComp
        nama = "maaf anda belum login"
        disabled = {true}
      />
    }

    return (
        <div>
          {tampil}
        </div>
    )
}

export default HooksComp
