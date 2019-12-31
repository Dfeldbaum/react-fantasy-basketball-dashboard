import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
      player: "Alex",
      players: [],
      isLoaded: false
		}
	}

  componentDidMount() {
    fetch('/leaders.json', {
      method: 'GET',
      // credentials: 'include',
      headers: {
        // 'X-RapidAPI-Key': 'd38f506977msh57044326d575d02p1ee5e1jsn377b548ef3cd',
        // 'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        // 'Access-Control-Allow-Origin': '*',
        // 'api_key': '4ap85t9s5sqbxxna2zdqh7n5',
        // 'Connection': 'Keep-Alive',
        // 'Accept': 'application/json',
        // 'Authorization': 'Basic YWRtaW46YWRtaW4=',
        // 'Content-Type': 'application/json'
      }
    })
      .then(results => results.json())  // results is result from api, convert to json format
      
      .then(data => {  // take json and set json data to state.items
        console.log(data, "data")
        let player = data.categories[26].ranks[0].player.full_name
        console.log(player, 'player')
        
        // let players = data.api.players.map((player) => {
        //   console.log(player)
        //   // return(
        //   //   <div key={player.api}>
        //   //     <img src={player.firstName}/>
        //   //   </div>
        //   // )
        // })    
        
        this.setState({
          isLoaded: true,
          player: player
        })

        console.log(this.state.player, "player from state");
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
          {/* {this.state.pictures} */}
          <div className="player">
            <p className="">Category:</p>
            <p className="">Points Per Game</p>
            <p className="">{this.state.player}</p>
          </div>
          


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
