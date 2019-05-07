import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

class RepositoryList extends Component {
  state = {
    repositories: [],
    per: 100,
    page: 1,
    now: new Date()
  };
  loadRepositories = () => {
    const { per, page, repositories } = this.state;

    if (page === null) {
      return;
    }
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}&per_page=${per}`;
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

  render() {
    const loader = (
      <div key={0} className="loader">
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

          <div style={{ flex: 3 }}>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>{repo.name}</div>
            <div>{repo.description}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 20
              }}
            >
              <div style={{}}>Stars:{repo.stargazers_count}</div>
              <div style={{ marginLeft: 20 }}>
                Issues:{repo.open_issues_count}
              </div>
              :
              <div style={{ marginLeft: 20 }}>
                submittted: {repo.created_at} by {repo.owner.login}
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
