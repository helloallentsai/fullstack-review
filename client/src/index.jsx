import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    $.ajax({
      type: 'GET',
      url: "/repos",
      success: (data) => {
        this.setState({
          repos: data,
        })
      },
      failure: function(errMsg) {
        alert(errMsg);
      }
    })
  }

  search(username) {
    $.ajax({
      type: "POST",
      url: "/repos",
      data: JSON.stringify({ username }),
      contentType: "application/json; charset=utf-8",
      success: () => {
        this.getRepos();
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
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