import { IMG_PATHS } from '../../../constants';
import * as S from './Style';

const Footer = () => {
  return (
    <S.Container>
      <S.Info>
        <h6>(주)호두랩스</h6>
        <p>
          대표 : 김민우 | 사업자등록번호 : 431-88-01287{' '}
          <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4318801287">사업자 정보 조회</a>
          <br />
          서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
          <br />
          제주특별시 서귀포시 중정로 86, 304
          <br />
          통신판매업 신고번호 : 2019-서울강남-00301호
        </p>
        <p>© Hodoo Labs. ALL RIGHTS RESERVED</p>
      </S.Info>
      <S.LinkContainer>
        <div>
          <p>
            <a href="/#">고객센터</a>
            <a href="/#">채팅상담</a>
          </p>
          <p>
            <a href="/#">이용약관</a>
            <a href="/#" className="privacyPolicy">
              개인정보 처리방침
            </a>
            <a href="/#">환불정책</a>
          </p>
        </div>
        <div>
          <a href="/#">
            <img src={IMG_PATHS.FOOTER_INSTAGRAM} alt="instagram" width="42.9px" />
          </a>
          <a href="/#">
            <img src={IMG_PATHS.FOOTER_CAFE} alt="naver cafe" width="42.9px" />
          </a>
        </div>
      </S.LinkContainer>
    </S.Container>
  );
};

export default Footer;
