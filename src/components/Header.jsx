import React from 'react'
import {list} from './data.jsx'
import { FaHeart, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
// import { Route } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <div className="inner">
        <Link to="/" onClick={() => {navigate('/')}}><div className="logo"><img src="./images/logo.png" alt="" /></div></Link>
        <div className="search"><input type="text"  placeholder='검색어를 입력해주세요'/><FaSearch className='search_i'/></div>
        <div className="gnb">
          <p className='like'><FaHeart/></p>
          <p className='cart'><Link to="/cart"><FaShoppingCart/></Link></p>
          <p className='my'><FaUserAlt/></p>
        </div>
      </div>

      <div className='lnb'>
        <div className="list">
          {
            list.map((value, index) => {
              return (
                <div key={value.id} className={value.class} to={`${value.navigate}`} onClick={() => {navigate(`${value.navigate}`)}}>
                  <div><img src={`./images/list_0${index+1}.jpg`} alt={value.class} /></div>
                  <p>{value.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>     

    </header>
  )
}
