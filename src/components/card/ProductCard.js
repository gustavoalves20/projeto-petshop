function ProductCard({ title, price, img }) {
  return (
    <div className="shadow rounded-lg flex justify-center items-center flex-col w-64 h-96">
      <div className="bg-meuBackground">
        <img src={img} alt={title} className="h-64" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 font-semibold">R$ {price}</p>
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;