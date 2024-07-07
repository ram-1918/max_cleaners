import { useNavigate, useParams } from "react-router";
import { closeIcon, minusIcon, plusIcon } from "../base/icons";
import { useEffect, useState } from "react";
import { roundToTwo, save_to_local } from "../assets/utils";
import { useRecoilState } from "recoil";
import { cartAtom, productsAtom } from "../recoil_state/atoms";
import Button from "../components/Button";
import Header from "../components/Header";
import PriceSpan from "../components/PriceSpan";

export const option_style =
  "w-32 text-center px-2 py-1 text-sm font-medium rounded-full border cursor-pointer hover:bg-gray-100 uppercase";

export const OptionsSpan = ({
  options,
  type,
  handleActiveOption,
}) => {
  const { productid } = useParams();
  const [productsData] = useRecoilState(productsAtom);
  const productItem = productsData.filter(
    (item) => item.id === parseInt(productid)
  )?.[0];
  return options.map((option, idx) => (
    <span
      onClick={() => handleActiveOption(option, type)}
      className={`${option_style} ${
        productItem[type] === option && "bg-sky-100"
      }`}
      key={idx}
    >
      {option}
    </span>
  ));
};

const styled_hr_line = (
  <div className="w-full flex justify-between items-center space-x-2">
    <div className="w-[45%] h-0 border border-sky-100"></div>
    <div className="w-2 h-2 rounded-full border bg-sky-200"></div>
    <div className="w-[45%] h-0 border border-sky-100"></div>
  </div>
);

export default function AddonsPage() {
  const navigate = useNavigate();
  const { productid } = useParams();
  const [productsData, setProductsData] = useRecoilState(productsAtom);
  const productItem = productsData.filter(
    (item) => item.id === parseInt(productid)
  )?.[0];

  const [cartData, setCartData] = useRecoilState(cartAtom);

  const handleActiveOption = (option, type) => {
    const active_option_setter = () => {
        let newdata = [...productsData];
        const newItem = {
          ...productsData[parseInt(productid) - 1],
          [type]: option,
        };
        newdata[parseInt(productid) - 1] = newItem;
        return newdata;
    };
    setProductsData(() => active_option_setter());
    save_to_local('products', active_option_setter());
  };

  const handleAddToCart = (productItem) => {
    console.log('Product Item in cart', productItem);
    const ifExists = cartData.products.findIndex(
      (item) => item.id === productItem.id
    );
    if (ifExists !== -1) {
      setCartData((prev) => ({
        total_price:
          prev.total_price +
          productItem.count * productItem.price -
          prev.products[ifExists].count * productItem.price,
        capacity:
          prev.capacity + productItem.count - prev.products[ifExists].count,
        products: prev.products.map((item, idx) => {
          if (idx === ifExists) {
            return {
              ...productItem,
              count: productItem.count,
            };
          } else {
            return item;
          }
        }),
      }));
    } else {
      setCartData((prev) => ({
        total_price: prev.total_price + productItem.count * productItem.price,
        capacity: prev.capacity + productItem.count,
        products: [...prev.products, productItem],
      }));
    }
    navigate("/home/neworder/select-items/");
  };

  return (
    <div className="w-full h-full fixed -top-2 left-0 right-0 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.3)]">
      <div
        onClick={() => {
          navigate("/home/neworder/select-items/");
        }}
        className="w-full h-full absolute"
      ></div>
      <div className="z-10 w-[45%] rounded-xl border-2 bg-white overflow-auto overscroll-contain px-10 py-5 space-y-4">
        <div className="flex justify-between items-center">
          <Header text="Select the addons needed" />
          <span
            onClick={() => {
              navigate("/home/neworder/select-items/");
            }}
            className="text-2xl cursor-pointer"
          >
            {closeIcon}
          </span>
        </div>
        <ProductDetails
          name={productItem.name}
          price={productItem.price}
          initialCount={productItem.count}
          handleActiveOption={handleActiveOption}
        />
        {styled_hr_line}
        <AddonsDetails handleActiveOption={handleActiveOption} />
        <InstructionSpan
          handleActiveOption={handleActiveOption}
          initialInstructions={productItem.instructions}
        />
        <div className="w-full flex justify-end items-center space-x-2">
          <Button
            onClick={() => {
              navigate("/home/neworder/select-items/");
            }}
            text="Cancel"
          />
          <Button
            onClick={() => handleAddToCart(productItem)}
            text="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
}

function ProductDetails({ name, price, initialCount, ...rest }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start justify-center">
        <span className="text-xl font-medium capitalize leading-6 tracking-wide">
          {name}
        </span>
        <PriceSpan amount={price} />
      </div>
      <div className="flex justify-between items-center space-x-5">
        <Counter setCount={setCount} count={count} {...rest} />
        <div className="w-24 text-right text-xl font-semibold select-none">
          <PriceSpan amount={roundToTwo(count * price)} />
        </div>
      </div>
    </div>
  );
}

function Counter({ setCount, count, handleActiveOption }) {
  useEffect(() => {
    handleActiveOption(count, "count");
  }, [count]);
  return (
    <div className="space-x-2">
      <span className="cursor-pointer" onClick={() => setCount(count + 1)}>
        {plusIcon}
      </span>
      <span className="select-none w-6 h-6 px-2 py-1 text-lg">{count}</span>
      <span
        className={`${
          count <= 1 &&
          "pointer-events-none rounded-full p-1 bg-gray-100 cursor-pointer"
        }`}
        onClick={() => setCount(count - 1)}
      >
        {minusIcon}
      </span>
    </div>
  );
}

const addons = [
  {
    id: 1,
    type: "cloth_type",
    title: "cloth type",
    options: ["regular", "wool", "silk", "cotton", "lenin", "knit", "other"],
  },
  {
    id: 2,
    type: "alteration",
    title: "alterations",
    options: ["hem", "cuff", "shrtn", "sleeve", "lenghten", "other", "none"],
  },
  {
    id: 3,
    type: "wash_type",
    title: "wash type",
    options: ["regular", "dry cleaning"],
  },
];

function AddonsDetails({ ...props }) {
  return (
    <div className="flex flex-col justify-start items-start space-y-7">
      {addons.map((item) => (
        <div
          className="flex flex-col justify-start items-start space-y-2"
          key={item.id}
        >
          <span className="text-md font-semibold after:content-['?'] capitalize">
            {item.title}
          </span>
          <div className="grid grid-flow-row grid-cols-4 gap-4">
            <OptionsSpan options={item.options} type={item.type} {...props} />
          </div>
        </div>
      ))}
      {"dry" === "dry cleaning" && (
        <div className="space-x-2">
          <span className="text-md font-semibold after:content-['?'] capitalize">
            Stains
          </span>
          <span className={option_style}>Yes</span>
          <span className={option_style}>No</span>
        </div>
      )}
    </div>
  );
}

function InstructionSpan({ handleActiveOption, initialInstructions }) {
  const [instructions, setInstructions] = useState(initialInstructions);
  useEffect(() => {
    handleActiveOption(instructions, "instructions");
  }, [instructions]);
  return (
    <div className="w-full flex flex-col justify-start items-start space-y-2">
      <span className="text-md font-semibold after:content-['?'] capitalize">
        any instructions
      </span>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full border px-2 py-1 text-md font-light outline-none"
        rows="3"
        placeholder="Please enter all the instructions for this item..."
      ></textarea>
    </div>
  );
}
