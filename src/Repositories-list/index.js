import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";
import "../CSS/Css.css";
import Repository from "./Repository";
import {getRepositories} from "../API/GITHUB-API";
const per = 100 ;
class RepositoryList extends Component {
  state = {
    repositories: [],
    page: 1,
    hasMore: true
  };
  loadRepositories = () => {
    const { page, repositories } = this.state;
    var date = new Date();
    date.setDate(date.getDate() - 30);
    var diff = date.toISOString().split("T")[0]; 
    getRepositories(diff,page,per).then(res =>
      this.setState({
        repositories: [...repositories, ...res.data.items],
        page: page + 1
      })
    );
    if (page > 10) {
      this.setState({
        hasMore: false
      });
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
    console.log(this.state.repositories)
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
