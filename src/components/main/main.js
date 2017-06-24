import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import Saved from '../saved/saved';
import Search from '../search/search';
import Results from '../results/results';
import './main.css';

export default class Main extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     articles: {
  //       articleName: "Onion article 1",
  //       articleLink: "Link"
  //     }
  //   }
  // }

  render(){
    return (
      <div className='main'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>Onion Article Scrubber</h1>
            </Navbar.Brand>
            <p>Search for best articles</p>
          </Navbar.Header>
        </Navbar>

        <Search sectionTitle="Search">

        </Search>

        <Results sectionTitle= "Results">

        </Results>

        <Saved sectionTitle= "Saved Articles">

        </Saved>
      </div>
    )
  }
}
