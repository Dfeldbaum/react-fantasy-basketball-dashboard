import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
      items: [],
      isLoaded: false,
		}
	}

  componentDidMount() {
    fetch('http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&week=1&format=json', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Connection': 'Keep-Alive',
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW4=',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())  // res is result from api, convert to json format
      .then(json => {  // take json and set json data to state.items
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
    }

  render() {
    let { isLoaded, items } = this.state  // access items from state in render()

    if (!isLoaded) {
      return <div className="dashboard">Loading...</div>;
    }

    else {
      return (
        <div className="dashboard">
          <ul>
            {items.map(item => ( // loop each obj from api result 
                <li key={item.height}>
                  <div className="dashboard__text-container">
                    <p><span>Title:</span> {item.height}</p>
                  </div>
                </li> 
            ))} 
          </ul> 
        </div>
      )
    }
  }
}

export default Dashboard;
