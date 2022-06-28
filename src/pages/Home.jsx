import React from "react";
import {
  Presentation,
  PrimaryBtn,
  DangerBtn,
} from "../components/StyledElements";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    setStorageData(true);
  }, []);
  
  // true if there is storage data and false if there is not
  const [storageData, setStorageData] = useState([]);

  const handleStorage = () => {
    if (!storageData) {
      localStorage.clear();
      setStorageData(true);
    } else {
      alert("By clicking this button Again you might lose all your files");
      setStorageData(false);
    }
  };

  const navigate = useNavigate()
  
  return (
    <div>
      <Presentation>
        <h1>Use Ai to Guide Your Diet</h1>
        <h4>
          <p>
            <a>verison{process.env.REACT_APP_VERSION} of sofiaDiet </a> is an Ai Virtual Assistant part of
          </p>
          <p>
            the <a>SOF</a>tware <a>I</a>nteligenza <a>A</a>rtificiale protocol.
          </p>
        </h4>
        <PrimaryBtn className="btn info-btn" onClick={() => navigate('/database/food')}>
          Food Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            width="12"
            height="12"
            style={{ marginLeft: "0.33em" }}
          >
            <g
              stroke="currentColor"
              strokeWidth="1.75"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M4.497 1H3a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1.5h0"
                opacity=".6"
              ></path>
              <path d="M9 1.008L14 1v5M14 1L6 9"></path>
            </g>
          </svg>
        </PrimaryBtn>
        <DangerBtn className="btn info-btn" onClick={handleStorage}>
          Clear Storage
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            width="12"
            height="12"
            style={{ marginLeft: "0.33em" }}
          >
            <g
              stroke="currentColor"
              strokeWidth="1.75"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M4.497 1H3a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1.5h0"
                opacity=".6"
              ></path>
              <path d="M9 1.008L14 1v5M14 1L6 9"></path>
            </g>
          </svg>
        </DangerBtn>
      </Presentation>
    </div>
  );
};

export default Home;
