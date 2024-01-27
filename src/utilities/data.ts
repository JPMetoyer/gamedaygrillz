export type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      desc: "A timeless favorite, our Classic Cheeseburger features juicy beef patty, melted cheddar, and crisp lettuce, all hugged by a soft, toasted bun.",
      img: "/images/burger.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Bacon Deluxe",
      desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      img: "/images/bacon.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Veggie Delight",
      desc: "A grilled vegetable patty made from black beans, corn, and bell peppers, topped with lettuce, tomato, and a spicy vegan mayo, served on a whole wheat bun.",
      img: "/images/veggie.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "BBQ Brisket",
      desc: "A beef patty topped with slow-cooked BBQ beef brisket, crispy onion rings, and coleslaw, served on a toasted pretzel bun.",
      img: "/images/bbq.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Mushroom Swiss Burger",
      desc: "A beef patty topped with sautéed mushrooms, melted Swiss cheese, and a creamy garlic aioli, served on a ciabatta roll.",
      img: "/images/mushroom.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Spicy Jalapeno Burger",
      desc: "A beef patty topped with spicy jalapeños, pepper jack cheese, avocado, and chipotle mayo, served on a toasted spicy cheese bun.",
      img: "/images/spicy.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Teriyaki Pineapple Burger",
      desc: "A beef patty glazed with teriyaki sauce, topped with a grilled pineapple ring, Asian slaw, and wasabi mayo, served on a Hawaiian sweet bun.",
      img: "/images/teriyaki.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Breakfast Burger",
      desc: " A beef patty topped with a fried egg, crispy bacon, hash browns, and cheddar cheese, served with ketchup and mayo on a toasted English muffin.",
      img: "/images/breakfast.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Greek Lamb Burger",
      desc: "A seasoned lamb patty topped with feta cheese, tzatziki sauce, cucumber, red onion, and tomato, served on a warm pita bread.",
      img: "/images/lamb.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Blue Cheese & Walnut Burger",
      desc: "A beef patty topped with creamy blue cheese, caramelized onions, and crunchy walnuts, served with a balsamic glaze on a toasted artisan bun.",
      img: "/images/bleu.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      desc: "A timeless favorite, our Classic Cheeseburger features juicy beef patty, melted cheddar, and crisp lettuce, all hugged by a soft, toasted bun.",
      img: "/images/burger.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Bacon Deluxe",
      desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      img: "/images/bacon.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Veggie Delight",
      desc: "A grilled vegetable patty made from black beans, corn, and bell peppers, topped with lettuce, tomato, and a spicy vegan mayo, served on a whole wheat bun.",
      img: "/images/veggie.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "BBQ Brisket",
      desc: "A beef patty topped with slow-cooked BBQ beef brisket, crispy onion rings, and coleslaw, served on a toasted pretzel bun.",
      img: "/images/bbq.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Mushroom Swiss Burger",
      desc: "A beef patty topped with sautéed mushrooms, melted Swiss cheese, and a creamy garlic aioli, served on a ciabatta roll.",
      img: "/images/mushroom.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Spicy Jalapeno Burger",
      desc: "A beef patty topped with spicy jalapeños, pepper jack cheese, avocado, and chipotle mayo, served on a toasted spicy cheese bun.",
      img: "/images/spicy.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Teriyaki Pineapple Burger",
      desc: "A beef patty glazed with teriyaki sauce, topped with a grilled pineapple ring, Asian slaw, and wasabi mayo, served on a Hawaiian sweet bun.",
      img: "/images/teriyaki.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Breakfast Burger",
      desc: " A beef patty topped with a fried egg, crispy bacon, hash browns, and cheddar cheese, served with ketchup and mayo on a toasted English muffin.",
      img: "/images/breakfast.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Greek Lamb Burger",
      desc: "A seasoned lamb patty topped with feta cheese, tzatziki sauce, cucumber, red onion, and tomato, served on a warm pita bread.",
      img: "/images/lamb.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Blue Cheese & Walnut Burger",
      desc: "A beef patty topped with creamy blue cheese, caramelized onions, and crunchy walnuts, served with a balsamic glaze on a toasted artisan bun.",
      img: "/images/bleu.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 10,
      title: "Buffalo Chicken Burger",
      desc: "A spicy ground chicken patty coated in buffalo sauce, topped with blue cheese crumbles, celery leaves, and ranch dressing, served on a soft potato roll. This burger combines the tangy, spicy flavors of buffalo wings with the heartiness of a burger.",
      img: "/images/buffalo.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 11,
      title: "Seafood Sensation Burger",
      desc: "A seasoned shrimp and crab patty, lightly fried, topped with a tangy remoulade sauce, fresh arugula, and sliced tomatoes, served on a toasted brioche bun. This burger offers a delightful seafood twist, perfect for those who enjoy the flavors of the ocean.",
      img: "/images/seafood.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    }
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Burger",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/images/burger.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/images/m1.png",
      color: "white",
    },
   
  ];