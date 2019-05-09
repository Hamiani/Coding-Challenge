import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";
import "../CSS/Css.css";
import Repository from "./Repository";

class RepositoryList extends Component {
  state = {
    repositories: [],
    per: 100,
    page: 1,
    hasMore:true
  };
  loadRepositories = () => {
    const { per, page, repositories } = this.state;
    var date = new Date();
    date.setDate(date.getDate() - 30);
    var diff = date.toISOString().split("T")[0];
    const url = `https://api.github.com/search/repositories?q=created:>${diff}&sort=stars&order=desc&page=${page}&per_page=${per}`;
    axios.get(url).then(res =>
      this.setState({
        repositories: [...repositories, ...res.data.items],
        page: page + 1
      }),
      console.log("page",this.state.page),
      console.log("hasMore",this.state.hasMore)
    );
    if(page>10){
        this.setState({
            hasMore:false
        })
        console.log("hasMore",this.state.hasMore)
    }
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

    return (
      <InfiniteScroll
        pageStart={this.state.page}
        loadMore={this.loadRepositories}
        hasMore={this.state.hasMore}
        loader={loader}
      >
        <Repository
          repositories={this.state.repositories}
          handleNumber={this.handleNumber}
          handleDaysDifference={this.handleDaysDifference}
        />
      </InfiniteScroll>
    );
  }
}
export default RepositoryList;
