// ============================================
// OakCraft Furniture - Main JavaScript
// ============================================

// Product Data (FULL DATA dengan deskripsi, spesifikasi, thumbnail)
var products = [
    {
        id: 1,
        name: "Sofa Chesterfield 3-Seater",
        category: "living",
        categoryLabel: "Ruang Tamu",
        price: 18500000,
        priceFormatted: "Rp18.500.000",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        rating: 4.9,
        reviews: 128,
        badge: "Terlaris",
        material: "oak",
        shortDesc: "Sofa klasik dengan sentuhan modern dari kayu oak solid dan kain beludru premium. Tufting manual dan sandaran tangan melengkung memberikan kesan mewah yang timeless.",
        thumbs: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
        ],
        descFeatures: [
            "Rangka kayu oak solid 100%",
            "Upholstery beludru premium dengan perlindungan stain",
            "Tufting manual dengan detail paku kuningan",
            "Sandaran tangan melengkung profil klasik",
            "Kaki kayu solid finishing natural",
            "Dukungan lumbar ergonomis"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "210cm × 90cm × 85cm" },
            { label: "Berat", value: "85 kg" },
            { label: "Material Rangka", value: "Kayu Oak Solid" },
            { label: "Material Upholstery", value: "Kain Beludru Premium (100% Polyester)" },
            { label: "Kepadatan Busa", value: "High-Density Foam (35 kg/m³)" },
            { label: "Kapasitas Duduk", value: "3 Orang" },
            { label: "Garansi", value: "10 Tahun (Rangka), 3 Tahun (Upholstery)" }
        ]
    },
    {
        id: 2,
        name: "Meja Kopi Minimalis Oak",
        category: "living",
        categoryLabel: "Ruang Tamu",
        price: 4200000,
        priceFormatted: "Rp4.200.000",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80",
        rating: 4.8,
        reviews: 86,
        badge: null,
        material: "oak",
        shortDesc: "Meja kopi minimalis dengan permukaan kayu oak yang menampilkan serat alami yang indah. Desain simpel namun elegan, cocok untuk berbagai gaya interior.",
        thumbs: [
            "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80"
        ],
        descFeatures: [
            "Permukaan kayu oak solid dengan serat natural",
            "Kaki kayu tapered desain Skandinavia",
            "Finishing matte anti silau",
            "Konstruksi mortise & tenon tanpa sambungan visible",
            "Padding pelindung kaki agar tidak menggores lantai"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "120cm × 60cm × 45cm" },
            { label: "Berat", value: "18 kg" },
            { label: "Material", value: "Kayu Oak Solid" },
            { label: "Finishing", value: "Matte Lacquer (Non-Toxic)" },
            { label: "Kapasitas Beban", value: "50 kg" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    },
    {
        id: 3,
        name: "Lemari Pakaian 4 Pintu",
        category: "bedroom",
        categoryLabel: "Kamar Tidur",
        price: 12800000,
        priceFormatted: "Rp12.800.000",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
        rating: 4.7,
        reviews: 64,
        badge: "Baru",
        material: "walnut",
        shortDesc: "Lemari pakaian 4 pintu dari walnut hitam dengan interior cerdas. Gantungan, laci, dan rak yang bisa disesuaikan sesuai kebutuhan Anda.",
        thumbs: [
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80"
        ],
        descFeatures: [
            "4 pintu dengan engsel soft-close",
            "2 laci bawah dengan runner metal",
            "Rak gantung adjustable tinggi",
            "Rak interior adjustable posisi",
            "Cermin full-length di pintu tengah",
            "Pencahayaan LED interior (opsional)"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "180cm × 60cm × 220cm" },
            { label: "Berat", value: "120 kg" },
            { label: "Material", value: "Kayu Walnut Hitam Solid" },
            { label: "Finishing", value: "Satin Polyurethane" },
            { label: "Engsel", value: "Soft-Close Hydraulic" },
            { label: "Kapasitas Gantung", value: "Sekitar 80 pakaian" },
            { label: "Garansi", value: "10 Tahun (Struktur), 5 Tahun (Engsel)" }
        ]
    },
    {
        id: 4,
        name: "Tempat Tidur King Size",
        category: "bedroom",
        categoryLabel: "Kamar Tidur",
        price: 15600000,
        priceFormatted: "Rp15.600.000",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
        rating: 4.9,
        reviews: 92,
        badge: null,
        material: "teak",
        shortDesc: "Tempat tidur king size dari kayu jati dengan headboard panel elegan. Konstruksi kokoh dengan slat system untuk sirkulasi udara kasur optimal.",
        thumbs: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80"
        ],
        descFeatures: [
            "Headboard panel kayu jati solid 3 panel",
            "Slat system 15 slat kayu untuk dukungan kasur",
            "Rail samping tinggi untuk keamanan",
            "Finishing natural oil menonjolkan serat jati",
            "Cocok untuk kasur 180×200 cm",
            "Gap 5cm dari lantai untuk kebersihan"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "200cm × 180cm × 120cm" },
            { label: "Berat", value: "95 kg" },
            { label: "Material", value: "Kayu Jati (Teak) Solid" },
            { label: "Finishing", value: "Natural Teak Oil" },
            { label: "Ukuran Kasur", value: "King Size (180×200cm)" },
            { label: "Jumlah Slat", value: "15 batang" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    },
    {
        id: 5,
        name: "Meja Makan 6 Kursi",
        category: "dining",
        categoryLabel: "Ruang Makan",
        price: 18900000,
        priceFormatted: "Rp18.900.000",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
        rating: 4.8,
        reviews: 74,
        badge: "Terlaris",
        material: "oak",
        shortDesc: "Set meja makan 6 kursi dari kayu oak dengan permukaan luas. Desain farmhouse modern yang hangat dan mengundang untuk momen bersama keluarga.",
        thumbs: [
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
            "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80"
        ],
        descFeatures: [
            "Meja oak solid dengan tepian elegan",
            "6 kursi makan dengan sandaran ergonomis",
            "Permukaan meja tahan panas dan gores",
            "Kaki meja tapered kokoh",
            "Kapasitas meja hingga 8 orang",
            "Set termasuk 6 kursi"
        ],
        specs: [
            { label: "Dimensi Meja (P × L × T)", value: "180cm × 90cm × 75cm" },
            { label: "Dimensi Kursi (P × L × T)", value: "45cm × 52cm × 85cm" },
            { label: "Berat Total", value: "±111 kg" },
            { label: "Material", value: "Kayu Oak Solid" },
            { label: "Finishing", value: "Satin Lacquer" },
            { label: "Kapasitas Duduk", value: "6-8 Orang" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    },
    {
        id: 6,
        name: "Kursi Makan Upholstered",
        category: "dining",
        categoryLabel: "Ruang Makan",
        price: 2800000,
        priceFormatted: "Rp2.800.000",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
        rating: 4.6,
        reviews: 112,
        badge: null,
        material: "fabric",
        shortDesc: "Kursi makan dengan dudukan dan sandaran berlapis kain premium. Rangka kayu solid kuat dengan desain kontemporer yang nyaman.",
        thumbs: [
            "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
            "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80"
        ],
        descFeatures: [
            "Dudukan upholstered kain premium breathable",
            "Sandaran melengkung mendukung punggung",
            "Rangka kayu solid dengan sambungan dowel",
            "Busa high-density 30kg/m³",
            "Kain mudah dilepas untuk dicuci",
            "Padding pelindung lantai di setiap kaki"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "55cm × 58cm × 85cm" },
            { label: "Berat", value: "6 kg" },
            { label: "Material Rangka", value: "Kayu Solid" },
            { label: "Material Dudukan", value: "Kain Polyester Premium + Busa HD" },
            { label: "Tinggi Dudukan dari Lantai", value: "46 cm" },
            { label: "Kapasitas Beban", value: "120 kg" },
            { label: "Garansi", value: "5 Tahun (Rangka), 2 Tahun (Upholstery)" }
        ]
    },
    {
        id: 7,
        name: "Meja Kerja Executive",
        category: "office",
        categoryLabel: "Ruang Kerja",
        price: 8900000,
        priceFormatted: "Rp8.900.000",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
        rating: 4.8,
        reviews: 58,
        badge: null,
        material: "walnut",
        shortDesc: "Meja kerja executive dari walnut hitam dengan permukaan luas dan laci penyimpanan terintegrasi. Desain profesional untuk produktivitas maksimal.",
        thumbs: [
            "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
            "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
        ],
        descFeatures: [
            "Permukaan walnut dengan serat gelap premium",
            "3 laci penyimpanan dengan lock",
            "Grommet kabel management terintegrasi",
            "Laci tengah dengan pembatas stationery",
            "Kaki solid tapered stabil",
            "Cocok untuk monitor hingga 32 inci"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "160cm × 80cm × 75cm" },
            { label: "Berat", value: "45 kg" },
            { label: "Material", value: "Kayu Walnut Solid + Veneer" },
            { label: "Finishing", value: "Satin Polyurethane" },
            { label: "Jumlah Laci", value: "3 (1 dengan kunci)" },
            { label: "Kabel Management", value: "Grommet metal" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    },
    {
        id: 8,
        name: "Kursi Kantor Ergonomis",
        category: "office",
        categoryLabel: "Ruang Kerja",
        price: 5600000,
        priceFormatted: "Rp5.600.000",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80",
        rating: 4.7,
        reviews: 45,
        badge: "Baru",
        material: "fabric",
        shortDesc: "Kursi kantor ergonomis dengan lumbar support adjustable, armrest 4D, dan headrest. Mesh breathable untuk kenyamanan sepanjang hari.",
        thumbs: [
            "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80",
            "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
        ],
        descFeatures: [
            "Sandaran mesh breathable high-elasticity",
            "Lumbar support adjustable tinggi & kedalaman",
            "Armrest 4D (atas-bawah, kiri-kanan, maju-mundur, putar)",
            "Headrest adjustable",
            "Tilt mechanism dengan lock di 5 posisi",
            "Hydraulic gas lift class 4 (120kg capacity)"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "65cm × 65cm × 110-120cm" },
            { label: "Berat", value: "18 kg" },
            { label: "Material Sandaran", value: "Mesh Nylon High-Elasticity" },
            { label: "Material Dudukan", value: "Busa Molded Foam + Kain" },
            { label: "Kapasitas Beban", value: "120 kg" },
            { label: "Tinggi Dudukan", value: "45-55 cm (adjustable)" },
            { label: "Garansi", value: "5 Tahun (Mekanisme), 2 Tahun (Upholstery)" }
        ]
    },
    {
        id: 9,
        name: "Rak Buku Minimalis",
        category: "living",
        categoryLabel: "Ruang Tamu",
        price: 3200000,
        priceFormatted: "Rp3.200.000",
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
        rating: 4.5,
        reviews: 38,
        badge: null,
        material: "oak",
        shortDesc: "Rak buku 5 tingkat dengan desain open-shelf minimalis. Dari kayu oak dengan konstruksi kuat, cocok untuk buku, dekorasi, dan tanaman hias.",
        thumbs: [
            "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80"
        ],
        descFeatures: [
            "5 tingkat rak dengan jarak antar rak 32cm",
            "Konstruksi kayu oak solid tanpa papan partikel",
            "Anti-tip anchor termasuk untuk keamanan",
            "Setiap rak menahan hingga 20kg",
            "Desain modular — bisa digabung beberapa unit"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "80cm × 30cm × 180cm" },
            { label: "Berat", value: "25 kg" },
            { label: "Material", value: "Kayu Oak Solid" },
            { label: "Finishing", value: "Matte Lacquer" },
            { label: "Jumlah Rak", value: "5 Tingkat" },
            { label: "Kapasitas per Rak", value: "20 kg" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    },
    {
        id: 10,
        name: "Nakas Samping Tempat Tidur",
        category: "bedroom",
        categoryLabel: "Kamar Tidur",
        price: 2100000,
        priceFormatted: "Rp2.100.000",
        image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&q=80",
        rating: 4.6,
        reviews: 52,
        badge: null,
        material: "walnut",
        shortDesc: "Nakas samping tempat tidur dengan 1 laci dan 1 rak terbuka. Desain kompak dari walnut dengan sentuhan mid-century yang elegan.",
        thumbs: [
            "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&q=80",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80"
        ],
        descFeatures: [
            "1 laci dengan runner soft-close",
            "1 rak terbuka untuk buku atau gelas",
            "Tinggi rak sesuai standar tempat tidur",
            "Kaki tapered mid-century style",
            "Finishing walnut gelap yang kaya",
            "Mudah dirakit dengan instruksi jelas"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "50cm × 40cm × 55cm" },
            { label: "Berat", value: "8 kg" },
            { label: "Material", value: "Kayu Walnut Solid" },
            { label: "Finishing", value: "Satin Polyurethane" },
            { label: "Jumlah Laci", value: "1 (soft-close)" },
            { label: "Kapasitas Laci", value: "8 kg" },
            { label: "Garansi", value: "5 Tahun" }
        ]
    },
    {
        id: 11,
        name: "Buffet Ruang Makan",
        category: "dining",
        categoryLabel: "Ruang Makan",
        price: 7800000,
        priceFormatted: "Rp7.800.000",
        image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&q=80",
        rating: 4.7,
        reviews: 41,
        badge: null,
        material: "teak",
        shortDesc: "Buffet ruang makan dari kayu jati dengan 3 laci dan 2 kompartemen terbuka. Penyimpanan ample dengan desain yang memperindah ruang makan.",
        thumbs: [
            "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&q=80",
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
            "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80"
        ],
        descFeatures: [
            "3 laci tengah dengan handle integrated",
            "2 kompartemen terbuka dengan 1 rak tetap",
            "Pintu dengan engsel soft-close",
            "Permukaan atas cocok untuk dekorasi",
            "Kabel management hole di kompartemen",
            "Konstruksi kayu jati solid tahan lembab"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "160cm × 45cm × 85cm" },
            { label: "Berat", value: "55 kg" },
            { label: "Material", value: "Kayu Jati (Teak) Solid" },
            { label: "Finishing", value: "Natural Teak Oil" },
            { label: "Penyimpanan", value: "3 Laci + 2 Kompartemen" },
            { label: "Kapasitas Permukaan Atas", value: "30 kg" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    },
    {
        id: 12,
        name: "Rak Dokumen Kantor",
        category: "office",
        categoryLabel: "Ruang Kerja",
        price: 4500000,
        priceFormatted: "Rp4.500.000",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
        rating: 4.5,
        reviews: 33,
        badge: null,
        material: "oak",
        shortDesc: "Rak dokumen 5 tingkat dengan kombinasi rak terbuka dan laci berkas. Dari kayu oak solid untuk penyimpanan kantor yang rapi dan profesional.",
        thumbs: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
            "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
            "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
        ],
        descFeatures: [
            "3 rak terbuka untuk buku dan display",
            "2 laci file untuk dokumen A4/Folio",
            "Laci file dengan runner ball-bearing",
            "Anti-tip anchor termasuk",
            "Label holder di setiap laci",
            "Setiap rak menahan hingga 25kg"
        ],
        specs: [
            { label: "Dimensi (P × L × T)", value: "80cm × 40cm × 180cm" },
            { label: "Berat", value: "30 kg" },
            { label: "Material", value: "Kayu Oak Solid" },
            { label: "Finishing", value: "Matte Lacquer" },
            { label: "Kompartemen", value: "3 Rak Terbuka + 2 Laci File" },
            { label: "Kapasitas Laci", value: "15 kg per laci" },
            { label: "Garansi", value: "10 Tahun" }
        ]
    }
];

// ============================================
// Utility Functions
// ============================================

function formatPrice(price) {
    return 'Rp' + price.toLocaleString('id-ID');
}

function createProductCard(product) {
    var badge = product.badge ? '<span class="product-card-badge">' + product.badge + '</span>' : '';
    var starsHtml = '';
    for (var i = 0; i < Math.floor(product.rating); i++) starsHtml += '&#9733;';
    if (product.rating % 1 >= 0.5) starsHtml += '&#189;';

    return '<a href="product.html?id=' + product.id + '" class="product-card">' +
        '<div class="product-card-image">' +
            '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
            badge +
            '<button class="product-card-wishlist" aria-label="Tambah ke wishlist" onclick="event.preventDefault(); toggleWishlist(this)">' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' +
                '</svg>' +
            '</button>' +
        '</div>' +
        '<div class="product-card-info">' +
            '<span class="product-card-category">' + product.categoryLabel + '</span>' +
            '<h3 class="product-card-title">' + product.name + '</h3>' +
            '<p class="product-card-price">' + product.priceFormatted + '</p>' +
            '<div class="product-card-rating">' +
                '<span class="stars">' + starsHtml + '</span>' +
                '<span>(' + product.reviews + ')</span>' +
            '</div>' +
        '</div>' +
    '</a>';
}

function toggleWishlist(btn) {
    btn.classList.toggle('active');
    var svg = btn.querySelector('svg');
    if (btn.classList.contains('active')) {
        svg.setAttribute('fill', 'currentColor');
    } else {
        svg.setAttribute('fill', 'none');
    }
}

// ============================================
// DOM Ready — Semua Logika Dimulai di Sini
// ============================================
document.addEventListener('DOMContentLoaded', function() {

    // ---- Navbar Scroll Effect ----
    var navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ---- Mobile Nav Toggle ----
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        navMenu.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Bestsellers (Homepage) ----
    var bestsellersGrid = document.getElementById('bestsellersGrid');
    if (bestsellersGrid) {
        var bestsellers = products.filter(function(p) {
            return p.badge === 'Terlaris' || p.rating >= 4.8;
        }).slice(0, 4);
        bestsellersGrid.innerHTML = bestsellers.map(createProductCard).join('');
    }

    // ---- Catalog Page ----
    var catalogGrid = document.getElementById('catalogGrid');
    if (catalogGrid) {
        var urlParams = new URLSearchParams(window.location.search);
        var categoryFilter = urlParams.get('category');
        var filteredProducts = products;

        if (categoryFilter) {
            filteredProducts = products.filter(function(p) { return p.category === categoryFilter; });
            var filterCheckboxes = document.querySelectorAll('#categoryFilters input');
            if (filterCheckboxes.length) {
                filterCheckboxes.forEach(function(cb) {
                    cb.checked = cb.value === categoryFilter;
                });
            }
        }

        catalogGrid.innerHTML = filteredProducts.map(createProductCard).join('');

        var productCount = document.getElementById('productCount');
        if (productCount) {
            productCount.textContent = 'Menampilkan ' + filteredProducts.length + ' produk';
        }
    }

    // =============================================
    // PRODUCT DETAIL PAGE — FULLY DYNAMIC
    // =============================================
    var productDetailSection = document.getElementById('productDetail');

    if (productDetailSection) {
        var urlParams = new URLSearchParams(window.location.search);
        var productId = parseInt(urlParams.get('id'));
        var currentProduct = products.find(function(p) { return p.id === productId; });

        // Jika ID tidak ada/tidak ditemukan, redirect ke produk pertama
        if (!currentProduct) {
            window.location.href = 'product.html?id=1';
            return;
        }

        // 1. Judul Halaman
        document.title = currentProduct.name + ' — OakCraft Furniture';

        // 2. Breadcrumb
        var breadcrumbCategory = document.getElementById('breadcrumbCategory');
        var breadcrumbProduct = document.getElementById('breadcrumbProduct');
        if (breadcrumbCategory) {
            breadcrumbCategory.textContent = currentProduct.categoryLabel;
            breadcrumbCategory.href = 'catalog.html?category=' + currentProduct.category;
        }
        if (breadcrumbProduct) {
            breadcrumbProduct.textContent = currentProduct.name;
        }

        // 3. Gambar Utama
        var mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = currentProduct.image.replace('w=600', 'w=900');
            mainImage.alt = currentProduct.name + ' OakCraft';
        }

        // 4. Info Produk
        var pCategory = document.getElementById('productCategory');
        var pTitle = document.getElementById('productTitle');
        var pPrice = document.getElementById('productPrice');
        var pShortDesc = document.getElementById('productShortDesc');
        var pBadge = document.getElementById('productBadge');
        var pRatingStars = document.getElementById('productRatingStars');
        var pRatingCount = document.getElementById('productRatingCount');

        if (pCategory) pCategory.textContent = currentProduct.categoryLabel;
        if (pTitle) pTitle.textContent = currentProduct.name;
        if (pPrice) pPrice.textContent = currentProduct.priceFormatted;
        if (pShortDesc) pShortDesc.textContent = currentProduct.shortDesc;

        if (pBadge) {
            if (currentProduct.badge) {
                pBadge.textContent = currentProduct.badge;
                pBadge.style.display = 'inline-block';
            } else {
                pBadge.style.display = 'none';
            }
        }

        if (pRatingStars) {
            var fullStars = Math.floor(currentProduct.rating);
            var halfStar = currentProduct.rating % 1 >= 0.5;
            var starsHtml = '';
            for (var s = 0; s < fullStars; s++) starsHtml += '&#9733;';
            if (halfStar) starsHtml += '&#9734;';
            pRatingStars.innerHTML = starsHtml;
        }
        if (pRatingCount) {
            pRatingCount.textContent = currentProduct.rating + ' (' + currentProduct.reviews + ' ulasan)';
        }

        var reviewsTabBtn = document.getElementById('reviewsTabBtn');
        if (reviewsTabBtn) {
            reviewsTabBtn.textContent = 'Ulasan (' + currentProduct.reviews + ')';
        }

        // 5. Thumbnail Gallery
        var thumbContainer = document.getElementById('thumbContainer');
        if (thumbContainer && currentProduct.thumbs) {
            var thumbHtml = '';
            currentProduct.thumbs.forEach(function(thumbUrl, idx) {
                thumbHtml += '<button class="thumb' + (idx === 0 ? ' active' : '') + '" data-image="' + thumbUrl.replace('w=600', 'w=900') + '" aria-label="Tampilan ' + (idx + 1) + '">';
                thumbHtml += '<img src="' + thumbUrl + '" alt="Thumbnail ' + (idx + 1) + '">';
                thumbHtml += '</button>';
            });
            thumbContainer.innerHTML = thumbHtml;

            thumbContainer.querySelectorAll('.thumb').forEach(function(thumb) {
                thumb.addEventListener('click', function() {
                    thumbContainer.querySelectorAll('.thumb').forEach(function(t) { t.classList.remove('active'); });
                    this.classList.add('active');
                    if (mainImage) mainImage.src = this.dataset.image;
                });
            });
        }

        // 6. Tab Deskripsi
        var descriptionContent = document.getElementById('descriptionContent');
        if (descriptionContent) {
            var categoryDescMap = {
                living: currentProduct.name + ' dari OakCraft adalah pernyataan gaya untuk ruang tamu Anda. Dibuat oleh pengrajin berpengalaman menggunakan teknik tradisional yang disempurnakan selama bertahun-tahun, setiap detail dikerjakan dengan presisi tinggi untuk memastikan kualitas yang tak tertandingi.',
                bedroom: currentProduct.name + ' dari OakCraft dirancang khusus untuk menciptakan suasana istirahat yang sempurna. Material berkualitas tinggi dan konstruksi kokoh menjamin ketenangan dan kenyamanan selama bertahun-tahun.',
                dining: currentProduct.name + ' dari OakCraft akan menjadi pusat perhatian di ruang makan Anda. Dibuat untuk menemani momen-momen berharga bersama keluarga dan teman, furniture ini menghadirkan kehangatan dan keeleganan.',
                office: currentProduct.name + ' dari OakCraft dirancang khusus untuk mendukung produktivitas Anda. Ergonomis, fungsional, dan tetap elegan — furniture kantor yang membuat Anda bangga bekerja.'
            };
            var descText = categoryDescMap[currentProduct.category] || categoryDescMap.living;

            var featuresHtml = '';
            if (currentProduct.descFeatures) {
                currentProduct.descFeatures.forEach(function(f) {
                    featuresHtml += '<li>' + f + '</li>';
                });
            }

            descriptionContent.innerHTML =
                '<div class="desc-text">' +
                    '<h3>Tentang Produk Ini</h3>' +
                    '<p>' + descText + '</p>' +
                    '<h4>Fitur Utama</h4>' +
                    '<ul>' + featuresHtml + '</ul>' +
                '</div>' +
                '<div class="desc-image">' +
                    '<img src="' + currentProduct.image + '" alt="Detail ' + currentProduct.name + '">' +
                '</div>';
        }

        // 7. Tab Spesifikasi
        var specsContent = document.getElementById('specsContent');
        if (specsContent && currentProduct.specs) {
            var specsHtml = '';
            currentProduct.specs.forEach(function(spec) {
                specsHtml += '<div class="spec-row"><span class="spec-label">' + spec.label + '</span><span class="spec-value">' + spec.value + '</span></div>';
            });
            specsContent.innerHTML = specsHtml;
        }

        // 8. Tab Ulasan
        var reviewsContent = document.getElementById('reviewsContent');
        if (reviewsContent) {
            var total = currentProduct.reviews;
            var rating = currentProduct.rating;
            var fullS = Math.floor(rating);
            var halfS = rating % 1 >= 0.5;

            var pct5 = Math.round(total * 0.78);
            var pct4 = Math.round(total * 0.14);
            var pct3 = Math.round(total * 0.05);
            var pct2 = Math.round(total * 0.02);
            var pct1 = total - pct5 - pct4 - pct3 - pct2;
            if (pct1 < 0) pct1 = 0;

            var starsReviewHtml = '';
            for (var rs = 0; rs < fullS; rs++) starsReviewHtml += '&#9733;';
            if (halfS) starsReviewHtml += '&#9734;';

            reviewsContent.innerHTML =
                '<div class="reviews-summary">' +
                    '<div class="reviews-rating">' +
                        '<span class="rating-big">' + rating + '</span>' +
                        '<div class="stars">' + starsReviewHtml + '</div>' +
                        '<span>Berdasarkan ' + total + ' ulasan</span>' +
                    '</div>' +
                    '<div class="reviews-bars">' +
                        '<div class="review-bar"><span>5 bintang</span><div class="bar"><div class="bar-fill" style="width:' + Math.round(pct5/total*100) + '%"></div></div><span>' + pct5 + '</span></div>' +
                        '<div class="review-bar"><span>4 bintang</span><div class="bar"><div class="bar-fill" style="width:' + Math.round(pct4/total*100) + '%"></div></div><span>' + pct4 + '</span></div>' +
                        '<div class="review-bar"><span>3 bintang</span><div class="bar"><div class="bar-fill" style="width:' + Math.round(pct3/total*100) + '%"></div></div><span>' + pct3 + '</span></div>' +
                        '<div class="review-bar"><span>2 bintang</span><div class="bar"><div class="bar-fill" style="width:' + Math.round(pct2/total*100) + '%"></div></div><span>' + pct2 + '</span></div>' +
                        '<div class="review-bar"><span>1 bintang</span><div class="bar"><div class="bar-fill" style="width:' + Math.round(pct1/total*100) + '%"></div></div><span>' + pct1 + '</span></div>' +
                    '</div>' +
                '</div>' +
                '<div class="reviews-list">' +
                    '<div class="review-card">' +
                        '<div class="review-header">' +
                            '<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Diana Putri">' +
                            '<div><h4>Diana Putri</h4><div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div>' +
                            '<span class="review-date">2 minggu lalu</span>' +
                        '</div>' +
                        '<p class="review-text">"' + currentProduct.name + ' benar-benar melebihi ekspektasi saya. Kualitas materialnya sangat premium dan desainnya sempurna. Sangat direkomendasikan!"</p>' +
                    '</div>' +
                    '<div class="review-card">' +
                        '<div class="review-header">' +
                            '<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Andi Wijaya">' +
                            '<div><h4>Andi Wijaya</h4><div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div>' +
                            '<span class="review-date">1 bulan lalu</span>' +
                        '</div>' +
                        '<p class="review-text">"Investasi terbaik untuk rumah kami. Setelah beberapa bulan pemakaian, produk ini masih terlihat seperti baru."</p>' +
                    '</div>' +
                    '<div class="review-card">' +
                        '<div class="review-header">' +
                            '<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Rina Susanti">' +
                            '<div><h4>Rina Susanti</h4><div class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div></div>' +
                            '<span class="review-date">2 bulan lalu</span>' +
                        '</div>' +
                        '<p class="review-text">"Desainnya sangat elegan dan kualitasnya bagus. Pengiriman sesuai estimasi dan hasilnya memuaskan."</p>' +
                    '</div>' +
                '</div>';
        }
    }

    // =============================================
    // RELATED PRODUCTS — Dinamis per Kategori
    // =============================================
    var relatedProductsGrid = document.getElementById('relatedProducts');
    if (relatedProductsGrid) {
        var rUrlParams = new URLSearchParams(window.location.search);
        var rProductId = parseInt(rUrlParams.get('id')) || 1;
        var currentProd = products.find(function(p) { return p.id === rProductId; });
        var related;

        if (currentProd) {
            related = products.filter(function(p) {
                return p.category === currentProd.category && p.id !== currentProd.id;
            });
            if (related.length < 4) {
                var otherProducts = products.filter(function(p) {
                    return p.category !== currentProd.category && p.id !== currentProd.id;
                });
                related = related.concat(otherProducts).slice(0, 4);
            }
        } else {
            related = products.slice(1, 5);
        }

        relatedProductsGrid.innerHTML = related.map(createProductCard).join('');
    }

    // ---- Product Color Options ----
    var colorOptions = document.querySelectorAll('.color-option');
    var selectedColor = document.getElementById('selectedColor');
    if (colorOptions.length && selectedColor) {
        colorOptions.forEach(function(opt) {
            opt.addEventListener('click', function() {
                colorOptions.forEach(function(o) { o.classList.remove('active'); });
                this.classList.add('active');
                selectedColor.textContent = this.dataset.color;
            });
        });
    }

    // ---- Quantity Selector ----
    var qtyInput = document.getElementById('qtyInput');
    var qtyMinus = document.getElementById('qtyMinus');
    var qtyPlus = document.getElementById('qtyPlus');
    if (qtyInput && qtyMinus && qtyPlus) {
        qtyMinus.addEventListener('click', function() {
            var val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });
        qtyPlus.addEventListener('click', function() {
            var val = parseInt(qtyInput.value);
            if (val < 10) qtyInput.value = val + 1;
        });
    }

    // ---- Product Tabs ----
    var tabBtns = document.querySelectorAll('.tab-btn');
    var tabPanels = document.querySelectorAll('.tab-panel');
    if (tabBtns.length) {
        tabBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var tabId = this.dataset.tab;
                tabBtns.forEach(function(b) { b.classList.remove('active'); });
                tabPanels.forEach(function(p) { p.classList.remove('active'); });
                this.classList.add('active');
                var panel = document.getElementById('tab-' + tabId);
                if (panel) panel.classList.add('active');
            });
        });
    }

    // ---- Wishlist Button (Detail Page) ----
    var btnWishlist = document.getElementById('btnWishlist');
    if (btnWishlist) {
        btnWishlist.addEventListener('click', function() {
            this.classList.toggle('active');
            var svg = this.querySelector('svg');
            if (this.classList.contains('active')) {
                svg.setAttribute('fill', 'currentColor');
            } else {
                svg.setAttribute('fill', 'none');
            }
        });
    }

    // ---- Inquiry Button ----
    var btnInquiry = document.getElementById('btnInquiry');
    if (btnInquiry) {
        btnInquiry.addEventListener('click', function() {
            window.location.href = 'contact.html?subject=inquiry';
        });
    }

    // ---- Catalog Filter Sidebar (Mobile) ----
    var filterToggle = document.getElementById('filterToggle');
    var catalogSidebar = document.getElementById('catalogSidebar');
    var filterClose = document.getElementById('filterClose');
    if (filterToggle && catalogSidebar) {
        filterToggle.addEventListener('click', function() {
            catalogSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    if (filterClose && catalogSidebar) {
        filterClose.addEventListener('click', function() {
            catalogSidebar.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // ---- Price Range ----
    var priceRange = document.getElementById('priceRange');
    var priceValue = document.getElementById('priceValue');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = formatPrice(parseInt(this.value));
        });
    }

    // ---- Newsletter Form ----
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = this.querySelector('input');
            if (input.value) {
                input.value = '';
                alert('Terima kasih telah berlangganan newsletter OakCraft!');
            }
        });
    }

    // ---- Contact Form ----
    var contactForm = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');
    var btnNewMessage = document.getElementById('btnNewMessage');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactForm.style.display = 'none';
            if (formSuccess) formSuccess.style.display = 'block';
        });
    }
    if (btnNewMessage && contactForm && formSuccess) {
        btnNewMessage.addEventListener('click', function() {
            formSuccess.style.display = 'none';
            contactForm.style.display = 'flex';
            contactForm.reset();
        });
    }

    // ---- FAQ Accordion ----
    var faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length) {
        faqQuestions.forEach(function(question) {
            question.addEventListener('click', function() {
                var isExpanded = this.getAttribute('aria-expanded') === 'true';
                faqQuestions.forEach(function(q) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                });
                if (!isExpanded) {
                    this.setAttribute('aria-expanded', 'true');
                    this.nextElementSibling.classList.add('active');
                }
            });
        });
    }

    // ---- Scroll Animations ----
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .collection-card, .product-card, .testimonial-card, .step-card, .team-card').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId !== '#') {
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});