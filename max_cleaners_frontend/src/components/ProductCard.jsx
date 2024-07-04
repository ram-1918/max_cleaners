import { Link } from "react-router-dom";
import { plusIcon, rightArrowIcon } from "../base/icons";
import PriceSpan from "./PriceSpan";

const getImageUrl = (imgPath) => require(`../assets/images/products/${imgPath}`);

export default function ProductCard({
  product,
  bgcolor,
}) {
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="group/item h-52 shadow-md rounded-xl border flex flex-col justify-start items-start space-y-2 p-0 overflow-hidden"
    >
        <img className="w-full h-32" src={getImageUrl(product.image)} alt="apparel type" />
        <div className="w-full flex justify-between items-center p-2 bg-red-0">
            <div className="flex flex-col justify-start items-start">
                <span className="text-md font-medium capitalize text-ellipsis">{product.name}</span>
                <PriceSpan amount={product.price} />
            </div>
            <Link to={`./add-ons/${product.id}`}  className="text-xl">
                {plusIcon}
            </Link>
        </div>
    </div>
  );
}

/* References
1. https://suitsupply.com/en-us/men/suits/mid-grey-herringbone-tailored-fit-havana-suit/P6441.html?nbt=nb%3Aadwords%3Ax%3A20617172830%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=8015150&nb_pc=online&nb_pi=P644107&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gclid=CjwKCAjwvvmzBhA2EiwAtHVrb2xMZi4jfkmfyiDpwZuZoAoeMJ0zVjHH6sF09PRwLfLx8RQcODHgcRoCA2kQAvD_BwE

*/