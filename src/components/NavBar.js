import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovie, getMovieSearch } from '../redux/actions/movieAction';
const NavBar = () => {

  const onSearch = (word) => {
    search(word)
  }
  const dispatch = useDispatch();
  //to search in api
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie())
    } else {
      dispatch(getMovieSearch(word))
    }
  }

  return (
    <div className="nav-style w-100 ">
      <Container className="pt-0 ">
        <Row className=" p-0 ">
          <Col xs="2" lg="1" className="pe-0">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Col>
          <Col xs="9" lg="11" className=" d-flex align-items-center pe-5">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="Search" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
