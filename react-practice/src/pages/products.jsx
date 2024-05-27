import { Fragment, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    imgSrc:
      "https://images.thdstatic.com/productImages/95aafc79-0898-4195-88f4-8d402b93ca83/svn/shoes-for-crews-soft-toe-shoes-67730-s7h-40_600.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ratione eum! Amet qui temporibus officia sit accusamus nisi soluta excepturi. Fuga sit consectetur repellendus dolorum cupiditate exercitationem asperiores vel hic.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 17000000,
    imgSrc:
      "https://images.thdstatic.com/productImages/95aafc79-0898-4195-88f4-8d402b93ca83/svn/shoes-for-crews-soft-toe-shoes-67730-s7h-40_600.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ratione eum! ",
  },
];

const email = localStorage.getItem("email");

function ProductsPage() {
  const [cart, setCart] = useState([{}]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      // mencocokkan apakah id dari product yg ditambahkan sudah ada didalam prevCart
      const existingItem = prevCart.find((item) => item.id === id);
      console.log("id", id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          // jika ada, maka kuantitas akan bertambah
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        console.log("Updated cart: ", updatedCart);
        return updatedCart;
      } else {
        // jika tidak ada, maka akan ditambahkan id baru pada prevCart dgn kuantitas default 1
        return [
          ...prevCart,
          {
            id,
            qty: 1,
          },
        ];
      }
    });
  };

  return (
    <Fragment>
      {/* NAVBAR */}
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="mr-5">{email}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      {/* PRODUCTS */}
      <div className="flex justify-center py-5 px-4">
        <div className="w-4/6 flex flex-wrap">
          {/* menampilkan data product dari array products */}
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header imgSrc={product.imgSrc} alt={product.title} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                /* mengirim id dari array products
                   agar id tsb dpt di passing sebagai
                   argument pada handleAddToCart */
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        {/* CART */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                // item dari state cart, product dari array products
                console.log("Rendering item: ", item);
                console.log("cart", cart);
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (!product) return null;
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
