import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import React from 'react'


function AboutMe() {
  return (
    <div className="p-4 bg-[#353c44] hover:shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-white">About Me</h2>
      <p className="text-gray-300">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been
        working at this awesome company for 3 years now. <br /><br />
        I was born and raised in Albany, NY& have been living in Santa
        Carla for the past 10 years my wife Tiffany and my 4 year old twin
        daughters- Emma and Ella. Both of them are just starting school,
        so my calender is usually blocked between 9-10 AM. This is a...

      </p>
    </div>
  )
}

function Experiences() {
  return (
    <div className="p-4 bg-[#353c44] hover:shadow-lg  rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-white">Experiences</h2>
      <p className="text-gray-300">This is the Experiences section.</p>
    </div>
  )
}

function Recommended() {
  return (
    <div className="p-4 bg-[#353c44] hover:shadow-lg  rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-white">Recommended</h2>
      <p className="text-gray-300">This is the Recommended section.</p>
    </div>
  )
}


export default function Tabs() {
  return (
    <Router>
      <div className="m bg-[#353c44] text-white p-4 rounded-xl">
        <nav className="mb-4 flex justify-center items-center">
          <ul className="flex  bg-black p-2 rounded-lg w-[30rem] justify-between  ">
            <li>
              <Link to="/" className="text-white w-40 px-5 py-2  rounded-xl hover:bg-gray-900 hover:scale-150 hover:text-sm ">About Me</Link>
            </li>
            <li>
              <Link to="/experiences" className="text-white px-10  py-2  rounded-xl hover:bg-gray-900 hover:scale-150 hover:text-sm">Experiences</Link>
            </li>
            <li>
              <Link to="/recommended" className="text-white px-10  py-2  rounded-xl hover:bg-gray-900 hover:scale-150 hover:text-sm">Recommended</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>

      </div>
      <hr className='mt-3 w-[40rem] mx-5' />
    </Router>
  )
}


