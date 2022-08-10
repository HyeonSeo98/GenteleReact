import React from 'react'
import './Product.css'
import { all } from './data'
import { BsBag,BsHeart } from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function All() {
  return (
    <div className='all'>
      <div className="visual"><img src="./images/list_v_01.jpg" alt="list_v_01" /></div>

      <div className="pro_list">
        <h1>PRODUCT</h1>
        <div className="inner">
          <div className="info">
            <p>전체보기</p>
          </div>
          <div className="container">
            {
              all.map((value,index) => {
                return (
                  <div key={value.id}>
                    <Link to={`${value.link}`}><div className='img_box'><img src={`./images/product_${index+1}.jpg`} alt={value.alt} /></div></Link>
                    <div className='title'>
                      <p>{value.title}</p>
                      <div className='btn'>
                        <p className='bag'><BsBag/></p>
                        <p className='like'><BsHeart/></p>  
                      </div>
                    </div>
                    <p className='price'>{value.price}원</p>
                    <p className='color'>{value.color}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
