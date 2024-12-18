const products = {
    "card-1": {
        perfume: "Passionate Fresh IV",
        types: "Eau de Perfume",
        tops: "Ripe Cherry, Zesty Citrus, Wild Berries",
        heart: "Floral Accord, Almond Blossom",
        base: "Creamy Vanilla, Soft Musk, White Woods",
        size: "30ml",
        price: "$300",
        image: "../images/perfume.png",
        description: "This is a luxurious floral fragrance with notes of jasmine and rose."
    },
    "card-2": {
        perfume: "Citrus Reverie",
        types: "Eau de Perfume",
        tops: "Bergamot, Lemon Zest, Green Mandarin",
        heart: "Orange Blossom, Jasmine Petals",
        base: "White Amber, Oak Moss, Vetiver",
        size: "30ml",
        price: "$350",
        image: "../images/perfume-2.png",
        description: "A refreshing citrus fragrance with hints of bergamot and lemon."
    },
    "card-3": {
        perfume: "Eclipse Noir",
        types: "Extract de Perfume",
        tops: "Pink Pepper, Blackcurrant, Saffron",
        heart: "Damask Rose, Patchouli, Plum",
        base: "Ambergris, Tonka Bean, Dark Musk",
        size: "50ml",
        price: "$280",
        image: "../images/perfume-3.png",
        description: "The essence of blooming roses with hints of vanilla and musk, offering a delicate and long-lasting fragrance."
    },
    "card-4": {
        perfume: "Amber Veil",
        types: "Eau de Toilette",
        tops: "Tangerine, Bergamot, Lime",
        heart: "Jasmine, Neroli, Freesia",
        base: "Amber, Cedarwood, Musk",
        size: "30ml",
        price: "$280",
        image: "../images/perfume-4.png",
        description: "Vibrant citrus notes with subtle floral undertones, creating a fresh, uplifting fragrance that lingers gracefully."
    },
    "card-5": {
        perfume: "Velvet Citrus",
        types: "Eau de Toilette",
        tops: "Blood Orange, Grapefruit, Clementine",
        heart: "Orange Flower, Green Tea, Geranium",
        base: "Sandalwood, Cedarwood, Amber",
        size: "125ml",
        price: "$500",
        image: "../images/perfume-5.png",
        description: "A warm, woody scent with notes of sandalwood and cedarwood."
    },
    "card-6": {
        perfume: "Amber Seduction",
        types: "Eau de Perfume",
        tops: "Mandarin, Cinnamon, Saffron",
        heart: "Bulgarian Rose, Lavender, Orris",
        base: "Amber, Vanilla Bean, Labdanum",
        size: "30ml",
        price: "$380",
        image: "../images/perfume-6.png",
        description: "A captivating blend of rich amber, sweet vanilla, and delicate florals, creating a warm, sensual scent perfect for evening wear."
    },
    "card-7": {
        perfume: "Crystal Clear",
        types: "Extract de Perfume",
        tops: "Aqua Notes, Green Apple, Lemon",
        heart: "White Lily, Cyclamen, Jasmine",
        base: "Musk, Amber, White Cedar",
        size: "30ml",
        price: "$250",
        image: "../images/perfume-7.png",
        description: "This perfume delivers a fresh, clean fragrance, evoking a sense of purity and revitalizing energy."
    },
    "card-8": {
        perfume: "Citrus Mist",
        types: "Extract de Perfume",
        tops: "Lemon Peel, Grapefruit, Bergamot",
        heart: "Orange Blossom, Waterlily, Peony",
        base: "White Musk, Sandalwood, Transparent Woods",
        size: "30ml",
        price: "$350",
        image: "../images/perfume-8.png",
        description: "A refreshing and clean fragrance, with crisp citrus tops notes, a soft floral heart, and a light, airy finish that lingers delicately throughout the day."
    },
    "card-9": {
        perfume: "Coco Breeze",
        types: "Eau de Perfume",
        tops: "Coconut Water, Pineapple, Lime",
        heart: "Frangipani, Tiare Flower, Ylang-Ylang",
        base: "Creamy Coconut, White Musk, Sandalwood",
        size: "50ml",
        price: "$300",
        image: "../images/perfume-9.png",
        description: "The essence of coconut, features a clear, bright liquid that delivers a fresh, clean fragrance with tropical, creamy notes for a soothing and revitalizing scent."
    },
};

const modal = document.getElementById("productModal");
const modalPerfume = document.getElementById("modalPerfume")
const modalImage = document.getElementById("modalImage");
const modalPrice = document.getElementById("modalPrice");
const modalTypes = document.getElementById("modalTypes");
const modalTop = document.getElementById("modalTop");
const modalHeart = document.getElementById("modalHeart");
const modalBase = document.getElementById("modalBase");
const modalSize = document.getElementById("modalSize");
const modalDescription = document.getElementById("modalDescription");
const cards = document.querySelectorAll(".showcase-card");

cards.forEach(card => {
    card.addEventListener("click", function() {
    const cardId = this.id;
    const product = products[cardId];
    modalPerfume.textContent = product.perfume;
    modalTypes.textContent = product.types;
    modalPrice.textContent = product.price;
    modalTop.textContent = product.tops;
    modalHeart.textContent = product.heart;
    modalBase.textContent = product.base;
    modalSize.textContent = product.size;
    modalImage.src = product.image;
    modalDescription.textContent = product.description;
    modal.style.display = "block";
    });
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
    modal.style.display = "none";
    }
});