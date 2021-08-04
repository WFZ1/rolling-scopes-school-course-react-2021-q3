import './product-cards-field.scss';
import React from 'react';
import ProductCard from '../product-card/product-card';
import IProductCardProps from '../../types/product-card-props.type';

export default class ProductCardsField extends React.Component<{ productsProps: IProductCardProps[] }> {

  private setImagePath(): IProductCardProps[] {
    return this.props.productsProps.map((productProps) => ({
      ...productProps,
      image: `assets/images/products/${ productProps.image }`
    }));
  }

  private static addCards(productsProps: IProductCardProps[]): JSX.Element[] {
    return productsProps.map((productProps) => <ProductCard key={ productProps.title } productProps={ productProps } />);
  }

  render(): JSX.Element {
    const updProductsProps = this.setImagePath();
    const cards = ProductCardsField.addCards(updProductsProps);

    return (
      <div className="product-cards-field">
        { cards }
      </div>
    );
  }
}
