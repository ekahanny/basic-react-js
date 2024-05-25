import { Fragment } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

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

const email = localStorage.getItem("email");

function ProductsPage() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="mr-5">{email}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
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
    </Fragment>
  );
}

export default ProductsPage;
