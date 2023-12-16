const categories = {
  Food: [
    {
      name: "Bread",
      waterFootprint: { average: 255, range: "180-330 liters" },
      details:
        "Depends on grain type and production methods. Organic wheat generally requires more water.",
    },
    {
      name: "Jam",
      waterFootprint: { average: 350, range: "200-500 liters" },
      details:
        "Varies depending on fruit content and processing. Jams with high water content like strawberry will have a higher footprint than those with denser fruits like mango.",
    },
    {
      name: "Apple",
      waterFootprint: { average: 95, range: "70-120 liters" },
      details:
        "Water use can vary depending on apple variety, climate, and irrigation practices.",
    },
    {
      name: "Carrot",
      waterFootprint: { average: 40, range: "30-50 liters" },
      details:
        "Commonly grown in various climates, impacting water requirements.",
    },
    {
      name: "Idly",
      waterFootprint: { average: 70, range: "50-90 liters" },
      details:
        "Water usage varies based on rice and lentil quantities and production methods.",
    },
  ],
  Gadgets: [
    {
      name: "Smartphone",
      waterFootprint: { average: 400, range: "350-450 liters" },
      details:
        "Accounts for water used in mining, manufacturing, and assembly.",
    },
    {
      name: "TV",
      waterFootprint: { average: 600, range: "500-700 liters" },
      details:
        "Larger screens and higher resolution TVs typically have higher footprints.",
    },
    {
      name: "Watch",
      waterFootprint: { average: 250, range: "200-300 liters" },
      details: "Varies depending on materials and production complexity.",
    },
    {
      name: "Speaker",
      waterFootprint: { average: 180, range: "150-220 liters" },
      details: "Water usage encompasses materials and assembly processes.",
    },
  ],
  Cosmetics: [
    {
      name: "Toner",
      waterFootprint: { average: 60, range: "50-70 liters" },
      details: "Varies depending on ingredients and production processes.",
    },
    {
      name: "Moisturizer",
      waterFootprint: { average: 100, range: "80-120 liters" },
      details:
        "Water-based moisturizers have a higher footprint than oil-based ones.",
    },
    {
      name: "Serum",
      waterFootprint: { average: 70, range: "60-80 liters" },
      details:
        "Concentrated formulas often have a higher water footprint per unit volume.",
    },
    {
      name: "Lipbalm",
      waterFootprint: { average: 35, range: "30-40 liters" },
      details: "Water usage varies based on ingredients and packaging.",
    },
  ],
  Stationery: [
    {
      name: "Paper",
      waterFootprint: { average: 10, range: "5-15 liters" },
      details: "Depends on production processes and pulp sources.",
    },
    {
      name: "Pen",
      waterFootprint: { average: 7, range: "5-10 liters" },
      details: "Water usage encompasses material and assembly methods.",
    },
    {
      name: "Eraser",
      waterFootprint: { average: 4, range: "3-5 liters" },
      details: "Varies based on materials and manufacturing methods.",
    },
    {
      name: "Scale",
      waterFootprint: { average: 9, range: "8-10 liters" },
      details: "Water usage depends on materials and production methods.",
    },
  ],
  Fabric: [
    {
      name: "Denim",
      waterFootprint: { average: 1500, range: "1200-1800 liters" },
      details:
        "Water-intensive during cotton cultivation and dyeing processes.",
    },
    {
      name: "Rayon",
      waterFootprint: { average: 800, range: "600-1000 liters" },
      details:
        "Water usage in production varies based on manufacturing methods.",
    },
    {
      name: "Polyester",
      waterFootprint: { average: 900, range: "700-1100 liters" },
      details:
        "Synthetic fiber production requires water for raw material extraction and processing.",
    },
    {
      name: "Cotton",
      waterFootprint: { average: 2700, range: "2200-3200 liters" },
      details:
        "Cotton cultivation is water-intensive, especially in arid regions without sustainable irrigation.",
    },
  ],
};

module.exports = categories;
