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
      url: "http://127.0.0.1:1128/repos",
      success: function(data) {
        // console.log(data);
      },
      failure: function(errMsg) {
        alert(errMsg);
      }
    })
      .done(data => {
        this.setState({
          repos: data,
        })
      });
  }

  search(username) {
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:1128/repos",
      data: JSON.stringify({ username }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        console.log('WORK');
        this.getRepos();
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
      // .done(data => {
      //   console.log('hi');
      //   this.getRepos();
      // });
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