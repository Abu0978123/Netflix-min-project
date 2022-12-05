import React, { useEffect } from "react";
// import logo from './Images/logo.png'
import axios from "axios";
import { useState } from "react";

const URL = "https://api.themoviedb.org/3/movie/popular?";
const key = "api_key=01a3a13285d8ae1f1a95f41ebc79b342";
const imgURL = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => (
  <div className="card">
    <img src={img} alt="cover" />
  </div>
);

const Row = ({
  title,
  arr = [
    //     {
    //       img: "https://www.digitaltrends.com/wp-content/uploads/2022/03/d88obyi2n7mnb4bvmcb6ohxcmro.jpg?p=1",
    //     },
  ],
}) => (
  <div className="row">
    <h2 style={{ marginLeft: "1rem", fontWeight: "400" }}>{title}</h2>
    <div>
      {arr && arr.length > 0 ? (
        arr.map((items, i) => (
          <Card key={i} img={`${imgURL}${items.poster_path}`} />
        ))
      ) : (
        <i> Loading...</i>
      )}
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    popular();
    latest();
    session();
    trending();
  }, []);
  //the following data fetching is used for popular movies
  const [getData, setData] = useState([]);

  async function popular() {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=01a3a13285d8ae1f1a95f41ebc79b342`
      );
      setData(results);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //the following data fetching is used for Latest movies
  const [Latest, setLatest] = useState([]);

  async function latest() {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=01a3a13285d8ae1f1a95f41ebc79b342&language=en-US&page=1`
      );
      setLatest(results);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //the following data fetching is used for Session movies
  const [Session, setSession] = useState([]);

  async function session() {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=01a3a13285d8ae1f1a95f41ebc79b342&language=en-US&page=1`
      );
      setSession(results);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //the following data fetching is used for Trending movies
  const [Trending, setTrending] = useState([]);

  async function trending() {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=01a3a13285d8ae1f1a95f41ebc79b342`
      );

      setTrending(results);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  // console.log(Trending[0].poster_path) its getting me error
  // console.log(`${imgURL}/${Trending[0]}`)

  return (
    <section className="home">
      <div className="banner">
        {/* <img src={`${imgURL}/${Trending[0].poster_path}`} alt="cover" /> */}
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/Best-Movies-on-Netflix-Updated-feature.jpg"
          alt="" 
        />
      </div>
      <Row title={"Popular on Netflix"} arr={getData} />
      <Row title={"Latest Movies"} arr={Latest} />
      <Row title={"TV Shows"} arr={Session} />
      <Row title={"In Trending"} arr={Trending} />
    </section>
  );
}
