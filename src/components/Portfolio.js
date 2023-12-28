import React from 'react'

export default function Portfolio() {
  return (
    <>
    <style>
        {`
            #main{
                display: flex;
                margin-top: 110px;
                margin-left: 10%;
                margin-right:10%
            }
            #image{
                height: 330px;
                border: 1px solid black;
                border-radius: 50% !important;
            }
            #content{
                margin-left:13%;
                text-align:left;
            }
            @media screen and (max-width: 1135px){
                #main{
                    display:block;
                    margin-top: 60px;
                }
                #image{
                    height: 230px;
                }
                #content{
                    margin-top:50px;
                    margin-left:2%;
                    margin-bottom:50px;
                    text-align:left;
                }
            }
        `}
    </style>
    <div>
      <div className="text-center" id="main">
        <img id="image" src="my_portfolio/self.png" className="rounded" alt="Shiv Shankar"/>
        <div id="content">
            <h1>Shiv Shankar</h1>
            <br></br>
            <p>Greetings! I'm Shiv Shankar, a passionate and results-driven B.Tech Computer Science under-graduate with a focus on full-stack software development. My journey in the tech realm has equipped me with a diverse skill set, enabling me to seamlessly navigate both front-end and back-end development.<br></br> Proficient in JavaScript, React Js, Bootstrap, C/C++, Node.js, Express.js, and PHP, I thrive on transforming creative ideas into robust, user-friendly applications. My expertise extends to database management with proficiency in mySQL and MongoDB. What sets me apart is not just my technical acumen but also my collaborative spirit—I thrive in team environments and believe in the power of collective innovation. Let's connect and explore the possibilities of creating impactful digital experiences together.</p>
            <br></br>
            <a href="my_portfolio/Shiv_Shankar_cv.pdf" target="_blank" rel="noreferrer"><button className="btn btn-outline-success">Download my CV</button></a>
        </div>
      </div>
    </div>
    </>
  )
}
