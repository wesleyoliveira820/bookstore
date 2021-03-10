import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import { formatPrice } from "@utils/fotmat";
import { IProductProps } from "@interfaces/products";
import axios from "@services/axios";
import Header from "@components/Header";

import Banner from "./Banner";
import CardProduct from "./CardProduct";

import { Container, Content, ProductsList } from "./styles";

interface IResponseServerSide {
  products: IProductProps[];
}

const Products: NextPage<IResponseServerSide> = ({ products }) => (
  <Container>
    <Head>
      <title>Bookstore - Os melhores livros com os melhores preços</title>
    </Head>
    <Header />
    <Banner />
    <Content>
      <ProductsList>
        {products?.map((product) => (
          <CardProduct
            key={product.id}
            cover_url={product.cover_url}
            title={product.title}
            unit_price={formatPrice(parseFloat(product.unit_price))}
          />
        ))}
      </ProductsList>
    </Content>
  </Container>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: products } = await axios.get("/products");

  return {
    props: { products },
  };
};

export default Products;
