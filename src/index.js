import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );
//     return <div>Hi there</div>
// }
class App extends React.Component {
    state = {
        lat: null,
        errorMessage: '',
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat:position.coords.latitude }),
            err => this.setState({errorMessage: "Sorry 😔 You denided to access your location !"})
        );
    }
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div className="block-location"> <div>{this.state.errorMessage}</div> </div>
        }
        if(!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat} />
        }
 
        return <Spinner message="Please accept location request..." />
    }


    render() {
      return (
          <div>
              {this.renderContent()}
          </div>
      )

    }
}

    ReactDom.render(
    <App />,
    document.querySelector('#root')
)