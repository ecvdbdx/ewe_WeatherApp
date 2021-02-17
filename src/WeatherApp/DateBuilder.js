import React, { Component } from 'react'

class DateBuilder extends Component {

    date = (d) => {
        let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
        let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return(`${day} ${date} ${month} ${year}`);

    }
    
    render(){
        return(
            <div className="date">{this.date(new Date())}</div>
        );
    }
}

export default DateBuilder;