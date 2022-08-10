import React from 'react'
import './Detail.css'
import { BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function detail() {


  function pro() {
    const details = document.querySelectorAll('.list_box>div')
    const pro = document.querySelector('.list_box .pro')
      details.forEach((detail) => {
        if(detail.classList.contains('on')){
            detail.classList.remove('on')
        }
        pro.classList.add('on')
      })
  }

  function free() {
    const details = document.querySelectorAll('.list_box>div')
    const free = document.querySelector('.list_box .free')
      details.forEach((detail) => {
        if(detail.classList.contains('on')){
            detail.classList.remove('on')
        }
        free.classList.add('on')
      })
  }

  function basic() {
    const details = document.querySelectorAll('.list_box>div')
    const basic = document.querySelector('.list_box .basic')
      details.forEach((detail) => {
        if(detail.classList.contains('on')){
            detail.classList.remove('on')
        }
        basic.classList.add('on')
      })
  }

  function del() {
    const details = document.querySelectorAll('.list_box>div')
    const del = document.querySelector('.list_box .del')
      details.forEach((detail) => {
        if(detail.classList.contains('on')){
            detail.classList.remove('on')
        }
        del.classList.add('on')
      })
  }

  function help() {
    const details = document.querySelectorAll('.list_box>div')
    const help = document.querySelector('.list_box .help')
      details.forEach((detail) => {
        if(detail.classList.contains('on')){
            detail.classList.remove('on')
        }
        help.classList.add('on')
      })
  }

  return (
    <section className='detail'>
      <div className="inner">
        <div className="info">
          <Link to='/'>전체보기</Link>
          <Link to='/circle'>원형프레임</Link>
        </div>

        <div className="order">
          <div className="left">
            <div className="img_box01"><img src="../images/black_01.jpg" alt="img01" /></div>
            <div className="img_box02"><img src="../images/black_02.jpg" alt="img02" /></div>
            <div className="img_box03"><img src="../images/black_03.jpg" alt="img03" /></div>
            <div className="img_box04"><img src="../images/black_04.jpg" alt="img04" /></div>
            <div className="img_box05"><img src="../images/black_05.jpg" alt="img05" /></div>
          </div>

          <div className="right">
            <div className="title">
              <p>론디</p>
              <p>259,000원</p>
            </div>
            <div className="sub_img">
              <div><img src="../images/londi_01.jpg" alt="londi01" /></div>
              <div><img src="../images/londi_02.jpg" alt="londi02" /></div>
              <div><img src="../images/londi_03.jpg" alt="londi03" /></div>
              <div><img src="../images/londi_04.jpg" alt="londi04" /></div>
              <div><img src="../images/londi_05.jpg" alt="londi05" /></div>
            </div>
            <div className="txt">
              론디 01은 사각 형태의 블랙 플랫바 선글라스입니다.
              라운딩 처리된 프런트가 부드러운 분위기를 연출합니다.
              슬림한 프런트와 템플의 실버 메탈 장식 디테일이 매력적인 
              제품입니다. 99.9% UV 차단이 되는  블랙 자이스 렌즈를 
              사용하였습니다.
            </div>
            <div className="btn">
              <button>구매하기</button>
              <button>쇼핑백에 추가</button>
              <button>관심상품 추가</button>
            </div>

            <div className="list_box">
              <p>무료 배송 및 무료 반품 서비스, 무이자 할부 서비스</p>

              <div className="pro" onClick={pro}>
                <div className="l_title">
                  제품세부정보
                  <BsChevronDown/>
                </div>
                <div className="sub">
                  • 스퀘어 아세테이트 프레임<br/>
                  • 템플 메탈 장식 디테일<br/>
                  • 프레임 정면: 151.1mm, 템플 길이: 145.6mm<br/>
                  &nbsp; 렌즈 가로: 65.1mm, 렌즈 높이: 46.9mm<br/>
                  &nbsp; 브릿지: 18mm<br/>
                  • 제조국: 중국<br/>
                  • 제조자 및 수입자: IICOMBINED CO.,LTD.<br/>
                  &nbsp; 사이즈 자세히 보기
                </div>
              </div>
              <div className="free" onClick={free}>
                <div className="l_title">
                  무료 선물 포장 서비스
                  <BsChevronDown/>
                </div>
                <div className="sub">
                  젠틀몬스터 공식 온라인 스토어에서 구매하는 <br/>
                  모든 분들께 선물 포장 서비스를 제공해 드립니다.
                  <p className="pra_img"><img src="../images/gift.jpg" alt=""/></p>
                </div>
              </div>
              <div className="basic" onClick={basic}>
                <div className="l_title">
                  기본 피팅 서비스
                  <BsChevronDown/>               
                </div>
                <div className="sub">
                  • 온라인에서 주문하시는 젠틀몬스터의 모든 제품은 <br/>
                  &nbsp;기본 피팅 후 발송됩니다.<br/>
                  <a href="#!">자세히보기</a>
                </div>  
              </div>
              <div className="del" onClick={del}>
                <div className="l_title">
                  배송 & 반품
                  <BsChevronDown/>
                </div> 
                <div className="sub">
                • 무료 배송<br/>
                오늘 주문한 상품을 영업일 기준 1-3일내에 받아보세요.<br/><br/>
                • 무료 반품<br/>
                무료 반품 서비스를 이용하세요. 구매하신 제품은 수령하신 날로부터 7일 이내에 접수해 주셔야 합니다. 제품은 사용되지 않은 상태를 유지해야 하며, 모든 구성품을 포함하고 있어야 합니다.
                </div>                           
              </div>
              <div className="help" onClick={help}>
                <div className="l_title">
                  도움이 필요하신가요?
                  <BsChevronDown/>
                </div>
                <div className="sub">
                  전문 어드바이저가 도와드리겠습니다.<br/><br/>

                  • 라이브챗: 문의하기<br/>
                  • 전화 문의: 전화하기 1600-2126<br/>
                  • 이메일 문의: 문의하기<br/><br/>

                  * 라이브챗, 고객센터 운영 시간<br/>
                  월요일-금요일, 09:30-17:00(공휴일 제외)
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="sns">
          <p>더 다양한 스타일을 확인해보세요</p>
          <p>인스타그램에 @gentlemonster을 태그하여 당신의 스타일을 공유해보세요.</p>
          <div className="sns_box">
            <div className="sns01">
              <img src="../images/sns_01.jpg" alt="sns01" />
              <p>@fr0stedtips</p>
            </div>
            <div className="sns02">
              <img src="../images/sns_02.jpg" alt="sns02" />
              <p>@harrytibble</p>
            </div>
            <div className="sns03">
              <img src="../images/sns_03.jpg" alt="sns03" />
              <p>@bunnysmeesh</p>
            </div>
          </div>
        </div>

        <div className="recommend">
          <p>론디01과 비슷한 추천제품을 만나보세요</p>
          <div className="rec_box">
            <div className="rec_pro01">
              <img src="../images/recommend_01.jpg" alt="rec01"/>
              <div className="txt">
                <p>모마티 01</p>
                <p>249,000원</p>
                <p>+5 Colors</p>
              </div>
            </div>
            <div className="rec_pro02">
              <img src="../images/recommend_02.jpg" alt="rec02"/>
              <div className="txt">
                <p>릴리트 01</p>
                <p>249,000원</p>
                <p>+5 Colors</p>
              </div>
            </div>
            <div className="rec_pro03">
              <img src="../images/recommend_03.jpg" alt="rec03"/>
              <div className="txt">
                <p>밀 01</p>
                <p>249,000원</p>
                <p>+5 Colors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
