import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import './index.css'

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-msg">
        <p>Made with <BsFillSuitHeartFill color='#e31b23' /> by <a rel="noopener noreferrer" href="https://github.com/GabrielBG0" target="_blank"><u>GBG</u></a></p>
      </div>
    </footer>
  )

}