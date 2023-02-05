import React from 'react'
import { Modal, Button, Card, Accordion } from 'react-bootstrap';

export default function ProviderModal({ isLiked, setIsLiked, isMoreClicked, setIsMoreClicked, id, name, title, about, pronouns, pic, issues, communities, specialties, phone, addy1, addy2, city, state, zip }) {
  const handleClose = () => {
    setIsMoreClicked(!isMoreClicked);
  }
  return (
    <>
      <Modal key={id} show={isMoreClicked} onHide={handleClose}>
        <Modal.Body>
          <Card style={{}}>
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Card.Img style={{ width: '10vw' }} variant="top" src={pic} />
              <div style={{fontWeight:'bolder', fontSize:'1.125rem'}}>{name}</div>
              <div onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
              </div>
            </Card.Header>
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {pronouns !== null && <div>{pronouns}</div>}
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <div>{title}</div>
                {phone !== null && <div>{phone}</div>}
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <div style={{ display: 'flex', justifyContent:'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{addy1 !== null && addy1}</div>
                    <div>{addy2 !== null && addy2}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign:'right' }}>
                    <div>{city !== null && city}</div>
                    <div>{state !== null && state}</div>
                    <div>{zip !== null && zip}</div>
                  </div>
                </div>
              </Card.Title>
              <Card.Text>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>About</Accordion.Header>
                    <Accordion.Body>
                      {about}
                    </Accordion.Body>
                  </Accordion.Item>
                  {issues !== null &&
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Issues</Accordion.Header>
                      <Accordion.Body>
                        {issues}
                      </Accordion.Body>
                    </Accordion.Item>}
                  {specialties !== null &&
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Specialties</Accordion.Header>
                      <Accordion.Body>
                        {specialties}
                      </Accordion.Body>
                    </Accordion.Item>}
                  {communities !== null &&
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Communities</Accordion.Header>
                      <Accordion.Body>
                        {communities}
                      </Accordion.Body>
                    </Accordion.Item>}
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
