import React from 'react';
import Weather from './components/Weather/Weather.js';
import Form from './components/Form/Form.js';


const API_key = "ec732b5f1e4967477b983df6694da145";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      city: "",
      desc: "",
      temp: "",
      maxT: "",
      minT: "",
      wind: "",
      hum: "",
      icon: "",
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "fa-bolt",
      Drizzle: "fa-cloud-rain",
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-snowflake",
      Atmosphere: "fa-smog",
      Clear: "fa-sun",
      Clouds: "fa-cloud",
    };
  }


  get_weatherIcon(id){
    switch(true){
      case id>=200 && id<=232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
      case id>=300 && id<=321:
        this.setState({icon: this.weatherIcon.Drizzle});
        break;
      case id>=500 && id<=531:
        this.setState({icon: this.weatherIcon.Rain});
        break;
      case id>=600 && id<=622:
        this.setState({icon: this.weatherIcon.Snow});
        break;
      case id>=701 && id<=721:
        this.setState({icon: this.weatherIcon.Atmosphere});
        break;
      case id === 800:
        this.setState({icon: this.weatherIcon.Clear});
        break;
      case id>=800 && id<=804:
        this.setState({icon: this.weatherIcon.Clouds});
        break;
      default:
        this.setState({icon: this.weatherIcon.Rain});
    }
  }

  showWeather = async (event) => {

    event.preventDefault();
    // console.log(event);
    const city = event.target[0].value;
    if(city){
      try{
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`);
        const response = await api_call.json();

        this.get_weatherIcon(response.weather[0].id);
      
        this.setState({
          city: response.name,
          desc: response.weather[0].description,
          temp: response.main.temp,
          maxT: response.main.temp_max,
          minT: response.main.temp_min,
          wind: response.wind.speed,
          hum: response.main.humidity,
          error: false
        })
      }catch {
        alert("Wrong entry!!!");
      }
    }
    else this.setState({error: true})
    
  }


  render(){
    return (
      <div className="center">
        <Form showWeather={this.showWeather} error={this.state.error}/>
        <Weather props={(this.state)} />
      </div>
    );
  }
}

export default App;