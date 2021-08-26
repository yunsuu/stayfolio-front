import { Container } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Header />
      <Container>
        <h1 id="1-">1. 사용한 기술</h1>
        <ul>
          <li>Next.js</li>
          <li>json-server</li>
          <li>React-Bootstrap</li>
        </ul>
        <h1 id="2-">2. 과제 특징</h1>
        <ul>
          <li>
            components 폴더에 구현한 컴포넌트들을 정리해 가독성, 활용성을
            높였습니다.
          </li>
          <li>
            styled-component를 사용할까 고민하다가 css 적용할 곳이 매우 적어
            간단히 style속성을 이용해서 css를 적용하였습니다.
          </li>
        </ul>
        <h1 id="3-">3. 구현한 페이지</h1>
        <h2 id="-">메인 페이지</h2>
        <ul>
          <li>
            상단은 페이지 메뉴입니다. STORE 버튼을 누르면 메인페이지, ABOUT
            버튼은 about페이지로 이동합니다.
          </li>
          <li>이미지가 card 형식으로 정렬되어있습니다.</li>
          <li>카드를 클릭하면 설명 및 이미지가 팝업으로 제공됩니다.</li>
          <li>팝업은 ESC 키 or 우측 상단 X 버튼을 누르면 내려갑니다.</li>
          <li>
            가게의 URL이 있다면 팝업 하단에 &quot;홈페이지 바로가기&quot; 버튼이
            제공됩니다. (확인해보니 망한 가게도 있어 가게 홈페이지를 들어갔을 때
            정보가 안 뜨는 경우도 있습니다. )
          </li>
          <li>
            하단은 푸터로 요구사항대로 카피라이트를 추가하였습니다. (
            <code>@ 2020 내이름</code>)
          </li>
        </ul>
        <h2 id="about-">about 페이지</h2>
        <ul>
          <li>현재 페이지입니다.</li>
          <li>
            기본적인 UI 틀은 메인페이지와 비슷한 Header, Body, Footer로
            구성하였습니다.
          </li>
        </ul>
        <h2 id="404-">404 페이지</h2>
        <ul>
          <li>정해지지 않는 경로로 접속하는 경우 404페이지를 보여줍니다.</li>
          <li>
            setInterval을 이용해 페이지 접속 5초 후 메인페이지로 redirect 되도록
            구현하였습니다.
          </li>
        </ul>
      </Container>
      <Footer />
    </>
  );
}
