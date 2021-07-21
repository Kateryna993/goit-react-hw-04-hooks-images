import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/Searchbar/Searchbar';
import fetchImages from './components/ApiService/ApiService.jsx';
import ImageGallery from './components/ImageGallery/ImageGalleryList';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader.jsx';
import Modal from './components/Modal/Modal.jsx';
import style from './App.module.css';

export default function ImageFinderApp() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(false);

  const onChangeQuery = query => {
    if (query !== searchQuery) {
      setImages([]);
      setCurrentPage(1);
      setSearchQuery(query);
      setError(null);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    function onFetchImages() {
      const options = { searchQuery, currentPage, error };

      setLoading(true);

      fetchImages(options)
        .then(response => {
          setImages(prevImages => [...prevImages, ...response]);

          if (response.length === 0) {
            toast.error('No images with this keyword to be found!');
          }
        })
        .catch(error => setError(error))
        .finally(() => {
          setLoading(false);
          if (currentPage > 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        });
    }

    onFetchImages();
  }, [currentPage, error, searchQuery]);

  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);

    // scrollContoller();
  };

  // const scrollContoller = (currentPage) => {
  //   if (currentPage >= 1) {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = largeImageURL => {
    setLargeImage(largeImageURL);
    toggleModal();
  };

  const shouldRenderOnLoadMore = images.length > 0 && !loading;

  return (
    <div className={style.App}>
      <SearchBar onSubmit={onChangeQuery} />

      <ImageGallery images={images} onClickImage={openModal} />
      {loading && <Loader />}
      {shouldRenderOnLoadMore && <Button onClick={onLoadMore} />}

      {showModal && (
        <Modal onClose={toggleModal} bigImage={largeImage.largeImageURL} />
      )}

      <Toaster position="top-right" />
    </div>
  );
}

// ***Old version with class***///
// export class App extends Component {
//   state = {
//     images: [],
//     currentPage: 1,
//     searchQuery: '',
//     error: null,
//     loading: false,
//     showModal: false,
//     largeImage: '',
//     // status: 'idle',
//   };

//   componentDidUpdate(_, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.onFetchImages();
//       // console.log('Image name changed');
//       // console.log('prevState.searchQuery: ', prevState.searchQuery);
//       // console.log('this.state.searchQuery: ', this.state.searchQuery);
//     }

//     if (
//       prevState.currentPage !== this.state.currentPage &&
//       this.state.currentPage > 2
//     ) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }

//   onChangeQuery = query => {
//     this.setState({
//       images: [],
//       currentPage: 1,
//       searchQuery: query,
//       error: null,
//     });
//   };

//   onFetchImages = () => {
//     const { searchQuery, currentPage, error } = this.state;

//     const options = { searchQuery, currentPage, error };

//     this.setState({ loading: true });

//     fetchImages(options)
//       .then(response => {
//         if (response.length === 0) {
//           toast.error('No images with this keyword to be found!');
//         }

//         this.setState(prevState => ({
//           images: [...prevState.images, ...response],
//           currentPage: prevState.currentPage + 1,
//         }));
//       })
//       .catch(error => this.setState({ error: error }))
//       .finally(() => this.setState({ loading: false }));
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   openModal = modalImage => {
//     console.log('Open Modal', modalImage);
//     this.setState(() => ({ largeImage: modalImage }));
//     this.toggleModal();
//   };

//   closeModal = () => {
//     this.setState({ largeImage: '' });
//     this.toggleModal();
//   };

//   render() {
//     const { images, loading, showModal, largeImage } = this.state;

//     const shouldRenderOnLoadMore = images.length > 0 && !loading;

//     return (
//       <div className={style.App}>
//         <SearchBar onSubmit={this.onChangeQuery} />

//         <ImageGallery images={images} onClickImage={this.openModal} />
//         {loading && <Loader />}
//         {shouldRenderOnLoadMore && <Button onClick={this.onFetchImages} />}

//         {showModal && (
//           <Modal
//             onClose={this.toggleModal}
//             bigImage={largeImage.largeImageURL}
//           />
//         )}

//         <Toaster position="top-right" />
//       </div>
//     );
//   }
// }
