import CardProduct from "../components/fragments/CardProduct";

function ProductsPage() {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header imgSrc="https://images.thdstatic.com/productImages/95aafc79-0898-4195-88f4-8d402b93ca83/svn/shoes-for-crews-soft-toe-shoes-67730-s7h-40_600.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
          ratione eum! Amet qui temporibus officia sit accusamus nisi soluta
          excepturi. Fuga sit consectetur repellendus dolorum cupiditate
          exercitationem asperiores vel hic.
        </CardProduct.Body>
        <CardProduct.Footer></CardProduct.Footer>
      </CardProduct>
    </div>
  );
}

export default ProductsPage;
