import React from 'react'
import { all } from './data'
import { BsBag,BsHeart } from "react-icons/bs";

export default function Square() {
  return (
    <div className='square'>
      <div className="visual"><img src="./images/list_v_05.jpg" alt="list_v_05" /></div>
      <div className="pro_list">
        <h1>PRODUCT</h1>
        <div className="inner">
          <div className="info">
            <p>사각프레임</p>
          </div>
          <div className="container">
            {
              all.map((value,index) => {
                if(value.id.includes('square')){
                  return (
                    <div key={value.id}>
                      <div className='img_box'><img src={`./images/product_${index+1}.jpg`} alt={value.alt} /></div>
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
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
