import React, { useState } from "react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import MenuImage from "../images/fullMenuImage.jpeg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const categories = [
    // { id: 'starters', name: 'Starters' },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "dinner", name: "Dinner" },
  ];

  // Menu items data
  const menuItems = {
    starters: [
      {
        id: 1,
        name: "Coffee",
        description:
          "Fresh vegeDelicious and aromatic vegetable bath, packed with fresh veggies and flavorful spices, perfect for a hearty meal",
        price: 30,
        image:
          "https://palatesdesire.com/wp-content/uploads/2022/07/vegetable-bath-recipe@palates-desire.jpg",
      },
      {
        id: 2,
        name: "Tea",
        description:
          "Toasted bread topped with tomatoes, fresh basil, and garlic",
        price: 10.95,
        image:
          "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1074&auto=format&fit=crop",
      },
      {
        id: 3,
        name: "Lemon Tea/Grean Tea",
        description:
          "Lightly battered squid served with lemon wedges and aioli",
        price: 14.95,
        image:
          "https://images.unsplash.com/photo-1576577445504-6af96477db52?q=80&w=1064&auto=format&fit=crop",
      },
    ],
    breakfast: [
      {
        id: 4,
        name: "Vegetable Bath",
        description:
          "Fresh vegeDelicious and aromatic vegetable bath, packed with fresh veggies and flavorful spices, perfect for a hearty meal",
        price: 30,
        image:
          "https://palatesdesire.com/wp-content/uploads/2022/07/vegetable-bath-recipe@palates-desire.jpg",
      },
      {
        id: 5,
        name: "Idly & Vada",
        description:
          "Soft, fluffy idlis and crispy golden vadas served with flavorful chutney and sambar for a perfect South Indian delight",
        price: 50,
        image:
          "https://thumbs.dreamstime.com/b/idli-vada-sambar-three-traditional-popular-south-indian-vegetarian-breakfast-lunch-items-62957608.jpg",
      },
      {
        id: 6,
        name: "Puri & Aloo Saagu",
        description:
          "Puri is a deep-fried, golden-brown Indian bread made from wheat flour, known for its light, puffy texture. Aloo Saagu is a mildly spiced South Indian potato curry with a smooth, slightly chunky consistency, often flavored with mustard seeds, curry leaves, and coconut.",
        price:40,
        image:
          "https://static.toiimg.com/photo/imgsize-2838831,msid-70929067/70929067.jpg",
      },
    ],
    lunch: [
      {
        id: 7,
        name: "Rice & Sambar",
        description:
          "Rice and sambar is a classic South Indian dish where steamed rice is served with sambar, a flavorful lentil-based stew made with toor dal, tamarind, vegetables, and aromatic spices. The combination is hearty, nutritious, and often enjoyed with ghee, papad, or pickles for added taste.",
        price: 40,
        image:
          "https://media.istockphoto.com/id/481149282/photo/south-indian-food.jpg?s=612x612&w=0&k=20&c=w43naq0743XDvzCi5FW_ROvzw4_KaCkuam16sfy3hTc=",
      },
      {
        id: 8,
        name: "Gourmet Burger",
        description:
          "Angus beef patty with aged cheddar, caramelized onions, and special sauce",
        price: 16.95,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1299&auto=format&fit=crop",
      },
      {
        id: 9,
        name: "Mediterranean Plate",
        description: "Hummus, falafel, tabbouleh, and warm pita bread",
        price: 14.95,
        image:
          "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1064&auto=format&fit=crop",
      },
    ],
    dinner: [
      {
        id: 10,
        name: "Filet Mignon",
        description:
          "Prime beef tenderloin with red wine reduction and truffle mashed potatoes",
        price: 32.95,
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1169&auto=format&fit=crop",
      },
      {
        id: 11,
        name: "Seafood Risotto",
        description:
          "Creamy Arborio rice with shrimp, scallops, and seasonal vegetables",
        price: 26.95,
        image:
          "https://images.unsplash.com/photo-1633436374942-1efe197bec55?q=80&w=1470&auto=format&fit=crop",
      },
      {
        id: 12,
        name: "Eggplant Parmesan",
        description:
          "Layers of breaded eggplant, marinara sauce, and melted mozzarella",
        price: 19.95,
        image:
          "https://images.unsplash.com/photo-1625944525533-473f1b3d54eb?q=80&w=1470&auto=format&fit=crop",
      },
    ],
  };

  return (
    <>
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Reveal>
              <span className="section-subtitle">Our Menu</span>
              {/* <h2 className="section-title text-3xl md:text-4xl">
              Check Our <span className="text-restaurant-red">Yummy Menu</span>
            </h2> */}
            </Reveal>
          </div>

          {/* Menu Categories */}
          <Reveal animation="fade-up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-300 ${
                    activeCategory === category.id
                      ? "bg-restaurant-red text-white"
                      : "bg-white text-restaurant-dark hover:bg-restaurant-red hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealGroup>
              {menuItems[activeCategory].map((item, index) => (
                <Reveal key={item.id} animation="fade-up" className="h-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full hover:shadow-lg transition-300">
                    <div className="h-60 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="text-restaurant-red font-bold">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-restaurant-text">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
      <section id="menu" className="py-3 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
            <div className="bg-white p-5 rounded-lg shadow-md flex items-start">
              <img src={MenuImage} alt={"menuItem-full-card"} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
