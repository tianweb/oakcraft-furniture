// ============================================
// OakCraft Furniture - Main JavaScript
// ============================================

// Product Data
const products = [
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
        material: "oak"
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
        material: "oak"
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
        material: "walnut"
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
        material: "teak"
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
        material: "oak"
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
        material: "fabric"
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
        material: "walnut"
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
        material: "fabric"
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
        material: "oak"
    },
    {
        id: 10,
        name: "Nakas Samping Tempat Tidur",
        category: "bedroom",
        categoryLabel: "Kamar Tidur",
        price: 2100000,
        priceFormatted: "Rp2.100.000",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80",
        rating: 4.6,
        reviews: 52,
        badge: null,
        material: "walnut"
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
        material: "teak"
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
        material: "oak"
    }
];

// Utility Functions
function formatPrice(price) {
    return 'Rp' + price.toLocaleString('id-ID');
}

function createProductCard(product) {
    const badge = product.badge ? '<span class="product-card-badge">' + product.badge + '</span>' : '';
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
                '<span class="stars">' + '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '') + '</span>' +
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

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
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

    // Mobile nav toggle
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Load Bestsellers on Homepage
    var bestsellersGrid = document.getElementById('bestsellersGrid');
    if (bestsellersGrid) {
        var bestsellers = products.filter(function(p) { return p.badge === 'Terlaris' || p.rating >= 4.8; }).slice(0, 4);
        bestsellersGrid.innerHTML = bestsellers.map(createProductCard).join('');
    }

    // Load Catalog Products
    var catalogGrid = document.getElementById('catalogGrid');
    if (catalogGrid) {
        var urlParams = new URLSearchParams(window.location.search);
        var categoryFilter = urlParams.get('category');

        var filteredProducts = products;
        if (categoryFilter) {
            filteredProducts = products.filter(function(p) { return p.category === categoryFilter; });
            // Update checkboxes
            document.querySelectorAll('#categoryFilters input').forEach(function(cb) {
                cb.checked = cb.value === categoryFilter;
            });
        }

        catalogGrid.innerHTML = filteredProducts.map(createProductCard).join('');

        var productCount = document.getElementById('productCount');
        if (productCount) {
            productCount.textContent = 'Menampilkan ' + filteredProducts.length + ' produk';
        }
    }

    // Load Related Products on Product Page
    var relatedProductsGrid = document.getElementById('relatedProducts');
    if (relatedProductsGrid) {
        var related = products.filter(function(p) { return p.id !== 1; }).slice(0, 4);
        relatedProductsGrid.innerHTML = related.map(createProductCard).join('');
    }

    // Product Gallery
    var thumbs = document.querySelectorAll('.thumb');
    var mainImage = document.getElementById('mainImage');
    if (thumbs.length && mainImage) {
        thumbs.forEach(function(thumb) {
            thumb.addEventListener('click', function() {
                thumbs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                mainImage.src = this.dataset.image;
            });
        });
    }

    // Product Color Options
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

    // Quantity Selector
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

    // Product Tabs
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

    // Wishlist Button
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

    // Inquiry Button
    var btnInquiry = document.getElementById('btnInquiry');
    if (btnInquiry) {
        btnInquiry.addEventListener('click', function() {
            window.location.href = 'contact.html?subject=inquiry';
        });
    }

    // Catalog Filters
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

    // Price Range
    var priceRange = document.getElementById('priceRange');
    var priceValue = document.getElementById('priceValue');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = formatPrice(parseInt(this.value));
        });
    }

    // Newsletter Form
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

    // Contact Form
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

    // FAQ Accordion
    var faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length) {
        faqQuestions.forEach(function(question) {
            question.addEventListener('click', function() {
                var isExpanded = this.getAttribute('aria-expanded') === 'true';
                // Close all
                faqQuestions.forEach(function(q) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                });
                // Open clicked if it was closed
                if (!isExpanded) {
                    this.setAttribute('aria-expanded', 'true');
                    this.nextElementSibling.classList.add('active');
                }
            });
        });
    }

    // Scroll animations
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

    // Smooth scroll for anchor links
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
