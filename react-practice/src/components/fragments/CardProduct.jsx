import Button from "../elements/button/Button";

/* eslint-disable react/prop-types */
Button;
function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header(props) {
  const { imgSrc } = props;
  return (
    <a href="">
      <img src={imgSrc} alt="shoes" className="p-3 rounded-t-lg" />
    </a>
  );
}

function Body(props) {
  const { title, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-2xl font-semibold tracking-tight text-white mt-2">
          {title}
        </h5>
        <p className="text-m text-white mt-3">{children}</p>
      </a>
    </div>
  );
}

function Footer(props) {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white ">
        Rp.{" "}
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
