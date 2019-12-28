import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
      pictures: [],
      isLoaded: false
		}
	}

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=500', {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Connection': 'Keep-Alive',
        'Accept': 'application/json',
        // 'Authorization': 'Basic YWRtaW46YWRtaW4=',
        'Content-Type': 'application/json'
      }
    })
      .then(results => results.json())  // results is result from api, convert to json format
      
      .then(data => {  // take json and set json data to state.items
        let pictures = data.results.map((pic) => {
          return(
            <div key={pic.results}>
              <img src={pic.picture.medium}/>
            </div>
          )
        })    
        
        this.setState({
          isLoaded: true,
          pictures: pictures
          // items: json,
        })

        console.log("state", this.state.pictures);
        
      })
    }

  render() {

    let { isLoaded } = this.state  // access items from state in render()
    // let { isLoaded, items } = this.state  // access items from state in render()
    // console.log(items, 'items')

    if (!isLoaded) {
      return <div className="dashboard">Loading...</div>;
    }

    else {
      return (
        <div className="dashboard">
          {this.state.pictures}


          {/* <ul>
            {items.map(item => ( // loop each obj from api result 
                <li key={item.results}>
                  <div className="dashboard__text-container">
                    <p><span>Title:</span> {item.name}</p>
                  </div>
                </li> 
            ))} 
          </ul>  */}

        </div>
      )
    }
  }
}

export default Dashboard;
