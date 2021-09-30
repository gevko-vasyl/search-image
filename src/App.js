import React, { Component } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import Gallery from "components/Gallery/Gallery";
import fetchImages from "services/api";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";

export default class App extends Component {
  state = {
    searchName: "",
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, images, page } = this.state;

    if (prevState.searchName !== searchName) {
      this.setState({ loading: true });
      setTimeout(
        () =>
          fetchImages(searchName, page).then((res) =>
            this.setState({ images: res, loading: false })
          ),
        2000
      );
    }
    if (prevState.page !== page) {
      this.setState({ loading: true });
      setTimeout(
        () =>
          fetchImages(searchName, page).then((res) =>
            this.setState({ images: [...images, ...res], loading: false })
          ),
        2000
      );
    }
  }

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const searchName = e.target.elements.imageName.value;
    this.setState({ searchName });
    e.target.elements.imageName.value = "";
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <Gallery images={this.state.images} />
        {this.state.loading && <Spinner loading={this.state.loading} />}
        {this.state.images.length !== 0 && !this.state.loading && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
