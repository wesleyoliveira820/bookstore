import { FC } from "react";
import bannerImage from "@assets/banner.png";

import { Container, BannerImage, BannerContent } from "./styles";

const Banner: FC = () => (
  <Container>
    <BannerContent>
      <div>
        <p>Encontre os melhores livros</p>
        <span>Com os melhores preços</span>
      </div>
    </BannerContent>
    <BannerImage image={bannerImage} />
  </Container>
);

export default Banner;
