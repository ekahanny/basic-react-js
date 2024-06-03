/* eslint-disable react/prop-types */
import Button from "../elements/button/Button";

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {/* children diisi dengan Header, Body, dan Footer */}
      {children}
    </div>
  );
}

function Header(props) {
  const { imgSrc, alt } = props;
  return (
    <a href="">
      <img
        src={imgSrc}
        alt={alt}
        className="p-3 rounded-t-lg h-60 w-full object-cover"
      />
    </a>
  );
}

function Body(props) {
  const { title, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold tracking-tight text-white mt-2">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white mt-3">
          {children.substring(0, 100)}...
        </p>
      </a>
    </div>
  );
}

function Footer(props) {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white ">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button color="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
