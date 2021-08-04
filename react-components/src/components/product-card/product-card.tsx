import './product-card.scss';
import React from 'react';
import IProductCardProps from '../../types/product-card-props.type';

export default class ProductCard extends React.Component<{
  productProps: IProductCardProps;
}> {
  private addProductSizes(selectedColor: string | undefined): JSX.Element[] {
    const { sizes } = this.props.productProps;

    return sizes.map((size) => {
      let classes = 'product-card__variant product-card__size';

      if (size.selected) {
        classes += ' product-card__variant-active';
      }

      let style;

      if (size.selected && selectedColor) {
        style = {
          style: { backgroundColor: selectedColor },
        };
      }

      return (
        <span key={size.value} className={classes} {...style}>
          {size.value}
        </span>
      );
    });
  }

  private addProductColors(): JSX.Element[] {
    const { colors } = this.props.productProps;

    return colors.map((color) => {
      let classes = 'product-card__variant product-card__color';

      if (color.selected) {
        classes += ' product-card__variant-active';
      }

      return (
        <span
          key={color.hex}
          className={classes}
          style={{ backgroundColor: color.hex }}
        ></span>
      );
    });
  }

  render(): JSX.Element {
    const product = this.props.productProps;
    const selectedColor = product.colors.find((color) => color.selected);

    return (
      <div className="product-card" data-brand={product.brand}>
        <img
          className="product-card__img"
          src={product.image}
          alt={product.title}
        />
        <div className="product-card__info">
          <h4 className="product-card__title">{product.title}</h4>
          <div className="product-card__option product-card__sizes">
            <span className="product-card__option-title">Size :</span>
            {this.addProductSizes(selectedColor?.hex)}
          </div>
          <div className="product-card__option product-card__colors">
            <span className="product-card__option-title">Color :</span>
            {this.addProductColors()}
          </div>
          <button className="product-card__btn" type="button">
            Buy Now
          </button>
        </div>
        <span
          className="product-card__figure"
          style={{ backgroundColor: selectedColor?.hex }}
        ></span>
      </div>
    );
  }
}
