export default interface IProductCardProps {
  title: string;
  image: string;
  sizes: {
    value: number;
    selected?: boolean;
  }[];
  colors: {
    hex: string;
    selected?: boolean;
  }[];
  brand?: string;
};
