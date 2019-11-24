import React from 'react';

const RepoList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="category">
            <i className="fas fa-trophy"></i> rank
            </th>
            <th className="category">
            <i className="fas fa-users"></i> username
            </th>
            <th className="category">
            <i className="fas fa-code-branch"></i> repo name
            </th>
            <th className="category">
              <i className="fas fa-fire-alt"></i> popularity
            </th>
          </tr>
          {props.repos.map((repo, idx) => <Repo repo={repo} key={repo.id} num={idx+1} />)}
        </tbody>
      </table>
    </div>
  );
}

const Repo = (props) => {
  const { username, reponame, repourl, popularity } = props.repo;

  return (
    <tr>
      <td className="num">
        {props.num}
      </td>
      <td className="username">
        {username}
      </td>
      <td className="reponame">
        <a href={repourl} target="_blank">{reponame}</a>
      </td>
      <td className="popularity">
        {popularity}
      </td>
    </tr>
  )
}

export default RepoList;