import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';

import './index.css'

class UserGenerator extends Component {
    state = {user_data: ""}

    getUserData = () => {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                this.setState({user_data: data})
            });
    }

    render() {
        return (
            <div>
                <ProfileCard data={this.state.user_data} />
                <button id="btnGenerate" onClick={this.getUserData}>Find a Hiker</button>
            </div>
        )
    }
  }

class ProfileCard extends Component {

    render() {
        var result = this.props.data.results
        if(result){
            result = result[0]
            return (
                <div>
                    <div class="card">
                        <div class="card-header">
                            <h2>{result.name.title + " " + result.name.first + " " + result.name.last}</h2>
                        </div>
                        <div class="card-body">
                            <div class="profile-image">
                                <img src={result.picture.large} />
                            </div>
                            <p><strong>Gender</strong>: {result.gender}</p>
                            <p><strong>Address</strong>: {result.location.street.number + " " + result.location.street.name + "\n" +
                            result.location.city + ", " + result.location.state + ", " + result.location.country}</p>
                            <p><strong>Mail</strong>: <a href="mailto:{result.email}">{result.email}</a></p>
                        </div>
                    </div>
                </div>
          )
        } else {
            return (
                <div class="card">
                    <div class="card-header">
                        <div class="center-text">
                            <h3>
                            Find a hiker to guide you on your next mountain escapade!
                            Click the button below to find hikers available as guides.
                            </h3>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


const App = () => {
    function increment(){
        this.innerHTML
    }

    return (
        <div>
            <h1 class="page-title">~ Mountain Adventures ~</h1>
            <UserGenerator />
        </div>
        );

}

ReactDOM.render(<App />, document.getElementById('app'));