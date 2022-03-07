import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1397px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 150px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 97px;
`;

export const Pad = styled.img`
  position: absolute;
  border-radius: 40px;
  box-shadow: 40px 40px 30px rgba(0, 0, 0, 0.2);
`;

export const Phone = styled.img`
  position: absolute;
  top: 147px;
  left: 814px;
  border-radius: 40px;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.2);
`;
