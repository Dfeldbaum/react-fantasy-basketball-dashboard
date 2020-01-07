import React, { Component } from 'react';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		this.state = {
      pointsName: "",
      fieldGoalName: "",
      freeThrowName: "",
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
        const pointsName = data.categories[26].ranks[0].player.full_name
        const pointsName2 = data.categories[26].ranks[1].player.full_name
        const pointsName3 = data.categories[26].ranks[2].player.full_name
        const fieldGoalName = data.categories[36].ranks[0].player.full_name
        const fieldGoalName2 = data.categories[36].ranks[1].player.full_name
        const fieldGoalName3 = data.categories[36].ranks[2].player.full_name
        const freeThrowName = data.categories[42].ranks[0].player.full_name
        const freeThrowName2 = data.categories[42].ranks[1].player.full_name
        const freeThrowName3 = data.categories[42].ranks[2].player.full_name
        const threePointMadeName = data.categories[38].ranks[0].player.full_name
        const threePointMadeName2 = data.categories[38].ranks[1].player.full_name
        const threePointMadeName3 = data.categories[38].ranks[2].player.full_name
        const reboundsName = data.categories[29].ranks[0].player.full_name
        const reboundsName2 = data.categories[29].ranks[1].player.full_name
        const reboundsName3 = data.categories[29].ranks[2].player.full_name
        const offReboundsName = data.categories[27].ranks[0].player.full_name
        const offReboundsName2 = data.categories[27].ranks[1].player.full_name
        const offReboundsName3 = data.categories[27].ranks[2].player.full_name
        const defReboundsName = data.categories[28].ranks[0].player.full_name
        const defReboundsName2 = data.categories[28].ranks[1].player.full_name
        const defReboundsName3 = data.categories[28].ranks[2].player.full_name
        const assistsName = data.categories[30].ranks[0].player.full_name
        const assistsName2 = data.categories[30].ranks[1].player.full_name
        const assistsName3 = data.categories[30].ranks[2].player.full_name
        const stealsName = data.categories[31].ranks[0].player.full_name
        const stealsName2 = data.categories[31].ranks[1].player.full_name
        const stealsName3 = data.categories[31].ranks[2].player.full_name
        const blocksName = data.categories[32].ranks[0].player.full_name
        const blocksName2 = data.categories[32].ranks[1].player.full_name
        const blocksName3 = data.categories[32].ranks[2].player.full_name
        const minutesName = data.categories[25].ranks[0].player.full_name
        const minutesName2 = data.categories[25].ranks[1].player.full_name
        const minutesName3 = data.categories[25].ranks[2].player.full_name
        const turnoversName = data.categories[33].ranks[0].player.full_name
        const turnoversName2 = data.categories[33].ranks[1].player.full_name
        const turnoversName3 = data.categories[33].ranks[2].player.full_name

        const points = data.categories[26].ranks[0].score
        const points2 = data.categories[26].ranks[1].score
        const points3 = data.categories[26].ranks[2].score
        const fieldGoal = data.categories[36].ranks[0].score
        const fieldGoal2 = data.categories[36].ranks[1].score
        const fieldGoal3 = data.categories[36].ranks[2].score
        const freeThrow = data.categories[42].ranks[0].score
        const freeThrow2 = data.categories[42].ranks[1].score
        const freeThrow3 = data.categories[42].ranks[2].score
        const threePointMade = data.categories[38].ranks[0].score
        const threePointMade2 = data.categories[38].ranks[1].score
        const threePointMade3 = data.categories[38].ranks[2].score
        const rebounds = data.categories[29].ranks[0].score
        const rebounds2 = data.categories[29].ranks[1].score
        const rebounds3 = data.categories[29].ranks[2].score
        const offRebounds = data.categories[27].ranks[0].score
        const offRebounds2 = data.categories[27].ranks[1].score
        const offRebounds3 = data.categories[27].ranks[2].score
        const defRebounds = data.categories[28].ranks[0].score
        const defRebounds2 = data.categories[28].ranks[1].score
        const defRebounds3 = data.categories[28].ranks[2].score
        const assists = data.categories[30].ranks[0].score
        const assists2 = data.categories[30].ranks[1].score
        const assists3 = data.categories[30].ranks[2].score
        const steals = data.categories[31].ranks[0].score
        const steals2 = data.categories[31].ranks[1].score
        const steals3 = data.categories[31].ranks[2].score
        const blocks = data.categories[32].ranks[0].score
        const blocks2 = data.categories[32].ranks[1].score
        const blocks3 = data.categories[32].ranks[2].score
        const minutes = data.categories[25].ranks[0].score
        const minutes2 = data.categories[25].ranks[1].score
        const minutes3 = data.categories[25].ranks[2].score
        const turnovers = data.categories[33].ranks[0].score
        const turnovers2 = data.categories[33].ranks[1].score
        const turnovers3 = data.categories[33].ranks[2].score

        this.setState({
          isLoaded: true,
          otherCardsShown: true,
          pointsName: pointsName,
          pointsName2: pointsName2,
          pointsName3: pointsName3,
          fieldGoalName: fieldGoalName,
          fieldGoalName2: fieldGoalName2,
          fieldGoalName3: fieldGoalName3,
          freeThrowName: freeThrowName,
          freeThrowName2: freeThrowName2,
          freeThrowName3: freeThrowName3,
          threePointMadeName: threePointMadeName,
          threePointMadeName2: threePointMadeName2,
          threePointMadeName3: threePointMadeName3,
          reboundsName: reboundsName,
          reboundsName2: reboundsName2,
          reboundsName3: reboundsName3,
          offReboundsName: offReboundsName,
          offReboundsName2: offReboundsName2,
          offReboundsName3: offReboundsName3,
          defReboundsName: defReboundsName,
          defReboundsName2: defReboundsName2,
          defReboundsName3: defReboundsName3,
          assistsName: assistsName,
          assistsName2: assistsName2,
          assistsName3: assistsName3,
          stealsName: stealsName,
          stealsName2: stealsName2,
          stealsName3: stealsName3,
          blocksName: blocksName,
          blocksName2: blocksName2,
          blocksName3: blocksName3,
          minutesName: minutesName,
          minutesName2: minutesName2,
          minutesName3: minutesName3,
          turnoversName: turnoversName,
          turnoversName2: turnoversName2,
          turnoversName3: turnoversName3,   

          points: points,
          points2: points2,
          points3: points3,
          fieldGoal: fieldGoal,
          fieldGoal2: fieldGoal2,
          fieldGoal3: fieldGoal3,
          freeThrow: freeThrow,
          freeThrow2: freeThrow2,
          freeThrow3: freeThrow3,
          threePointMade: threePointMade,
          threePointMade: threePointMade2,
          threePointMade3: threePointMade3,
          threePointMade: threePointMade,
          threePointMade2: threePointMade2,
          threePointMade3: threePointMade3,
          rebounds: rebounds,
          rebounds2: rebounds2,
          rebounds3: rebounds3,
          offRebounds: offRebounds,
          offRebounds2: offRebounds2,
          offRebounds3: offRebounds3,
          defRebounds: defRebounds,
          defRebounds2: defRebounds2,
          defRebounds3: defRebounds3,
          assists: assists,
          assists2: assists2,
          assists3: assists3,
          steals: steals,
          steals2: steals2,
          steals3: steals3,
          blocks: blocks,
          blocks2: blocks2,
          blocks3: blocks3,
          minutes: minutes,
          minutes2: minutes2,
          minutes3: minutes3,
          turnovers: turnovers,
          turnovers2: turnovers2,
          turnovers3: turnovers3          
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
                <p className="">JUMP TO A PLAYER STAT</p>
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
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/antetokounmpo.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.pointsName3}</p></div>
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
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.fieldGoal2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/james.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.fieldGoalName3}</p></div>
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
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/butler.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.freeThrowName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.freeThrow3}</p></div>
                </div>
              </div>

              <div className="dashboard__card minutes">
                <div className="dashboard__card__header">
                  <p className="">MINUTES PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.minutesName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.minutes}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/lillard.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.minutesName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.minutes2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/mccollum.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.minutesName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.minutes3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card threes">
                <div className="dashboard__card__header">
                  <p className="">THREES PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.threePointMadeName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.threePointMade}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/bertans.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.threePointMadeName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.points2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/graham.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.threePointMadeName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.threePointMade3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card rebounds">
                <div className="dashboard__card__header">
                  <p className="">REBOUNDS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/drummond.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.reboundsName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.rebounds}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/capela.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.reboundsName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.rebounds2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/gobert.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.reboundsName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.rebounds3}</p></div>
                </div>
              </div>
              {/* E Individual Cards */}
            </div>

            {otherCardsShown ? <button className="dashboard__btn" onClick={this.showOtherCards}>Load More</button> : 
            <div className="dashboard__cards">
              <div className="dashboard__card off-rebounds">
                <div className="dashboard__card__header">
                  <p className="">OFF REBOUNDS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/drummond.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.offReboundsName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.offRebounds}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/capela.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.offReboundsName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.offRebounds2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/thompson.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.offReboundsName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.offRebounds3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card def-rebounds">
                <div className="dashboard__card__header">
                  <p className="">DEF REBOUNDS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/drummond.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.defReboundsName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.defRebounds}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/gobert.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.defReboundsName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.defRebounds2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/capela.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.defReboundsName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.defRebounds3}</p></div>
                </div>
              </div>

              <div className="dashboard__card assists">
                <div className="dashboard__card__header">
                  <p className="">ASSISTS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/james.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.assistsName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.assists}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/rubio.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.assistsName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.assists2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/doncic.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.assistsName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.assists3}</p></div>
                </div>
              </div>

              <div className="dashboard__card steals">
                <div className="dashboard__card__header">
                  <p className="">STEALS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/simmons.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.stealsName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.steals}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/dunn.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.stealsName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.steals2}</p></div>                
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/vanvleet.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.stealsName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.steals3}</p></div>                
                </div>
              </div>

              <div className="dashboard__card blocks">
                <div className="dashboard__card__header">
                  <p className="">BLOCKS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/whiteside.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.blocksName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.blocks}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/isaac.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.blocksName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.blocks2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/davis.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.blocksName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.blocks3}</p></div>
                </div>
              </div>

              <div className="dashboard__card turnovers">
                <div className="dashboard__card__header">
                  <p className="">TURNOVERS PER GAME</p>
                </div>
                <div className="dashboard__card__body dashboard__card__body--top">
                  <div className="dashboard__card__body__rank">1</div>
                  <div className="dashboard__card__body__img"><img src="/img/young.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.turnoversName}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.turnovers}</p></div>
                </div>
                
                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">2</div>
                  <div className="dashboard__card__body__img"><img src="/img/harden.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.turnoversName2}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.turnovers2}</p></div>
                </div>

                <div className="dashboard__card__body dashboard__card__body--next">
                  <div className="dashboard__card__body__rank">3</div>
                  <div className="dashboard__card__body__img"><img src="/img/westbrook.png" alt=""/></div>
                  <div className="dashboard__card__body__name"><p className="">{this.state.turnoversName3}</p></div>
                  <div className="dashboard__card__body__value"><p className="">{this.state.turnovers3}</p></div>
                </div>
              </div>
            </div>
          }
          {/* E Alt Cards */} 
          </div>
          {/* E Cards Container */} 
        </div>
      )    
    }
  }
}

export default Dashboard;
