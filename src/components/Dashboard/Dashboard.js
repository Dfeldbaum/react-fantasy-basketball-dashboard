import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
      pointsLabel: "",
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
        const points = data.categories[26].ranks[0].player.full_name
        const fieldGoal = data.categories[26].ranks[0].player.full_name
        const freeThrow = data.categories[26].ranks[0].player.full_name
        const threePointMade = data.categories[26].ranks[0].player.full_name
        const rebounds = data.categories[26].ranks[0].player.full_name
        const assists = data.categories[26].ranks[0].player.full_name
        const steals = data.categories[26].ranks[0].player.full_name
        const blocks = data.categories[26].ranks[0].player.full_name
        const pointsLabel = data.categories[26].ranks[0].player.full_name
        const fieldGoalLabel = data.categories[26].ranks[0].player.full_name
        const freeThrowLabel = data.categories[26].ranks[0].player.full_name
        const threePointMadeLabel = data.categories[26].ranks[0].player.full_name
        const reboundsLabel = data.categories[26].ranks[0].player.full_name
        const assistsLabel = data.categories[26].ranks[0].player.full_name
        const stealsLabel = data.categories[26].ranks[0].player.full_name
        const blocksLabel = data.categories[26].ranks[0].player.full_name

        this.setState({
          isLoaded: true,
          pointsLabel: pointsLabel
        })

        console.log(this.state.points, "points from state");
      })
    }

  render() {

    let { isLoaded } = this.state  // access items from state in render()

    if (!isLoaded) {
      return <div className="dashboard">Loading...</div>;
    }

    else {
      return (
        <div className="dashboard">
          {/* {this.state.pictures} */}
          <div className="dashboard__cards">


            <div className="dashboard__card dashboard__points">
              <div className="dashboard__card__header">
                <p className="">POINTS PER GAME</p>
              </div>

              <div className="dashboard__card__body--main">
                <div className="dashboard__card__body--main__rank">1</div>

                <div className="dashboard__card__body--main__img">
                  <img src="" alt=""/> 
                </div>

                <div className="dashboard__card__body--main__text--label">
                    <p className="">{this.state.pointsLabel}</p>
                </div>

                <div className="dashboard__card__body--main__text">
                    <p className="">37.5</p>
                </div>
              </div>
            </div>

            <div className="dashboard__card dashboard__points">
              <div className="dashboard__card__header">
                <p className="">FIELD GOALS PER GAME</p>
              </div>

              <div className="dashboard__card__body--main">
                <div className="dashboard__card__body--main__rank">1</div>

                <div className="dashboard__card__body--main__img">
                  <img src="" alt=""/> 
                </div>

                <div className="dashboard__card__body--main__text--label">
                    <p className="">{this.state.pointsLabel}</p>
                </div>

                <div className="dashboard__card__body--main__text">
                    <p className="">37.5</p>
                </div>
              </div>
            </div>


            <div className="dashboard__card dashboard__points">
              <div className="dashboard__card__header">
                <p className="">FREE THROWS PER GAME</p>
              </div>

              <div className="dashboard__card__body--main">
                <div className="dashboard__card__body--main__rank">1</div>

                <div className="dashboard__card__body--main__img">
                  <img src="" alt=""/> 
                </div>

                <div className="dashboard__card__body--main__text--label">
                    <p className="">{this.state.pointsLabel}</p>
                </div>

                <div className="dashboard__card__body--main__text">
                    <p className="">37.5</p>
                </div>
              </div>
            </div>
            


          </div>
        </div>
      )
    }
  }
}

export default Dashboard;
