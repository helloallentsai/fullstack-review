import React from 'react';

const RepoList = (props) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <div>
        <table>
          <tbody>
            <tr>
              <th className="category">
                id
              </th>
              <th className="category">
                github username
              </th>
              <th className="category">
                github repo name
              </th>
              <th className="category">
                github repo url
              </th>
              <th className="category">
                popularity
              </th>
            </tr>
            {props.repos.map(repo => <Repo repo={repo} key={repo.id} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Repo = (props) => {
  const { id, username, reponame, repourl, popularity } = props.repo;

  return (
    <tr>
      <td className="id">
        {id}
      </td>
      <td className="username">
        {username}
      </td>
      <td className="reponame">
        <a href={repourl} target="_blank">{reponame}</a>
      </td>
      <td className="repourl">
        {repourl}
      </td>
      <td className="popularity">
        {popularity}
      </td>
    </tr>
  )
}

export default RepoList;