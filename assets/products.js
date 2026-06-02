const productCatalog = [
  {
    file: "Lokwan Wheat Flour 1 KG - 2.png",
    englishName: "Lokwan Wheat Flour",
    marathiName: "लोकवन गहू पीठ",
    pack: "1 KG"
  },
  {
    file: "Lokwan Wheat Flour 5 KG.png",
    englishName: "Lokwan Wheat Flour",
    marathiName: "लोकवन गहू पीठ",
    pack: "5 KG"
  },
  {
    file: "SIHOR WHEAT ATTA 1KG.png",
    englishName: "Sehore Wheat Flour",
    marathiName: "सिहोर गहू पीठ",
    pack: "1 KG"
  },
  {
    file: "SIHOR WHEAT ATTA 5 KG.png",
    englishName: "Sehore Wheat Flour",
    marathiName: "सिहोर गहू पीठ",
    pack: "5 KG"
  },
  {
    file: "Sorghum (Jowar) Flour 500 GM.png",
    englishName: "Jowar Flour / Sorghum Flour",
    marathiName: "ज्वारी पीठ",
    pack: "500 GM"
  },
  {
    file: "Pearl Millet (Bajra) Flour 500 GM.png",
    englishName: "Bajra Flour / Pearl Millet Flour",
    marathiName: "बाजरी पीठ",
    pack: "500 GM"
  },
  {
    file: "Finger Millet (Ragi) Flour 500 GM.png",
    englishName: "Ragi Flour / Finger Millet Flour",
    marathiName: "नाचणी पीठ",
    pack: "500 GM"
  },
  {
    file: "HARBHARA DAL PITH 500 GM.png",
    englishName: "Gram Flour / Besan",
    marathiName: "हरभरा डाळ पीठ",
    pack: "500 GM"
  },
  {
    file: "RICE ATTA 500 GM.png",
    englishName: "Rice Flour",
    marathiName: "तांदूळ पिठी",
    pack: "500 GM"
  },
  {
    file: "Yellow Maize Flour (Cornmeal) 500 GM.png",
    englishName: "Yellow Maize Flour / Corn Flour",
    marathiName: "मका पीठ",
    pack: "500 GM"
  },
  {
    file: "Thalipeeth Bhajni Flour.png",
    englishName: "Thalipeeth Bhajani / Nutritious Roasted Mix Flour",
    marathiName: "थालीपीठ भाजणी",
    pack: "500 GM"
  },
  {
    file: "Groundnut Powder 200 GM.png",
    englishName: "Crushed Peanut Powder",
    marathiName: "शेंगदाणा कूट",
    pack: "200 GM"
  },
  {
    file: "Vada Bharda Flour.png",
    englishName: "Vada Bharda Flour",
    marathiName: "वड्याचा भरडा",
    pack: "200 GM"
  },
  {
    file: "Dhirde Flour.png",
    englishName: "Dhirde Flour / Pancake Flour",
    marathiName: "धिरडे पीठ",
    pack: "200 GM"
  },
  {
    file: "Metkut 100 GM.png",
    englishName: "Metkut / Spiced Lentil Powder",
    marathiName: "मेतकूट",
    pack: "100 GM"
  },
  {
    file: "Sattu Flour 200 GM.png",
    englishName: "Sattu Flour",
    marathiName: "सातू पीठ",
    pack: "200 GM"
  },
  {
    file: "Ragi Malt Powder 200 GM.png",
    englishName: "Ragi Satva / Ragi Malt",
    marathiName: "नाचणी सत्व",
    pack: "200 GM"
  },
  {
    file: "Nutri Mix 200 GM.png",
    englishName: "Purna Aahar / Complete Nutrition Mix",
    marathiName: "पूर्ण आहार",
    pack: "200 GM"
  },
  {
    file: "Soyabean Flour 200 GM.png",
    englishName: "Soyabean Flour",
    marathiName: "सोयाबीन पीठ",
    pack: "200 GM"
  },
  {
    file: "Special Idli Rawa 500 GM.png",
    englishName: "Idli Rava",
    marathiName: "इडली रवा",
    pack: "500 GM"
  },
  {
    file: "Daliya (Lapsi) 500 GM.png",
    englishName: "Daliya",
    marathiName: "दलिया",
    pack: "500 GM"
  },
  {
    file: "Semolina (Sooji) 500 GM.png",
    englishName: "Sanja Rava / Semolina",
    marathiName: "सांजा रवा",
    pack: "500 GM"
  },
  {
    file: "Split Yellow Gram Flour (Roasted) 200 GM.png",
    englishName: "Split Yellow Gram Flour",
    marathiName: "मूगदळ",
    pack: "200 GM"
  },
  {
    file: "Upwas Bhajni Flour.png",
    englishName: "Upvas Bhajani / Fasting Flour Mix",
    marathiName: "उपवास भाजणी",
    pack: "500 GM"
  },
  {
    file: "Upwas Bhajni Flour.png",
    englishName: "Upvas Bhajani / Fasting Flour Mix",
    marathiName: "उपवास भाजणी",
    pack: "200 GM"
  },
  {
    file: "Water Chestnut Flour.png",
    englishName: "Water Chestnut Flour",
    marathiName: "शिंगाडा पीठ",
    pack: "200 GM"
  },
  {
    file: "Sago Flour.png",
    englishName: "Sago Flour",
    marathiName: "साबुदाणा पीठ",
    pack: "200 GM"
  },
  {
    file: "Samo Rice Flour.png",
    englishName: "Varai Flour / Samo Rice Flour",
    marathiName: "वरई पीठ",
    pack: "200 GM"
  },
  {
    file: "Amaranth Flour.png",
    englishName: "Rajgira Flour / Amaranth Flour",
    marathiName: "राजगिरा पीठ",
    pack: "200 GM"
  },
  {
    file: "Cumin Powder 50 GM.png",
    englishName: "Cumin Powder",
    marathiName: "जिरे पूड",
    pack: "50 GM"
  },
  {
    file: "Cinnamon Powder 10 GM.png",
    englishName: "Cinnamon Powder",
    marathiName: "दालचिनी पूड",
    pack: "10 GM"
  },
  {
    file: "Cardamom Powder 10 GM.png",
    englishName: "Cardamom Powder",
    marathiName: "वेलची पूड",
    pack: "10 GM"
  },
  {
    file: "Kala Goda Masala 100 GM.png",
    englishName: "Kala/Goda Masala",
    marathiName: "काळा/गोडा मसाला",
    pack: "100 GM"
  },
  {
    file: "Tea Masala 10 GM.png",
    englishName: "Tea Masala",
    marathiName: "चहा मसाला",
    pack: "10 GM"
  },
  {
    file: "Red Chilli Powder 200 GM.png",
    englishName: "Red Chilli Powder",
    marathiName: "तिखट",
    pack: "200 GM"
  },
  {
    file: "Dried Date Powder 100 GM.png",
    englishName: "Dry Dates Powder",
    marathiName: "खारीक पूड",
    pack: "100 GM"
  },
  {
    file: "Frozen Poli.png",
    englishName: "Frozen Poli / Chapati",
    marathiName: "फ्रोजन पोळी",
    pack: "Ready to Eat"
  }
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

  if (/(masala|powder|pepper|coriander|cumin|chilli|ginger|fenugreek|clove|cinnamon|cardamom|nutmeg|liquorice|metkut|kala goda)/.test(value)) {
    return "Spices & Masalas";
  }

  if (/(frozen poli|frozen chapati|chapati)/.test(value)) {
    return "Ready to Eat";
  }

  if (/(nutri mix|purna aahar|complete nutrition|ragi malt|dried date|dry dates|groundnut|peanut)/.test(value)) {
    return "Health Mixes";
  }

  if (/(bhajni|bhajani|idli rawa|daliya|lapsi|dhirde|musala|vada bharda|kulith|horse gram)/.test(value)) {
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

  if (/(sihor|sehore)/.test(value)) {
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

  if (/rice flour|rice atta/.test(value)) {
    return "Fine rice flour for bhakri, snacks, and batter preparations.";
  }

  if (/(yellow maize|cornmeal|maize flour|corn flour)/.test(value)) {
    return "Cornmeal flour for makki-style rotis and savory dishes.";
  }

  if (/amaranth|rajgira/.test(value)) {
    return "Rajgira-style flour used in fasting and light recipes.";
  }

  if (/soya|soyabean/.test(value)) {
    return "Protein-rich soy flour for fortifying daily meals.";
  }

  if (/sattu/.test(value)) {
    return "Roasted gram flour for refreshing drinks and wholesome recipes.";
  }

  if (/(gram flour|besan|harbhara dal pith|split yellow gram|kulith|horse gram)/.test(value)) {
    return "Traditional flour for batters, snacks, and protein-rich meals.";
  }

  if (/semolina|sooji|sanja rava/.test(value)) {
    return "Fine rava for upma, halwa, and multiple breakfast recipes.";
  }

  if (/idli rawa/.test(value)) {
    return "Special idli rawa for soft idlis, appe, and steamed snacks.";
  }

  if (/dhirde flour|ghirde flour/.test(value)) {
    return "Traditional flour blend for soft and savory dhirde.";
  }

  if (/thalipeeth bhajani|thalipeeth bhajni/.test(value)) {
    return "Traditional roasted bhajani blend for crisp thalipeeth.";
  }

  if (/upvas bhajani|upwas bhajni/.test(value)) {
    return "Fasting flour mix for quick and tasty upvas dishes.";
  }

  if (/musala mix|vada bharda/.test(value)) {
    return "Convenient blend for crispy vada-style preparations.";
  }

  if (/water chestnut/.test(value)) {
    return "Singhara flour for vrat-friendly and gluten-light recipes.";
  }

  if (/varai|barnyard millet|samo rice/.test(value)) {
    return "Varai-style flour suited for fasting and light meal options.";
  }

  if (/sago flour/.test(value)) {
    return "Sabudana-style flour for fasting recipes and snacks.";
  }

  if (/daliya|lapsi/.test(value)) {
    return "Cracked wheat style ingredient for sweet and savory preparations.";
  }

  if (/purna aahar|nutri mix/.test(value)) {
    return "Balanced nutrition mix for family breakfast and snack recipes.";
  }

  if (/ragi satva|ragi malt/.test(value)) {
    return "Nutritious malt powder for milk, shakes, and porridges.";
  }

  if (/dry dates|dried date powder/.test(value)) {
    return "Naturally sweet date powder for drinks and desserts.";
  }

  if (/groundnut|peanut powder/.test(value)) {
    return "Groundnut powder for chutneys, laddoos, and savory recipes.";
  }

  if (/red chilli powder/.test(value)) {
    return "Rich red chilli powder for heat and vibrant color.";
  }

  if (/tea masala/.test(value)) {
    return "Aromatic tea masala blend for flavorful chai.";
  }

  if (/kala\/goda masala|kala goda masala/.test(value)) {
    return "Traditional Maharashtrian masala blend with deep aroma.";
  }

  if (/cumin powder/.test(value)) {
    return "Cumin powder for earthy flavor in curries and tempering.";
  }

  if (/cardamom powder/.test(value)) {
    return "Cardamom powder for sweets, milk drinks, and desserts.";
  }

  if (/cinnamon|cinnamon Powder/.test(value)) {
    return "Cinnamon powder with a strong aroma, perfect for enhancing masalas and gravies.";
  }

  if (/metkut/.test(value)) {
    return "Classic Maharashtrian metkut blend for rice and ghee meals.";
  }

  return "Trusted Sakas quality crafted for everyday kitchens.";
}

const products = productCatalog.map((item) => {
  const rawName = normalizeName(item.file);
  const englishName = item.englishName || prettifyName(rawName);

  return {
    name: englishName,
    marathiName: item.marathiName || "",
    category: inferCategory(englishName),
    pack: item.pack || extractPack(englishName),
    description: inferDescription(englishName),
    image: `./assets/${item.file}`
  };
});

const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");
const productStats = document.getElementById("productStats");
const emptyState = document.getElementById("emptyState");

function loadCategories() {
  const categories = ["all", ...new Set(products.map((product) => product.category))];

  // Avoid duplicating the preloaded "All Categories" option from HTML.
  categoryFilter.innerHTML = "";

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
        ${product.marathiName ? `<p class="product-name-local">${product.marathiName}</p>` : ""}
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
    const searchText = `${product.name} ${product.marathiName}`.toLowerCase();
    const matchQuery = query.length === 0 || searchText.includes(query);

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
