import React, { useState } from 'react';
import { Reveal, RevealGroup } from '@/components/ui/reveal';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  
  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' }
  ];
  
  // Menu items data
  const menuItems = {
    starters: [
      {
        id: 1,
        name: 'Crispy Spring Rolls',
        description: 'Fresh vegetable spring rolls with sweet chili dipping sauce',
        price: 12.95,
        image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1170&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'Bruschetta',
        description: 'Toasted bread topped with tomatoes, fresh basil, and garlic',
        price: 10.95,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1074&auto=format&fit=crop'
      },
      {
        id: 3,
        name: 'Calamari Fritti',
        description: 'Lightly battered squid served with lemon wedges and aioli',
        price: 14.95,
        image: 'https://images.unsplash.com/photo-1576577445504-6af96477db52?q=80&w=1064&auto=format&fit=crop'
      }
    ],
    breakfast: [
      {
        id: 4,
        name: 'Avocado Toast',
        description: 'Smashed avocado on artisan bread with poached eggs and microgreens',
        price: 14.95,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop'
      },
      {
        id: 5,
        name: 'Belgian Waffles',
        description: 'Fluffy waffles topped with fresh berries, maple syrup, and whipped cream',
        price: 12.95,
        image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=1074&auto=format&fit=crop'
      },
      {
        id: 6,
        name: 'Eggs Benedict',
        description: 'Poached eggs and Canadian bacon on English muffin with hollandaise sauce',
        price: 16.95,
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1074&auto=format&fit=crop'
      }
    ],
    lunch: [
      {
        id: 7,
        name: 'Grilled Salmon Salad',
        description: 'Fresh grilled salmon over mixed greens with citrus vinaigrette',
        price: 18.95,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1074&auto=format&fit=crop'
      },
      {
        id: 8,
        name: 'Gourmet Burger',
        description: 'Angus beef patty with aged cheddar, caramelized onions, and special sauce',
        price: 16.95,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1299&auto=format&fit=crop'
      },
      {
        id: 9,
        name: 'Mediterranean Plate',
        description: 'Hummus, falafel, tabbouleh, and warm pita bread',
        price: 14.95,
        image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1064&auto=format&fit=crop'
      }
    ],
    dinner: [
      {
        id: 10,
        name: 'Filet Mignon',
        description: 'Prime beef tenderloin with red wine reduction and truffle mashed potatoes',
        price: 32.95,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1169&auto=format&fit=crop'
      },
      {
        id: 11,
        name: 'Seafood Risotto',
        description: 'Creamy Arborio rice with shrimp, scallops, and seasonal vegetables',
        price: 26.95,
        image: 'https://images.unsplash.com/photo-1633436374942-1efe197bec55?q=80&w=1470&auto=format&fit=crop'
      },
      {
        id: 12,
        name: 'Eggplant Parmesan',
        description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella',
        price: 19.95,
        image: 'https://images.unsplash.com/photo-1625944525533-473f1b3d54eb?q=80&w=1470&auto=format&fit=crop'
      }
    ]
  };
  
  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="section-subtitle">Our Menu</span>
            <h2 className="section-title text-3xl md:text-4xl">
              Check Our <span className="text-restaurant-red">Yummy Menu</span>
            </h2>
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
                    ? 'bg-restaurant-red text-white'
                    : 'bg-white text-restaurant-dark hover:bg-restaurant-red hover:text-white'
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
                      <span className="text-restaurant-red font-bold">${item.price}</span>
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
  );
};

export default Menu;
