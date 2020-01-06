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
      isLoaded: false,
      otherCardsShown: false
    }
    
    this.showOtherCards = this.showOtherCards.bind(this);
  }
  
  showOtherCards() {
    const { otherCardsShown } = this.state;
    this.setState({otherCardsShown: !otherCardsShown});
    console.log("function works") 
  }

  componentDidMount() {
    fetch('/leaders.json', {
      method: 'GET',
      // credentials: 'include',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
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
        const pointsLabel2 = data.categories[26].ranks[1].player.full_name
        const pointsLabel3 = data.categories[26].ranks[2].player.full_name
        const fieldGoalLabel = data.categories[36].ranks[0].player.full_name
        const fieldGoalLabel2 = data.categories[36].ranks[1].player.full_name
        const fieldGoalLabel3 = data.categories[36].ranks[2].player.full_name
        const freeThrowLabel = data.categories[42].ranks[0].player.full_name
        const freeThrowLabel2 = data.categories[42].ranks[1].player.full_name
        const freeThrowLabel3 = data.categories[42].ranks[2].player.full_name
        const threePointMadeLabel = data.categories[26].ranks[0].player.full_name
        const reboundsLabel = data.categories[26].ranks[0].player.full_name
        const assistsLabel = data.categories[26].ranks[0].player.full_name
        const stealsLabel = data.categories[26].ranks[0].player.full_name
        const blocksLabel = data.categories[26].ranks[0].player.full_name
        const points = data.categories[26].ranks[0].score
        const points2 = data.categories[26].ranks[1].score
        const points3 = data.categories[26].ranks[2].score
        const fieldGoal = data.categories[36].ranks[0].score
        const fieldGoal2 = data.categories[36].ranks[1].score
        const fieldGoal3 = data.categories[36].ranks[2].score
        const freeThrow = data.categories[42].ranks[0].score
        const freeThrow2 = data.categories[42].ranks[1].score
        const freeThrow3 = data.categories[42].ranks[2].score
        const threePointMade = data.categories[26].ranks[0].score
        const rebounds = data.categories[26].ranks[0].score
        const assists = data.categories[26].ranks[0].score
        const steals = data.categories[26].ranks[0].score
        const blocks = data.categories[26].ranks[0].score

        this.setState({
          isLoaded: true,
          otherCardsShown: true,
          pointsLabel: pointsLabel,
          pointsLabel2: pointsLabel2,
          pointsLabel3: pointsLabel3,
          fieldGoalLabel: fieldGoalLabel,
          fieldGoalLabel2: fieldGoalLabel2,
          fieldGoalLabel3: fieldGoalLabel3,
          freeThrowLabel: freeThrowLabel,
          freeThrowLabel2: freeThrowLabel2,
          freeThrowLabel3: freeThrowLabel3,
          points: points,
          points2: points2,
          points3: points3,
          fieldGoal: fieldGoal,
          fieldGoal2: fieldGoal2,
          fieldGoal3: fieldGoal3,
          freeThrow: freeThrow,
          freeThrow2: freeThrow2,
          freeThrow3: freeThrow3
        })

        console.log(this.state.points, "points from state");
      })
    }

  render() {
    const { isLoaded, otherCardsShown } = this.state  // access items from state in render()
    console.log(this.state, "state man!")

    if (!isLoaded) {
      return <div className="dashboard">Loading...</div>;
    }
    
    else {
      return (
        <div className="dashboard">
          <div className="dashboard__nav">
            <div className="dashboard__nav__header">
                <p className="">CHOOSE A PLAYER STAT</p>
            </div>

            <div className="dashboard__nav__body">
              <p className="dashboard__nav__body__item">POINTS PER GAME</p>
              <p className="dashboard__nav__body__item">FIELD GOALS PER GAME</p>
              <p className="dashboard__nav__body__item">FREE THROWS PER GAME</p>
              <p className="dashboard__nav__body__item">POINTS PER GAME</p>
              <p className="dashboard__nav__body__item">FIELD GOALS PER GAME</p>
              <p className="dashboard__nav__body__item">FREE THROWS PER GAME</p>
            </div>            
          </div>

          <div className="dashboard__cards-and-btn">
            {/* Individual Cards */}
            <div className="dashboard__cards">
              <div className="dashboard__card points">
                <div className="dashboard__card__header">
                  <p className="">POINTS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card field-goals">
                <div className="dashboard__card__header">
                  <p className="">FIELD GOALS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/james.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal3}</p></div>
                </div>
              </div>

              <div className="dashboard__card free-throws">
                <div className="dashboard__card__header">
                  <p className="">FREE THROWS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/butler.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow3}</p></div>
                </div>
              </div>

              <div className="dashboard__card points">
                <div className="dashboard__card__header">
                  <p className="">POINTS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card field-goals">
                <div className="dashboard__card__header">
                  <p className="">FIELD GOALS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/james.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal3}</p></div>
                </div>
              </div>

              <div className="dashboard__card free-throws">
                <div className="dashboard__card__header">
                  <p className="">FREE THROWS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/butler.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow3}</p></div>
                </div>
              </div>
              {/* E Individual Cards */}
            </div>

            {otherCardsShown ? <button className="dashboard__btn" onClick={this.showOtherCards}>Load More</button> : 
            <div className="dashboard__cards">
              <div className="dashboard__card points">
                <div className="dashboard__card__header">
                  <p className="">POINTS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card field-goals">
                <div className="dashboard__card__header">
                  <p className="">FIELD GOALS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/james.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal3}</p></div>
                </div>
              </div>

              <div className="dashboard__card free-throws">
                <div className="dashboard__card__header">
                  <p className="">FREE THROWS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/butler.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow3}</p></div>
                </div>
              </div>

              <div className="dashboard__card points">
                <div className="dashboard__card__header">
                  <p className="">POINTS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card field-goals">
                <div className="dashboard__card__header">
                  <p className="">FIELD GOALS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/james.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal3}</p></div>
                </div>
              </div>

              <div className="dashboard__card free-throws">
                <div className="dashboard__card__header">
                  <p className="">FREE THROWS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/butler.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowLabel3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow3}</p></div>
                </div>
              </div>
            </div>
          }
          </div>
          {/* E Cards Container */} 
            

        </div>
      )    
    }
  }
}

export default Dashboard;
