import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";
import getProducts from "../services/product.service";
import { getUsername } from "../services/auth.service";

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  // Mengambil data cart dari localstorage
  // useEffect ini akan dijalankan 1x saat component pertama kali di-mount/dirender
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // mengambil username yang tersedia pada hasil decoded token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/";
    }
  }, []);

  // GET products data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // useEffect ini akan dijalankan setiap kali cart berubah
  // mengatur total price & meletakannya pada localStorage
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        if (product) {
          return acc + product.price * item.qty;
        }
        return acc;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    /* dependency -> dependency array cart & products akan memberitahu
     react bahwa useEffect ini hanya perlu dijalankan ulang
    jika array cart & products berubah. */
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      console.log("id", id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        console.log("Updated cart: ", updatedCart);
        return updatedCart;
      } else {
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

  //useRef
  /* Perbedaan antara useState dan useRef, useState akan
  lgsg merender (memperbaharui) data yang berubah. Sedangkan
  useRef tdk lgsg mengubah tampilannya */
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // useRef juga dpt bekerja layaknya DOM Manipulation
  // membuat perkondisian (total price hny akan muncul jika ada data pada cart)
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  // akan menampilkan cart jika ada isi dari cart tersebut
  const cartRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      cartRef.current.style.display = "block";
    } else {
      cartRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      {/* NAVBAR */}
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <p className="mr-5">{username}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      {/* PRODUCTS */}
      <div className="flex justify-center py-5 px-4">
        <div className="w-4/6 flex flex-wrap">
          {/* menampilkan data product dari array products */}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  imgSrc={product.image}
                  alt={product.title}
                />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>

        {/* CART */}
        <div className="w-2/6" ref={cartRef}>
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
              {products.length > 0 &&
                cart.map((item) => {
                  console.log("Rendering item: ", item);
                  console.log("cart", cart);
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  if (!product) return null;
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        $
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        $
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    $
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
