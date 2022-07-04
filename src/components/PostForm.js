import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';



function PostForm(props) {
  const url = "http://localhost:3000/api/v1/clinics"
  const address = props.addressFound
  const lat = props.onChangeCoordinates.coordinates.lat
  const lng =  props.onChangeCoordinates.coordinates.lng
  const [data, setData] = useState({
    nome: "",
    cnpj: "",
    address: "",
    latitude: "",
    longitude: ""
  })

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      nome: data.nome,
      cnpj: data.cnpj,
      data: {
        address: address,
        latitude: lat,
        longitude: lng
      }
    }).then (res => {
        console.log(res.data)
        window.location.reload()
        }).catch(error => {
          console.log(error.response.data)
      }
      );
  }

  function handle(e) {
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  return (
    <div className="post-form-container">
      <div className="container">
        <h1 className= "color-title">Cadastro de Clínicas</h1>
        <form className="post-form-items" onSubmit={(e)=> submit(e)}>
          <div className="form-row">
            <div className="input-data">
              <input onChange={(e)=>handle(e)} id="nome" value={data.nome} placeholder="Nome da clínica" type="text" required></input>
              <div className="underline"></div>
            </div>
            <div className="input-data">
              <input onChange={(e)=>handle(e)} id="cnpj" value={data.cnpj} placeholder="CNPJ" type="number" required></input>
              <div className="underline"></div>
            </div>
            <div className="input-data">
              <input onChange={(e)=>handle(e)} id="address" value={data.address = address} placeholder="Endereço da clínica" type="text" required></input>
              <div className="underline"></div>
            </div>
            <div className="container-coordinates">
              <div className="input-data">
                <input onChange={(e)=>handle(e)} id="latitude" value={data.latitude = lat} placeholder="Lat" type="text" required></input>
                <div className="underline"></div>
              </div>
              <div className="input-data">
                <input onChange={(e)=>handle(e)} id="longitude" value={data.longitude = lng} placeholder="Lng" type="text" required></input>
                <div className="underline"></div>
              </div>
            </div>
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit"></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostForm
