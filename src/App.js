import './App.css';
import { Component } from 'react';
import AppMap from './components/AppMap';
import { GoogleComponent } from 'react-google-location';
import env from "react-dotenv";


const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: "",
    };
    this.state.place = {
      coordinates: "",
    };
  }

  render() {
    const coordinates = this.state.place.coordinates
    const addressInfo = this.state.place.place
    return (
      <div>
         <GoogleComponent
          apiKey={API_KEY}
          language={'pt'}
          country={'country:br'}
          coordinates={true}
          placeholder={'Digite o endereço...'}
          locationBoxStyle={'search-container'}
          // locationListStyle={'list-container'}
          onChange={(e) => { this.setState({ place: e }) }} />

          <AppMap coordinates = {coordinates} addressInfo = {addressInfo}/>
      </div>

    )
  } 
}


export default App;