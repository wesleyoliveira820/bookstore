import styled from "styled-components";

interface IBannerImageProps {
  readonly image: string;
}

export const Container = styled.div`
  max-width: 1126px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 32px auto;
  height: 245px;
  border-radius: 5px;
`;

export const BannerContent = styled.div`
  height: 100%;
  max-width: 385px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-radius: 5px 0 0 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    max-width: 242px;
    width: 100%;
  }

  p {
    font-size: 28px;
    line-height: 36px;
    color: ${(props) => props.theme.colors.text.secondary};
    font-weight: bold;
    margin-bottom: 6px;
  }

  span {
    font-size: 21px;
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const BannerImage = styled.div<IBannerImageProps>`
  background-image: ${(props) => `url(${props.image})`};
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 5px 5px 0;
`;
