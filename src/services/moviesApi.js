import firebase from './firebase';

const db = firebase.firestore().collection('movies');

const moviesApi = {

  getMovies: async() => {
    const documents = await db.get();
    const movies = documents.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()// aqui estou a receber um filme em formato de objeto com as informações presentes na base de dados e como o meu objetivo é retornar todas as propriedades desse objeto para outro, uso o operador de espelhamento(...doc.data())
      }
    });
    return movies;
  },

  getLatestMovies: async() => {
    const documents = await db.orderBy("release_date", "desc").limit(4).get();
    const latest = documents.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()// aqui estou a receber um filme em formato de objeto com as informações presentes na base de dados e como o meu objetivo é retornar todas as propriedades desse objeto para outro, uso o operador de espelhamento(...doc.data())
      }
    });
    // console.log(latest);
    return latest;
  },

  getRatedMovies: async() => {
    const documents = await db.where("rating", ">=", 4.5).orderBy("rating", "desc").limit(4).get();
    const rated = documents.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()// aqui estou a receber um filme em formato de objeto com as informações presentes na base de dados e como o meu objetivo é retornar todas as propriedades desse objeto para outro, uso o operador de espelhamento(...doc.data())
      }
    });
    // console.log(rated);
    return rated;
  },

  addMovie: async() => {

  },

  getMovieById: async() => {

  },

  updateMovie: async() => {

  },

  deleteMovie: async() => {

  }
};

export default moviesApi;