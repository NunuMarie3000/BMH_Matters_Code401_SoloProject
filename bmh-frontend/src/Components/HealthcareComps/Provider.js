import axios from 'axios';
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import ProviderModal from './ProviderModal';

export default class Provider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLiked: false,
       isMoreClicked: false
    }
  }

  handleClick = () =>{
    this.setIsLiked();
    this.handleFavProvider();
  }

  setIsMoreClicked = () =>{
    this.setState({isMoreClicked : !this.state.isMoreClicked})
  }

  setIsLiked = () =>{
    this.setState({ isLiked: !this.state.isLiked })
  }

  handleFavProvider = async() =>{
    try {
      const url = `${process.env.REACT_APP_SERVER}/api/${this.props.userId}/${this.props.id}`
      await axios.put(url)
      this.props.getUserProviders();
    } catch (error) {
      console.log(error.message)
    }
  }

  handleRemove = async() =>{
    try{
      const url = `${process.env.REACT_APP_SERVER}/api/${this.props.userId}/${this.props.id}`
      await axios.delete(url)
      this.props.getUserProviders();
    } catch(error)
    {
      console.log(error)
    }
  }

  seeMore = () =>{
    this.setState({isMoreClicked: !this.state.isMoreClicked});
  }
  
  render() {
    const { id, name, title, about, pronouns, pic, issues, communities, specialties, phone, addy1, addy2, city, state, zip } = this.props
    return (
      <>
      {/* here is where i'll render out individual provider information in card format cause it's simple */}

      <Card key={id} style={{ border: '5px solid #1E7780', height: '28vh', marginBottom:'1.5vh' }}>
        <Card.Body style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',columnGap:'1vw' }}>
          <Card.Img style={{ width: '100%' }} alt={name} src={pic} />
          <div style={{ gridColumn:'2/4', maxWidth:'auto', textAlign:'right' }}>
            <Card.Title style={{fontSize:'2.75vh', fontWeight:'bold'}}>{name}</Card.Title>
            <Card.Subtitle style={{fontSize:'2.5vh'}}>{title}</Card.Subtitle>
            <Card.Footer style={{display:'flex', justifyContent:'space-between'}}>
              <div onClick={this.seeMore}>View More</div>
              {window.location.pathname === "/healthcare" && 
              <div onClick={this.handleClick}>{this.state.isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</div>}
              {window.location.pathname === "/favorites" &&
              <div onClick={this.handleRemove}><i className="fa-solid fa-trash-can"></i></div>}
              </Card.Footer>
          </div>
        </Card.Body>
      </Card>

      <ProviderModal phone={phone} addy1={addy1} addy2={addy2} city={city} state={state} zip={zip} isLiked={this.state.isLiked} setIsLiked={this.setIsLiked} id={id} name={name} title={title} about={about} pronouns={pronouns} pic={pic} issues={issues} communities={communities} specialties={specialties} isMoreClicked={this.state.isMoreClicked} setIsMoreClicked={this.setIsMoreClicked} />
    </>
    )
  }
}
