import imageMenu from "../assets/menu-image.jpg";

const menus = [
  {
    name: "Bread Basket",
    desc: "Assortment of fresh baked fruit breads and muffins",
    price: "5.50",
  },
  {
    name: "Honey Almond Granola with Fruits",
    desc: "Natural cereal of honey toasted oats, raisins, almonds and dates",
    price: "7.00",
  },
  {
    name: "Belgian Waffle",
    desc: "Vanilla flavored batter with malted flour",
    price: "7.50",
  },
  {
    name: "Scrambled Eggs",
    desc: "Scrambled eggs, roasted red pepper and garlic, with green onions",
    price: "7.50",
  },
  {
    name: "Blueberry Pancakes",
    desc: "With syrup, butter and lots of berries",
    price: "8.50",
  },
];

export const Menu = () => {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 py-24 px-8">
      <div>
        <h2 className="font-serif text-3xl mb-10 text-center pb-6">Our Menu</h2>
        {menus.map((item, index) => (
          <div key={index} className="mb-6 flex flex-col gap-5">
            <h3 className="font-semibold font-serif">{item.name}</h3>
            <div className="flex flex-row gap-4">
                <p className="text-sm text-gray-500">{item.desc}</p>
                <p className="text-sm text-gray-400">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <img src={imageMenu} alt="" />
    </section>
  );
};
