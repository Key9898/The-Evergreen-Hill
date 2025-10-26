import DinnerImg from '../../assets/Dining&Bar/dinner_dining_bar.jpg'

const posts = [
  {
    id: 1,
    title: 'Appetizers',
    description:
      'A delightful beginning to your culinary journey. Our appetizers feature a creative blend of fresh, local ingredients and international flavors, perfect for sharing or savoring solo.',
    imageAlt: 'Appetizers',
    imageUrl:  DinnerImg,
    category: { title: 'Dinner' },
    time: { time: 'Served daily from 06:00 PM to 10:00 PM' },
    menu: [
      { no: 1, name: 'Seared Scallops', price: '18,000 MMK', },
      { no: 2, name: 'Beef Carpaccio', price: '17,000 MMK', },
      { no: 3, name: 'Tuna Tartare', price: '16,500 MMK', },
      { no: 4, name: 'Burrata & Prosciutto', price: '16,000 MMK', },
      { no: 5, name: 'Shan Avocado Salad', price: '9,500 MMK', },
      { no: 6, name: 'Crispy Calamari', price: '9,500 MMK', },
      { no: 7, name: 'Shrimp Cocktail', price: '14,000 MMK', },
      { no: 8, name: 'Vegetable Terrine', price: '9,000 MMK', },
      { no: 9, name: 'French Onion Soup', price: '9,000 MMK', },
      { no: 10, name: 'Lobster Bisque', price: '15,000 MMK', },
    ],
  },
  {
    id: 2,
    title: 'Main Courses',
    description:
      'The centerpiece of your dining experience. Indulge in our Head Chef’s signature creations, where the finest local and imported ingredients are transformed into exquisite, satisfying dishes.',  
    imageAlt: 'Main Courses',
    imageUrl:  DinnerImg,
    category: { title: 'Dinner' },
    time: { time: 'Served daily from 06:00 PM to 10:00 PM' },
    menu: [
      { no: 1, name: 'Australian Lamb Rack', price: '35,000 MMK', },
      { no: 2, name: 'Grilled Ribeye Steak (250g)', price: '38,000 MMK', },
      { no: 3, name: 'Pan-Seared Seabass', price: '25,000 MMK', },
      { no: 4, name: 'Baked Salmon Fillet', price: '27,000 MMK', },
      { no: 5, name: 'Classic Duck Confit', price: '28,000 MMK', },
      { no: 6, name: 'Slow-Braised Beef Curry', price: '19,000 MMK', },
      { no: 7, name: 'Grilled Pork Chop', price: '18,000 MMK', },
      { no: 8, name: 'Spaghetti alle Vongole', price: '16,000 MMK', },
      { no: 9, name: 'Mushroom Risotto', price: '15,000 MMK', },
      { no: 10, name: 'Chicken Cordon Bleu', price: '17,500 MMK', },
    ],
  },
//   {
//     id: 3,
//     title: 'Light & Healthy',
//     description:
//       'Fuel your day of exploration with our fresh and wholesome options. A vibrant selection of fruits, grains, and proteins to start your morning right.',  
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     category: { title: 'Dinner' },
//     time: { time: 'Served daily from 06:00 PM to 10:00 PM' },
//     menu: [
//       { no: 1, name: 'Fresh Seasonal Fruit', price: '7,000 MMK', },
//       { no: 2, name: 'Avocado Toast', price: '9,000 MMK', },
//       { no: 3, name: 'Kalaw Greens Salad', price: '7,000 MMK', },
//       { no: 4, name: 'Green Smoothie Bowl', price: '9,500 MMK', },
//       { no: 5, name: 'Yogurt & Granola Bowl', price: '7,500 MMK', },
//       { no: 6, name: 'Hot Oatmeal Porridge', price: '6,000 MMK', },
//       { no: 7, name: 'Egg White Scramble', price: '8,500 MMK', },
//       { no: 8, name: 'Congee (Rice Porridge)', price: '6,000 MMK', },
//       { no: 9, name: 'Tofu Scramble', price: '8,000 MMK', },
//       { no: 10, name: 'Chia Seed Pudding', price: '7,500 MMK', },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Beverages',
//     description:
//       'From a robust cup of freshly brewed Shan coffee to a soothing herbal tea, find the perfect drink to awaken your senses and complement your breakfast.',  
//     imageUrl:
//       'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
//     category: { title: 'Dinner' },
//     time: { time: 'Served daily from 06:00 PM to 10:00 PM' },
//     menu: [
//       { no: 1, name: 'Freshly Brewed Shan Coffee', price: '3,000 MMK', },
//       { no: 2, name: 'Artisanal Shan Tea', price: '2,000 MMK', },
//       { no: 3, name: 'Espresso', price: '3,500 MMK', },
//       { no: 4, name: 'Americano', price: '3,500 MMK', },
//       { no: 5, name: 'Cappuccino', price: '4,000 MMK', },
//       { no: 6, name: 'Latte', price: '4,000 MMK', },
//       { no: 7, name: 'Rich Hot Chocolate', price: '4,500 MMK', },
//       { no: 8, name: 'Fresh Juices & Smoothies', price: '5,000 MMK', },
//       { no: 9, name: 'Local Herbal Infusions', price: '3,500 MMK', },
//       { no: 10, name: 'Fresh Lime & Mint Soda', price: '4,000 MMK', },
//     ],
//   },
]

interface DinnerProps {
  currentPage?: number
  postsPerPage?: number
  renderMode?: 'card'
}

export default function Dinner({ currentPage = 1, postsPerPage, renderMode }: DinnerProps) {
  const perPage = renderMode === 'card' ? 1 : (postsPerPage ?? posts.length)
  const startIndex = (currentPage - 1) * perPage
  const visiblePosts = posts.slice(startIndex, startIndex + perPage)

  if (renderMode === 'card') {
    const post = visiblePosts[0]
    if (!post) return null
    return (
      <article className="flex flex-col items-start justify-between rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6">
        {/* image + content */}
        <div className="relative w-full group overflow-hidden rounded-md">
          <img
            alt={post.imageAlt}
            src={post.imageUrl}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="aspect-video w-full rounded-md shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
        </div>
        <div className="flex max-w-xl grow flex-col justify-between">
          <div className="mt-8 flex items-center gap-x-4 text-base">
            <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
              {post.category.title}
            </span>
            {post.time?.time && (
              <span className="text-slate-500">{post.time.time}</span>
            )}
          </div>
          <div className="group relative grow">
            <h3 className="mt-3 text-xl font-semibold text-teal-700">
              {post.title}
            </h3>
            <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
          </div>
        </div>

        {/* Menu Table */}
        {post.menu && post.menu.length > 0 && (
          <div className="mt-6 w-full overflow-x-auto">
            <table className="relative w-full min-w-full table-fixed divide-y divide-slate-300">
              <colgroup>
                <col className="w-14 sm:w-16" />
                <col />
                <col className="w-24 sm:w-28" />
              </colgroup>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-16 py-3.5 pr-2 pl-0 text-left text-base font-semibold text-teal-600 sm:pl-0"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="pl-2 pr-3 py-3.5 text-left text-base font-semibold text-teal-600"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-3 pr-0 text-right text-base font-semibold text-teal-600"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {post.menu.map((item) => (
                  <tr key={item.no}>
                    <td className="w-16 py-4 pr-2 pl-0 text-sm font-medium whitespace-nowrap text-slate-900 sm:pl-0">
                      {item.no}
                    </td>
                    <td className="pl-2 pr-3 py-4 text-sm whitespace-nowrap text-slate-700">
                      {item.name}
                    </td>
                    <td className="py-4 pl-3 pr-0 text-sm whitespace-nowrap text-right text-slate-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </article>
    )
  }

  return (
    <div className="bg-white">
      {/* Menues grid */}
      <div className="py-16 pt-0 pb-16 lg:py-16 lg:pt-0 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12">
            {visiblePosts.map((post) => (
              <article
                key={post.id}
                className={`flex flex-col items-start justify-between ${
                  post.id === 1
                    ? 'lg:col-start-1 lg:col-span-6'
                    : post.id === 2
                    ? 'lg:col-start-7 lg:col-span-6'
                    : post.id === 3
                    ? 'lg:col-start-1 lg:col-span-6 lg:row-start-2'
                    : post.id === 4
                    ? 'lg:col-start-7 lg:col-span-6 lg:row-start-2'
                    : ''
                } rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6`}
              >
                {/* image + content */}
                <div className="relative w-full group overflow-hidden rounded-md">
                  <img
                    alt={post.imageAlt}
                    src={post.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="aspect-video w-full rounded-md shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
                </div>
                <div className="flex max-w-xl grow flex-col justify-between">
                  <div className="mt-8 flex items-center gap-x-4 text-base">
                    <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
                      {post.category.title}
                    </span>
                    {post.time?.time && (
                      <span className="text-slate-500">{post.time.time}</span>
                    )}
                  </div>
                  <div className="group relative grow">
                    <h3 className="mt-3 text-xl font-semibold text-teal-700">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
                  </div>
                </div>

                {/* Menu Table */}
            {post.menu && post.menu.length > 0 && (
              <div className="mt-6 w-full overflow-x-auto">
                <table className="relative w-full min-w-full table-fixed divide-y divide-slate-300">
                  <colgroup>
                    <col className="w-14 sm:w-16" />
                    <col />
                    <col className="w-24 sm:w-28" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="w-16 py-3.5 pr-2 pl-0 text-left text-base font-semibold text-teal-600 sm:pl-0"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="pl-2 pr-3 py-3.5 text-left text-sm font-semibold text-teal-600"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-3 pr-0 text-right text-base font-semibold text-teal-600"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {post.menu.map((item) => (
                      <tr key={item.no}>
                        <td className="w-16 py-4 pr-2 pl-0 text-sm font-medium whitespace-nowrap text-slate-900 sm:pl-0">
                          {item.no}
                        </td>
                        <td className="pl-2 pr-3 py-4 text-sm whitespace-nowrap text-slate-700">
                          {item.name}
                        </td>
                        <td className="py-4 pl-3 pr-0 text-sm whitespace-nowrap text-right text-slate-700">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
    </div>  
    </div>
)}