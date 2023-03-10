import React from 'react'
import Navbar from '../navbar/Navbar'
import './Fase1.css'
const Fase1 = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">Robert Hook</h5>
                <p className="card-text">
                  Robert Hooke foi um físico, químico, biólogo, arquiteto e engenheiro inglês, considerado o pai da microscopia. Foi o primeiro a descrever células e tecidos vivos, e o primeiro a descrever a lei da elasticidade dos corpos. Foi também o primeiro a descrever a lei da gravitação universal, embora não tenha sido o primeiro a descobri-la.
                </p>
                <button type="button" className="btn">
                  <strong>
                    <span>
                      Biografia
                      <a href="https://www.youtube.com/watch?v=CNU-n6tCx1A&ab_channel=AlanisPantuzzo" target="_blank" rel="noreferrer">
                        <i className="fas fa-play"></i>
                      </a>

                    </span>
                  </strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Isaac Newton</h5>
                <p className="card-text">
                  Isaac Newton foi um físico, matemático, astrônomo, alquimista, teólogo, filósofo e inventor inglês. É considerado um dos mais importantes cientistas de todos os tempos, sendo um dos três grandes nomes da física clássica, ao lado de Galileu Galilei e de Aristóteles. Newton foi o primeiro a descrever a lei da gravitação universal, embora não tenha sido o primeiro a descobri-la.
                </p>
                <button type="button" className="btn">
                  <strong>
                    <span>
                      Biografia
                      <a href="https://www.youtube.com/watch?v=CNU-n6tCx1A&ab_channel=AlanisPantuzzo" target="_blank" rel="noreferrer">
                        <i className="fas fa-play"></i>
                      </a>

                    </span>
                  </strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Fase1