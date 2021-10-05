import React, { Component } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import Gallery from "components/Gallery/Gallery";
import fetchImages from "services/api";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import Modal from "components/Modal/Modal";

export default class App extends Component {
  state = {
    searchName: "",
    images: [],
    page: 1,
    loading: false,
    isModalShown: false,
    largeImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.setState({ loading: true });
      this.handleFetchImages(searchName, page);
    }
  }

  handleFetchImages = (value, pageNumber) => {
    const { images } = this.state;
    setTimeout(
      () =>
        fetchImages(value, pageNumber).then((res) =>
          this.setState({ images: [...images, ...res], loading: false })
        ),
      1000
    );
  };

  onImageClick = (largeImage) => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1, loading: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const searchName = e.target.elements.imageName.value;
    this.setState({ searchName, images: [], page: 1 });
    e.target.elements.imageName.value = "";
  };

  toggleModal = () => {
    this.setState({ isModalShown: !this.state.isModalShown });
  };

  render() {
    const { images, loading, isModalShown, largeImage } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <Gallery images={images} onImageClick={this.onImageClick} />
        {loading && <Spinner loading={loading} />}
        {images.length !== 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {isModalShown && (
          <Modal toggleModal={this.toggleModal} largeImage={largeImage} />
        )}
      </div>
    );
  }
}
