import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp. 1.000.000",
    imgSrc:
      "https://images.thdstatic.com/productImages/95aafc79-0898-4195-88f4-8d402b93ca83/svn/shoes-for-crews-soft-toe-shoes-67730-s7h-40_600.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ratione eum! Amet qui temporibus officia sit accusamus nisi soluta excepturi. Fuga sit consectetur repellendus dolorum cupiditate exercitationem asperiores vel hic.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: "Rp. 17.000.000",
    imgSrc:
      "https://images.thdstatic.com/productImages/95aafc79-0898-4195-88f4-8d402b93ca83/svn/shoes-for-crews-soft-toe-shoes-67730-s7h-40_600.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ratione eum! ",
  },
];

function ProductsPage() {
  return (
    <div className="flex justify-center py-5 px-4">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header imgSrc={product.imgSrc} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
}

export default ProductsPage;
