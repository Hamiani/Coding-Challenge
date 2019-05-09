import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";

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

    const url = `https://api.github.com/search/repositories?q=created:>${diff}&sort=stars&order=desc&page=${page}&per_page=${per}`;
    axios.get(url).then(
      res => (
        this.setState({
          repositories: [...repositories, ...res.data.items],
          page: page + 1
        }),
        console.log(this.state.repositories)
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
      <div key={0} className="loader" style={{marginLeft:700,marginBottom:50}}>
        Loading ...
      </div>
    );
    var Repositories = [];

    this.state.repositories.map((repo, index) => {
      Repositories.push(
        <div
          className="Repository"
          key={index}
          style={{ display: "flex", flexDirection: "row", margin: 50 }}
        >
          <div
            style={{
              flex: 0.4,
              justifyContent: "center"
            }}
          >
            <img alt="" height="150" width="150" src={repo.owner.avatar_url} />
          </div>

          <div style={{ flex: 3, backgroundColor: "#EFE9E9" }}>
            <div style={{ fontSize: 20, fontWeight: "bold", margin: 15 }}>
              {repo.name}
            </div>
            <div style={{ margin: 15 }}>{repo.description}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 15
              }}
            >
              <div
                style={{ backgroundColor: "#CDCCCC", borderStyle: "groove" }}
              >
                Stars:{this.handleNumber(repo.stargazers_count)}
              </div>
              <div
                style={{
                  marginLeft: 20,
                  backgroundColor: "#CDCCCC",
                  borderStyle: "groove"
                }}
              >
                Issues:{this.handleNumber(repo.open_issues_count)}
              </div>

              <div style={{ marginLeft: 20 }}>
                submittted:{" "}
                {this.handleDaysDifference(repo.created_at.split("T")[0])} days
                ago by {repo.owner.login}
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
