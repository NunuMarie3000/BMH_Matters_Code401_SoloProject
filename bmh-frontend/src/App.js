import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import FavHC from "./Components/FavHC";
import Healthcare from "./Components/Healthcare";
import Journal from "./Components/Journal";
import Header from "./Components/Header";
import CrisisOrResource from "./Components/CrisisComps/CrisisOrResource";

import axios from 'axios';
import Hamburger from "./Components/Hamburger";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       providerData: null,
       filteredData: null,
       isHealthcareLoading: false,
       userEntries: null,
       mentalHealthTip:null,
       userProviders:null,
       dailyGreeting:null
    }
  }

  setFilteredData = (data) =>{
    this.setState({ filteredData: data})
  }

  getProviderData = async () => {
    this.setState({ isHealthcareLoading: true })
    const url = `${process.env.REACT_APP_SERVER}/providers`;

    await axios.get(url).then(data => 
      this.setState({providerData : data.data}));
    this.setState({ isHealthcareLoading: false })
  }

  getUserEntries = async () =>{
    try {
      const url = `${process.env.REACT_APP_SERVER}/${this.props.userId}/entries`;
      const response = await axios.get(url);
      this.setState({ userEntries: response.data })
    } catch (error) {
      console.log(error.message);
    }
  }

  getMentalHealthTip = async() =>{
    try {
      const url = `${process.env.REACT_APP_SERVER}/mentalhealthtips`
      await axios.get(url).then((res)=>this.setState({ mentalHealthTip: res.data }))
    } catch (error) {
      console.log(error.message);
    }
  }

  getUserProviders = async() =>{
    try {
      const url = `${process.env.REACT_APP_SERVER}/${this.props.userId}/providers`
      await axios.get(url).then((res)=>this.setState({ userProviders: res.data }))
    } catch (error) {
      console.log(error.message);
    }
  }

  getDailyGreeting = async() =>{
    try{
      const url = `${process.env.REACT_APP_SERVER}/greetings`;
      const response = await axios.get(url);
      this.setState({ dailyGreeting: response.data })
    } catch(error)
    {
      console.log(error);
    }
  }

  componentDidMount(){
    this.getMentalHealthTip();
    this.getDailyGreeting();
    this.getProviderData();
    this.getUserEntries();
    this.getUserProviders();
  }
  render() {
    const { userData, userId } = this.props
    return (
      <>
      {userId !== null && userData !== null && 

        <>
          <div style={{paddingBottom:'150px'}}>
          <Hamburger userData={userData} />
          <Header />
          <Routes>
            <Route path="/" element={
              this.state.userEntries !== null && this.state.mentalHealthTip !== null && this.state.dailyGreeting !== null &&
              <Home greeting={this.state.dailyGreeting} tip={this.state.mentalHealthTip} lastJournal={this.state.userEntries} userId={userId} userData={userData} />} />
            <Route path="/crisis" element={
              <CrisisOrResource />} />
            <Route path="/favorites" element={
              this.state.userProviders !== null && 
              <FavHC getUserProviders={this.getUserProviders} providers={this.state.userProviders} userId={userId} />} /> 
            <Route path="/healthcare" element={this.state.providerData !== null && this.state.userProviders !== null &&
              <Healthcare getUserProviders={this.getUserProviders} setFilteredData={this.setFilteredData} filteredData={this.state.filteredData} isHealthcareLoading={this.state.isHealthcareLoading} providerData={this.state.providerData} userId={userId} />} />
            <Route path="/journal" element={
              <Journal userId={userId} userEntries={this.state.userEntries} getUserEntries={this.getUserEntries} />} />
          </Routes>
          </div>
          <Navigation />
        </>
      }
    </>
    )
  }
}
