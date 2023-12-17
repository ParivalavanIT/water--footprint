const categories = {
  Food: [
    {
      name: "Bread",
      image: "/assets/bread.png",
      waterFootprint: { average: 255, range: "180-330 liters" },
      details:
        "Depends on grain type and production methods. Organic wheat generally requires more water.",
    },
    {
      name: "Jam",
      waterFootprint: { average: 350, range: "200-500 liters" },
      details:
        "Varies depending on fruit content and processing. Jams with high water content like strawberry will have a higher footprint than those with denser fruits like mango.",
      image: "/assets/jam.png",
    },
    {
      name: "Apple",
      image: "/assets/apple.png",
      waterFootprint: { average: 95, range: "70-120 liters" },
      details:
        "Water use can vary depending on apple variety, climate, and irrigation practices.",
    },
    {
      name: "Carrot",
      image: "/assets/carrot.png",
      waterFootprint: { average: 40, range: "30-50 liters" },
      details:
        "Commonly grown in various climates, impacting water requirements.",
    },
    {
      name: "Idly",
      image: "/assets/idly.png",
      waterFootprint: { average: 70, range: "50-90 liters" },
      details:
        "Water usage varies based on rice and lentil quantities and production methods.",
    },
  ],
  Gadgets: [
    {
      name: "Smartphone",
      image: "/assets/smart phone.png",
      waterFootprint: { average: 400, range: "350-450 liters" },
      details:
        "Accounts for water used in mining, manufacturing, and assembly.",
    },
    {
      name: "TV",
      image: "/assets/tv.png",
      waterFootprint: { average: 600, range: "500-700 liters" },
      details:
        "Larger screens and higher resolution TVs typically have higher footprints.",
    },
    {
      name: "Watch",
      image: "/assets/watch.png",
      waterFootprint: { average: 250, range: "200-300 liters" },
      details: "Varies depending on materials and production complexity.",
    },
    {
      name: "Speaker",
      image: "/assets/speaker.png",
      waterFootprint: { average: 180, range: "150-220 liters" },
      details: "Water usage encompasses materials and assembly processes.",
    },
  ],
  Cosmetics: [
    {
      name: "Toner",
      image: "/assets/toner.png",
      waterFootprint: { average: 60, range: "50-70 liters" },
      details: "Varies depending on ingredients and production processes.",
    },
    {
      name: "Moisturizer",
      image: "/assets/moisturizer.png",
      waterFootprint: { average: 100, range: "80-120 liters" },
      details:
        "Water-based moisturizers have a higher footprint than oil-based ones.",
    },
    {
      name: "Serum",
      image: "/assets/serum.png",
      waterFootprint: { average: 70, range: "60-80 liters" },
      details:
        "Concentrated formulas often have a higher water footprint per unit volume.",
    },
    {
      name: "Lipbalm",
      image: "/assets/lipbalm.png",
      waterFootprint: { average: 35, range: "30-40 liters" },
      details: "Water usage varies based on ingredients and packaging.",
    },
  ],
  Stationery: [
    {
      name: "Paper",
      image: "/assets/paper.png",
      waterFootprint: { average: 10, range: "5-15 liters" },
      details: "Depends on production processes and pulp sources.",
    },
    {
      name: "Pen",
      image: "/assets/pen.png",
      waterFootprint: { average: 7, range: "5-10 liters" },
      details: "Water usage encompasses material and assembly methods.",
    },
    {
      name: "Eraser",
      image: "/assets/eraser.png",
      waterFootprint: { average: 4, range: "3-5 liters" },
      details: "Varies based on materials and manufacturing methods.",
    },
    {
      name: "Scale",
      image: "/assets/scale.png",
      waterFootprint: { average: 9, range: "8-10 liters" },
      details: "Water usage depends on materials and production methods.",
    },
  ],
  Fabric: [
    {
      name: "Denim",
      image: "/assets/denim.png",
      waterFootprint: { average: 1500, range: "1200-1800 liters" },
      details:
        "Water-intensive during cotton cultivation and dyeing processes.",
    },
    {
      name: "Rayon",
      image: "/assets/rayon.png",
      waterFootprint: { average: 800, range: "600-1000 liters" },
      details:
        "Water usage in production varies based on manufacturing methods.",
    },
    {
      name: "Polyester",
      image: "/assets/polyester.png",
      waterFootprint: { average: 900, range: "700-1100 liters" },
      details:
        "Synthetic fiber production requires water for raw material extraction and processing.",
    },
    {
      name: "Cotton",
      image: "/assets/cotton.png",
      waterFootprint: { average: 2700, range: "2200-3200 liters" },
      details:
        "Cotton cultivation is water-intensive, especially in arid regions without sustainable irrigation.",
    },
  ],
  Hygiene: [
    {
      name: "Toothpaste",
      image: "/assets/toothpaste.png",
      waterFootprint: { average: 50, range: "40-60 liters" },
      details: "Water usage includes ingredients and packaging manufacturing.",
    },
    {
      name: "Shampoo",
      image: "/assets/shampoo.png",
      waterFootprint: { average: 80, range: "60-100 liters" },
      details: "Varies based on formula and bottle size.",
    },
    {
      name: "Soap",
      image: "/assets/soap.png",
      waterFootprint: { average: 30, range: "20-40 liters" },
      details: "Depends on ingredients and production methods.",
    },
    {
      name: "Deodorant",
      image: "/assets/deodorant.png",
      waterFootprint: { average: 70, range: "50-90 liters" },
      details: "Includes water used in formulation and packaging.",
    },
  ],
  Kitchen: [
    {
      name: "Coffee",
      image: "/assets/coffee.png",
      waterFootprint: { average: 140, range: "100-180 liters" },
      details: "Water usage includes cultivation, processing, and brewing.",
    },
    {
      name: "Tea",
      image: "/assets/tea.png",
      waterFootprint: { average: 30, range: "20-40 liters" },
      details: "Varies based on type and preparation.",
    },
    {
      name: "Milk",
      image: "/assets/milk.png",
      waterFootprint: { average: 1000, range: "800-1200 liters" },
      details: "Includes water used in dairy farming and processing.",
    },
    {
      name: "Bottled Water",
      image: "/assets/bottled water.png",
      waterFootprint: { average: 5, range: "3-8 liters" },
      details: "Water usage includes packaging and bottling processes.",
    },
  ],
  Household: [
    {
      name: "Laundry Detergent",
      image: "/assets/detergent.png",
      waterFootprint: { average: 100, range: "80-120 liters" },
      details: "Includes water used in production and dilution.",
    },
    {
      name: "Cleaning Spray",
      image: "/assets/spray.png",
      waterFootprint: { average: 40, range: "30-50 liters" },
      details: "Varies based on ingredients and packaging.",
    },
    {
      name: "Tissue Paper",
      image: "/assets/tissue.png",
      waterFootprint: { average: 10, range: "5-15 liters" },
      details: "Depends on production methods and material sources.",
    },
    {
      name: "Dish Soap",
      image: "/assets/dish soap.png",
      waterFootprint: { average: 60, range: "50-70 liters" },
      details: "Water usage includes formulation and packaging.",
    },
  ],
};

module.exports = categories;
