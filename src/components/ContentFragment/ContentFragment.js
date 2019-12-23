import React, { Component } from 'react';

class ContentFragment extends Component {

	constructor(props) {
		super(props);

		this.state = {
      items: [],
      isLoaded: false,
		}
	}

  componentDidMount() {
    fetch('/bin/fragmentexamples/movies.json', {
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
      return <div className="content-fragment">Loading...</div>;
    }

    else {
      return (
        <div className="content-fragment">
          <ul>
            {items.map(item => ( // loop each obj from api result 
                <li key={item.modelTitle}>
                  <div className="content-fragment__text-container">
                    <p><span>Title:</span> {item.title}</p>
                    <p><span>Description:</span> {item.description}</p>
                    <p><span>Release Date:</span> 
                      {new Intl.DateTimeFormat('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: '2-digit' 
                        }).format(item.releaseDate)}                
                    </p>
                  </div>

                  <div className="content-fragment__img-container">
                    <img src={"/../img" + item.image} alt="Content Fragment"/> 
                  </div>
                </li> 
            ))} 
          </ul> 
        </div>
      )
    }
  }
}

export default ContentFragment;
