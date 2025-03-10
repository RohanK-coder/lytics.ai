const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'data:image/webp;base64,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',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzioTqNc8YbKXs_AUCaZDcqz7H3zDCihrZs5X79p2Cv9e_xCceaJtNW4Vo3lN4yuMVeeLCEPLQDVeA2CPZZfk6m_j4AqXYvYnpl8_i-1zE-yhYbngotAplgm9DI1FZY-R2za4o-ueEVQ&usqp=CAc',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDMN-L8reXp3v2D-Spe9K3z5rA9qcFRX61MwI-tdAOy75hhkM7VmxGJmMsFzbumKlodKgc2mUVR2N_aQlIsEQtXp7MlNt4w73rtDJTmYNuCb_iSLepo8F0or3l34waWKm3uHOr_js&usqp=CAc',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
  ]
  
  export default function ProductList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  
                </div>
                <button className="text-sm py-1 px-4 rounded-md bg-black text-white mt-1">Buy</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  