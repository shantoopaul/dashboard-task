import { Crown, Zap, Building2, PuzzleIcon } from "lucide-react";

type Category = "subscription" | "addon" | string;

interface Product {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: Category;
}

interface Props {
  products: Product[];
}

const categoryStyles: Record<string, string> = {
  subscription: "bg-blue-100 text-blue-700 border border-blue-200",
  addon: "bg-purple-100 text-purple-700 border border-purple-200",
  default: "bg-gray-100 text-gray-600 border border-gray-200",
};

const categoryLabel: Record<string, string> = {
  subscription: "Subscription",
  addon: "Add-on",
};

const iconStyles: Record<string, string> = {
  subscription: "bg-blue-50 text-blue-500",
  addon: "bg-purple-50 text-purple-500",
  default: "bg-gray-100 text-gray-400",
};

const productIcons = [Crown, Building2, Zap, PuzzleIcon];

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="col-span-1 lg:col-span-3 xl:col-span-4 row-span-9 h-full flex flex-col justify-center bg-white items-center p-4 rounded-2xl">
      <div className="flex justify-between w-full mb-4">
        <h3 className="text-xl font-medium text-gray-800">Top Products</h3>
        <button className="flex items-center gap-2 border border-green2 text-green2 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-50 transition">
          + Add Product
        </button>
      </div>
      <div className="space-y-4 w-full">
        {products.map((product, index) => {
          const Icon = productIcons[index % productIcons.length];
          const iconStyle = iconStyles[product.category] ?? iconStyles.default;

          return (
            <div key={product.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${iconStyle}`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">
                      ${product.price.toFixed(2)}
                    </span>{" "}
                    &middot; {product.sales} sales
                  </p>
                </div>
              </div>
              <span
                className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                  categoryStyles[product.category] ?? categoryStyles.default
                }`}
              >
                {categoryLabel[product.category] ?? product.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
