import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
      pointsLabel: "",
      fieldGoalLabel: "",
      freeThrowLabel: "",
      

      points: "",
      fieldGoal: "",
      freeThrow: "",
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
        const pointsLabel = data.categories[26].ranks[0].player.full_name
        const fieldGoalLabel = data.categories[36].ranks[0].player.full_name
        const freeThrowLabel = data.categories[42].ranks[0].player.full_name
        const threePointMadeLabel = data.categories[26].ranks[0].player.full_name
        const reboundsLabel = data.categories[26].ranks[0].player.full_name
        const assistsLabel = data.categories[26].ranks[0].player.full_name
        const stealsLabel = data.categories[26].ranks[0].player.full_name
        const blocksLabel = data.categories[26].ranks[0].player.full_name

        const points = data.categories[26].ranks[0].score
        const fieldGoal = data.categories[36].ranks[0].score
        const freeThrow = data.categories[42].ranks[0].score
        const threePointMade = data.categories[26].ranks[0].score
        const rebounds = data.categories[26].ranks[0].score
        const assists = data.categories[26].ranks[0].score
        const steals = data.categories[26].ranks[0].score
        const blocks = data.categories[26].ranks[0].score



        this.setState({
          isLoaded: true,
          pointsLabel: pointsLabel,
          fieldGoalLabel: fieldGoalLabel,
          freeThrowLabel: freeThrowLabel,

          points: points,
          fieldGoal: fieldGoal,
          freeThrow: freeThrow
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
                <p className="">{this.state.points}</p>
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
                    <p className="">{this.state.fieldGoalLabel}</p>
                </div>

                <div className="dashboard__card__body--main__text">
                <p className="">{this.state.fieldGoal}</p>
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
                  <p className="">{this.state.freeThrowLabel}</p>
                </div>

                <div className="dashboard__card__body--main__text">
                  <p className="">{this.state.freeThrow}</p>
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
