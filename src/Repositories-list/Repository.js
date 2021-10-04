import React from "react";
const Repository = props => {
  return (
    <div>
      {props.repositories.map((repo, index) => (
        <div className="Repository" key={index}>
          <div className="image">
            <img alt="" height="150" width="150" src={repo.owner.avatar_url} />
          </div>
          <div className="details">
            <div className="repoName"> {repo.name} </div>
            <p className="repoDescription"> {repo.description} </p>
            <div className="detailss">
              <div className="stars">
                Stars: {props.handleNumber(repo.stargazers_count)}
              </div>
              <div className="issues">
                ISSUES: {props.handleNumber(repo.open_issues_count)}
              </div>
              <div className="submitted">
                submitted
                {" " +
                  props.handleDaysDifference(repo.created_at.split("T")[0]) +
                  " "}
                days ago by {repo.owner.login}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repository;
