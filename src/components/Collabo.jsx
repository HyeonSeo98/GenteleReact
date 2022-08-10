import React from 'react'
import styled from 'styled-components'
import { collabo } from './data'

export default function Collabo() {

  const Button = styled.button`
    width: 150px;
    height: 30px;
    outline: none;
    border:none;
    display: block;
    line-height: 30px;
    border-radius: 40px;
    text-align: center;
    margin: 10px auto 0 auto;
    background: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
      background-color: #000;
      color: #fff
    }
  `

  return (
    <section className='collabo'>
      <h1>COLLABORATION</h1>
      <div className="inner">
        {
          collabo.map((value,index) => {
            return(
              <div key={value.id} className = {value.class}>
                <div className="col_img">
                  <img src={`./images/collabo_0${index+1}.jpg`} alt={value.id}/>
                  <div className="hover">
                    <div className="h_txt">
                      <p>{value.title}</p>
                      <p><Button>자세히 보기</Button></p>
                    </div>
                  </div>
                </div>
                <div className="txt">
                  <p className='title'>{value.title}</p>
                  <p className='sub'>{value.sub}</p>
                  <p className="main">{value.main}</p>
                  <p className='day'>{value.day}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
