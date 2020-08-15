import React, { Component } from 'react';
import Api from './utils/Api';
import Header from './components/Header';
import Container from "./components/Container";
import Table from './components/Table';
import SearchForm from "./components/SearchForm";

class App extends Component {

  
  state = {
    employees: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees =() => {
    Api.search ()
      .then(res => {

        this.setState({ employees: res.data.results })
        console.log(res.data.results)
      }
        )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name,value)
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
 

  render() {
    return (
      <Container>
       <Header />
       
           
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
               
              />
             <Table employees ={this.state.employees} search={this.state.search}/>


      </Container>
    );
  }
}
















    
 



export default App;