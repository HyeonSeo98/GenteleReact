import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
  return (
    <section className='cart'>
      <div className="inner">
        <p className="title">장바구니</p>
        
        <div className="order_box">

          <div className="info">
            <div className="gentle_pro">
              <p>GENTLE PRODUCT(0개)</p>
            </div>

            <div className="cart_list">
              <div className="pro_img"><img src="./images/black_01.jpg" alt="" /></div>
              <div className="pro_txt">론디01</div>
              <div className="pro_cnt">
                <div className="delete"><FaTrashAlt/></div>
                <div className="cnt">
                  <p>1</p>
                  <div className="add">
                    <p>+</p>
                    <p>-</p>
                  </div>
                </div>
                <div className="price">249000원</div>
              </div>
            </div>
          </div>

          <div className="order">
            <p>결제예상금액</p>
            <div className="total">
              <p>결제예상금액</p>
              <p>0원</p>
            </div>
            <div className='total_order'>주문하기(0개)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
