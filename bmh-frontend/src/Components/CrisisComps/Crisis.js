import React from 'react'

export default function Crisis() {
  const callBlackline = () => {
    // window.open("tel:+18006045841");
    // var result = window.confirm("Call Blackline Hotline?");
    // result && window.open("tel:+1-800-604-5841");
    window.open("tel:+1-800-604-5841");
  }

  const callTrevorProject = () => {
    // var result = window.confirm("Call the Trevor Project?")
    // result && window.open("tel:1-866-488-7386");
    window.open("tel:1-866-488-7386");
  }
  const textTrevorProject = () => {
    if (navigator.userAgent.match(/Android/i)) {
      window.open('sms://678-678&body="START"')
    }
    if (navigator.userAgent.match(/iPhone/i)) {
      window.open('sms://678-678&body="START"')
    }
  }
  return (
    <>
      <div style={{ margin: '0 5vw 5vh 5vw', height:'75vh' }}>

        <div style={{backgroundColor: 'rgb(255, 255, 255, .7)', borderRadius:'2%/5%', padding:'1vh 2vw', marginBottom:'2vh'}}>
          <a style={{color:'#0B3978'}} target="_blank" rel="noreferrer" href="https://www.callblackline.com/">
            <h5>Blackline</h5>
          </a>
          <div onClick={callBlackline}><h5>1-800-604-5841 &nbsp;<i className="fa-solid fa-phone-flip"></i></h5></div>
          <p>
            BlackLine provides a space for peer support, counseling, witnessing and affirming the lived experiences to folxs who are most impacted by systematic oppression with an LGBTQ+ Black femme lens.
          </p>
        </div>
        
        <div style={{backgroundColor: 'rgb(255, 255, 255, .7)', borderRadius:'2%/5%', padding:'1vh 2vw'}}>
          <a style={{color:'#0B3978'}} target="_blank" rel="noreferrer" href="https://www.thetrevorproject.org/">
            <h5>Trevor Project</h5>
          </a>
          <div onClick={textTrevorProject}><h5>Text 'START' to 678-678 &nbsp;<i className="fa-solid fa-mobile-screen-button"></i></h5></div>
          <div onClick={callTrevorProject}><h5>1-866-488-7386 &nbsp;<i className="fa-solid fa-phone-flip"></i></h5></div>
          <p>
          The Trevor Project is the world’s largest suicide prevention and crisis intervention organization for lesbian, gay, bisexual, transgender, queer, and questioning (LGBTQ) young people.
          </p>
        </div>
      </div>
    </>
  )
}
