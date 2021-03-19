
// function CardiologistList(){
//     return (
        
//     )
// }

// https://www.google.com/search?q=cardiologist+near+me&rlz=1C1CHBD_enIN920IN920&sxsrf=ALeKk038j_O0iAUpeQhslDNL1-T5F29nCA%3A1616169335454&ei=d8lUYKmQG6iW4-EPo8iRyA8&oq=cardio&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCAAQsQMQyQMQQzIFCAAQkgMyBQgAEJIDMgcIABCxAxBDMgQIABBDMgcIABCxAxBDMgYIABAKEEMyBAgAEEMyBAgAEEMyBAgAEEM6BwgjELADECc6CAgAEJIDELADOgcIABCwAxBDOgcIIxDqAhAnOgQIIxAnOggIABCxAxCDAToKCC4QxwEQowIQQzoKCAAQsQMQgwEQQzoHCAAQyQMQQzoKCC4QxwEQrwEQQ1DrmS5Y568uYPjLLmgCcAJ4AIABuAKIAc0MkgEFMi02LjGYAQCgAQGqAQdnd3Mtd2l6sAEKyAEKwAEB&sclient=gws-wiz


// export default CardiologistList

import React, { Component } from 'react'

export class CardiologistList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude:null,
             longitude:null
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCordinates = this.getCordinates.bind(this);
    }
    getLocation(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCordinates);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
    getCordinates(position){
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        })

    // initMap(){
    //     var location = {lat:latitude, lng:longitude};
    //     var map = new google.maps.Map(document.getElementById("map"),{
    //         zoom:4,
    //         center:location
    //     })
    // }
    }



    render() {
        return (
            <div>
            {/* <h1>Working of Geolocation</h1> */}
            {/* <button onClick={this.getLocation}>Get Coordinates</button> */}
            <h1>{this.state.latitude}</h1>
            <h1>{this.state.longitude}</h1>
            {/* https://www.google.com/maps/embed/v1/place?key=AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys
    &q=Space+Needle,Seattle+WA */}
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys
    &q=cardio,hospital&q=latitude,longitude"></iframe>
            <h2>Top Cardiology hospitals</h2>
            {/* <div></div> */}
            <a href="https://www.apollohospitals.com/">Appolo Hospital</a>
            <a href="https://www.fortisescorts.in/">Fortis Escorts Heart Institute</a>
            <a href="https://www.jaypeehealthcare.com/">Jaypee Hospital</a>
            <a href="https://www.medanta.org/">Medanta, The Medicity</a>


            </div>
            // <div id="map"></div>
        )
    }
}

export default CardiologistList


// API_key=AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys
// AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys