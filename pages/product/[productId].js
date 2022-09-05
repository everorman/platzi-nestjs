import Link from "next/link";

import { useRouter } from "next/router";

const ProductItem = () => {

  const { query: { productId } } = useRouter();
  return (
    <div>
      <h2>EL producto es: {productId}</h2>
    </div>
  );
};

export default ProductItem;