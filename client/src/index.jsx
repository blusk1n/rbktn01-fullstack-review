import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    axios.get('/repos')
    .then(response => this.setState( { repos: response.data } ))
    .catch(error => console.log("Error: ", error))
}
  search(search) {
    axios.post('/repos', {search})
      //.then(response => this.setState( { repos: response.data } ))
      .then(response => console.log(response.data))
      // this is the response comming from the  post req from the server
      .catch(error => console.log("Error: ", error))
    }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));