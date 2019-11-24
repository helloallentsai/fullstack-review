import React from 'react';

const RepoList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="category">
              number
            </th>
            <th className="category">
              github username
            </th>
            <th className="category">
              github repo name
            </th>
            <th className="category">
              popularity
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