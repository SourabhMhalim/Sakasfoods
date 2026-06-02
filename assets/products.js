const productFiles = [
  "Amaranth Flour.png",
  "Black Pepper Powder 20 GM.png",
  "Cardamom Powder 10 GM.png",
  "Cinnamon Powder 10 GM.png",
  "Cloves Powder 10 GM.png",
  "Coriander Powder 100 GM.png",
  "Cumin Powder 50 GM.png",
  "Daliya (Lapsi) 500 GM.png",
  "Dhirde Flour.png",
  "Dried Date Powder 100 GM.png",
  "Dry Ginger Powder 50 GM.png",
  "Fenugreek Seed Powder 100 GM.png",
  "Finger Millet (Ragi) Flour 500 GM.png",
  "Frozen Poli.png",
  "Groundnut Powder 200 GM.png",
  "HARBHARA DAL PITH 500 GM.png",
  "Kala Goda Masala 100 GM.png",
  "Liquorice Powder 50 GM.png",
  "Lokwan Wheat Flour 1 KG - 2.png",
  "Lokwan Wheat Flour 5 KG.png",
  "Metkut 100 GM.png",
  "Nutmeg Powder 10 GM.png",
  "Nutri Mix 200 GM.png",
  "Pearl Millet (Bajra) Flour 500 GM.png",
  "Ragi Malt Powder 200 GM.png",
  "Red Chilli Powder 200 GM.png",
  "RICE ATTA 500 GM.png",
  "Sago Flour.png",
  "Samo Rice Flour.png",
  "Sattu Flour 200 GM.png",
  "Semolina (Sooji) 500 GM.png",
  "SIHOR WHEAT ATTA 1KG.png",
  "SIHOR WHEAT ATTA 5 KG.png",
  "Sorghum (Jowar) Flour 500 GM.png",
  "Soyabean Flour 200 GM.png",
  "Special Idli Rawa 500 GM.png",
  "Split Yellow Gram Flour (Roasted) 200 GM.png",
  "Tea Masala 10 GM.png",
  "Thalipeeth Bhajni Flour.png",
  "Upwas Bhajni Flour.png",
  "Vada Bharda Flour.png",
  "Water Chestnut Flour.png",
  "Yellow Maize Flour (Cornmeal) 500 GM.png"
];

function normalizeName(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/\s*-\s*\d+$/, "");
}

function prettifyName(rawName) {
  const withUnitSpacing = rawName.replace(/\b(\d+)\s*(kg|gm)\b/gi, "$1 $2");
  const lowerCased = withUnitSpacing.toLowerCase();

  return lowerCased
    .replace(/\b[a-z]+\b/g, (word) => {
      if (word === "kg" || word === "gm") {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .replace(/\s+/g, " ")
    .trim();
}

function extractPack(name) {
  const match = name.match(/\b(\d+)\s?(KG|GM)\b/i);
  return match ? `${match[1]} ${match[2].toUpperCase()}` : "Pack size on label";
}

function inferCategory(name) {
  const value = name.toLowerCase();

  if (/(masala|powder|pepper|coriander|cumin|chilli|ginger|fenugreek|cloves|cinnamon|cardamom|nutmeg|liquorice|metkut|kala goda)/.test(value)) {
    return "Spices & Masalas";
  }

  if (/(frozen poli|frozen chapati|chapati)/.test(value)) {
    return "Ready to Eat";
  }

  if (/(nutri mix|ragi malt|dried date|groundnut)/.test(value)) {
    return "Health Mixes";
  }

  if (/(bhajni|idli rawa|daliya|lapsi|dhirde|vada bharda)/.test(value)) {
    return "Special Mixes";
  }

  return "Flours & Atta";
}

function inferDescription(name) {
  const value = name.toLowerCase();

  if (/(frozen poli|chapati)/.test(value)) {
    return "Thin rolled, fully baked whole wheat chapatis ready to heat and serve.";
  }

  if (/lokwan/.test(value)) {
    return "Popular whole wheat atta known for soft rotis and daily meals.";
  }

  if (/sihor/.test(value)) {
    return "Daily-use wheat atta ideal for home-style cooking.";
  }

  if (/(sorghum|jowar)/.test(value)) {
    return "Wholesome jowar flour suited for bhakri and rotis.";
  }

  if (/(pearl millet|bajra)/.test(value)) {
    return "Bajra flour for hearty, traditional flatbreads.";
  }

  if (/(finger millet|ragi)/.test(value)) {
    return "Ragi flour for nutritious rotis, porridges, and everyday recipes.";
  }

  if (/rice atta/.test(value)) {
    return "Fine rice flour for bhakri, snacks, and batter preparations.";
  }

  if (/(yellow maize|cornmeal)/.test(value)) {
    return "Cornmeal flour for makki-style rotis and savory dishes.";
  }

  if (/amaranth/.test(value)) {
    return "Rajgira-style flour used in fasting and light recipes.";
  }

  if (/soyabean/.test(value)) {
    return "Protein-rich soy flour for fortifying daily meals.";
  }

  if (/sattu/.test(value)) {
    return "Roasted gram flour for refreshing drinks and wholesome recipes.";
  }

  if (/harbhara dal pith|split yellow gram/.test(value)) {
    return "Gram-based flour for batters, snacks, and protein-rich meals.";
  }

  if (/semolina|sooji/.test(value)) {
    return "Fine rava for upma, halwa, and multiple breakfast recipes.";
  }

  if (/special idli rawa/.test(value)) {
    return "Special idli rawa for soft idlis, appe, and steamed snacks.";
  }

  if (/dhirde flour/.test(value)) {
    return "Traditional flour blend for soft and savory dhirde.";
  }

  if (/thalipeeth bhajni/.test(value)) {
    return "Traditional multigrain bhajni mix for crisp thalipeeth.";
  }

  if (/upwas bhajni/.test(value)) {
    return "Fasting bhajni mix for quick upwas dishes.";
  }

  if (/vada bharda/.test(value)) {
    return "Convenient blend for crispy vada-style preparations.";
  }

  if (/water chestnut/.test(value)) {
    return "Singhara flour for vrat-friendly and gluten-light recipes.";
  }

  if (/samo rice flour/.test(value)) {
    return "Samo rice flour suited for fasting and light meal options.";
  }

  if (/sago flour/.test(value)) {
    return "Sabudana-style flour for fasting recipes and snacks.";
  }

  if (/daliya|lapsi/.test(value)) {
    return "Cracked wheat style ingredient for sweet and savory preparations.";
  }

  if (/nutri mix/.test(value)) {
    return "Balanced nutrition mix for family breakfast and snack recipes.";
  }

  if (/ragi malt/.test(value)) {
    return "Nutritious malt powder for milk, shakes, and porridges.";
  }

  if (/dried date powder/.test(value)) {
    return "Naturally sweet date powder for drinks and desserts.";
  }

  if (/groundnut powder/.test(value)) {
    return "Groundnut powder for chutneys, laddoos, and savory recipes.";
  }

  if (/red chilli powder/.test(value)) {
    return "Rich red chilli powder for heat and vibrant color.";
  }

  if (/tea masala/.test(value)) {
    return "Aromatic tea masala blend for flavorful chai.";
  }

  if (/kala goda masala/.test(value)) {
    return "Traditional Maharashtrian masala blend with deep aroma.";
  }

  if (/cumin powder/.test(value)) {
    return "Cumin powder for earthy flavor in curries and tempering.";
  }

  if (/coriander powder/.test(value)) {
    return "Coriander powder for balanced aroma in daily cooking.";
  }

  if (/black pepper powder/.test(value)) {
    return "Pepper powder for sharp, warming flavor in dishes.";
  }

  if (/cardamom powder/.test(value)) {
    return "Cardamom powder for sweets, milk drinks, and desserts.";
  }

  if (/cinnamon powder/.test(value)) {
    return "Cinnamon powder for warm aroma in sweet and savory recipes.";
  }

  if (/cloves powder/.test(value)) {
    return "Clove powder with strong aroma for masala and gravies.";
  }

  if (/nutmeg powder/.test(value)) {
    return "Nutmeg powder for rich aroma in desserts and spice blends.";
  }

  if (/fenugreek seed powder/.test(value)) {
    return "Fenugreek powder for pickles, masalas, and traditional recipes.";
  }

  if (/dry ginger powder/.test(value)) {
    return "Dry ginger powder for spice mixes and warming beverages.";
  }

  if (/liquorice powder/.test(value)) {
    return "Liquorice powder for herbal preparations and spice blends.";
  }

  if (/metkut/.test(value)) {
    return "Classic Maharashtrian metkut blend for rice and ghee meals.";
  }

  return "Trusted Sakas quality crafted for everyday kitchens.";
}

const products = productFiles
  .map((file) => {
    const rawName = normalizeName(file);
    const name = prettifyName(rawName);

    return {
      name,
      category: inferCategory(name),
      pack: extractPack(name),
      description: inferDescription(name),
      image: `./assets/${file}`
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");
const productStats = document.getElementById("productStats");
const emptyState = document.getElementById("emptyState");

function loadCategories() {
  const categories = ["all", ...new Set(products.map((product) => product.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category === "all" ? "All Categories" : category;
    categoryFilter.appendChild(option);
  });
}

function renderProducts(filteredProducts) {
  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    emptyState.hidden = false;
    productStats.textContent = "0 products found";
    return;
  }

  emptyState.hidden = true;
  productStats.textContent = `${filteredProducts.length} product(s) found`;

  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    const imagePath = encodeURI(product.image);

    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${imagePath}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-content">
        <h3>${product.name}</h3>
        <p class="product-info">${product.category} | ${product.pack}</p>
        <p class="product-desc">${product.description}</p>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

function applyFilters() {
  const selectedCategory = categoryFilter.value;
  const query = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchQuery = query.length === 0 || product.name.toLowerCase().includes(query);

    return matchCategory && matchQuery;
  });

  renderProducts(filteredProducts);
}

if (categoryFilter && searchInput && productGrid && productStats && emptyState) {
  loadCategories();
  applyFilters();

  categoryFilter.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);
}
