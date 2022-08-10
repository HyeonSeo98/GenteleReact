import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="foot_t">
          <div className="logo"><img src="./images/logo.png" alt="f_logo" /></div>
          <div className="info">
            <ul>
              <li>고객서비스</li>
              <li>문의</li>
              <li>배송</li>
              <li>교환 및 환불</li>
              <li>주문조회</li>
              <li>수리서비스 가이드</li>
              <li>제품등록 가이드</li>
              <li>제품등록</li>
            </ul>
            <ul>
              <li>법적고지</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>쿠키정책</li>
            </ul>
            <ul>
              <li>소셜미디어</li>
              <li>페이스북</li>
              <li>인스타그램</li>
              <li>유튜브</li>
              <li>트위터</li>
              <li>카카오톡</li>
            </ul>
          </div>
        </div>
        <div className="foot_b">
          <div className="copy">© 2022 GENTLE MONSTER</div>
          <div className="address">
            주) 아이아이컴바인드 | 대표자명: 김한국 | 사업자번호: 119-86-38589 | 통신판매신고번호: 제 2014-서울마포-1050 호 (사업자 정보 확인) | 이메일 문의: cs@gentlemonster.com <br/>
            개인정보보호책임자: 정태호 | 주소: 서울특별시 마포구 어울마당로5길 41 | 대표번호: 1600-2126<br/>
            고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. 서비스 가입사실 확인
          </div>
        </div>
      </div>
    </footer>
  )
}
