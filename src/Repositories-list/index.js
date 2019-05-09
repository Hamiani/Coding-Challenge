import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";
import "../CSS/Css.css";

class RepositoryList extends Component {
  state = {
    repositories: [],
    per: 100,
    page: 1
  };
  loadRepositories = () => {
    const { per, page, repositories } = this.state;
    var date = new Date();
    console.log(date);
    date.setDate(date.getDate() - 30);
    var diff = date.toISOString().split("T")[0];
    console.log("///////////////", date.setDate(date.getDate() - 30));
    console.log("*************diff", diff);
    console.log(this.state.page);
    console.log(this.state.per);

    const url = `https://api.github.com/search/repositories?q=created:>${diff}&sort=stars&order=desc&page=${page}&per_page=${per}`;
    axios.get(url).then(
      res => (
        this.setState({
          repositories: [...repositories, ...res.data.items],
          page: page + 1,
          per: per + 100
        }),
        console.log(this.state.repositories),
        console.log(url)
      )
    );
  };
  handleNumber = num => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  handleDaysDifference = created_at => {
    var date = new Date();

    var a = moment(date.toISOString().split("T")[0], "YYYY-MM-DD");

    var b = moment(created_at, "YYYY-MM-DD");

    var days = a.diff(b, "days");
    return days;
  };

  render() {
    const loader = (
      <div key={0} className="loader">
        Loading...
      </div>
    );
    var Repositories = [];

    this.state.repositories.map((repo, index) => {
      Repositories.push(
        <div className="Repository" key={index}>
          <div className="image">
            <img alt="" height="150" width="150" src={repo.owner.avatar_url} />
          </div>
          <div className="details">
            <div className="repoName"> {repo.name} </div>
            <p className="repoDescription"> {repo.description} </p>
            <div className="detailss">
              <div className="stars">
                Stars: {this.handleNumber(repo.stargazers_count)}
              </div>
              <div className="issues">
                Issues: {this.handleNumber(repo.open_issues_count)}
              </div>
              <div className="submitted">
                submitted
                {" " +
                  this.handleDaysDifference(repo.created_at.split("T")[0]) +
                  " "}
                days ago by {repo.owner.login}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <InfiniteScroll 
        pageStart={this.state.page}
        loadMore={this.loadRepositories}
        hasMore
        loader={loader}
      >
        {Repositories}
      </InfiniteScroll>
    );
  }
}
export default RepositoryList;
