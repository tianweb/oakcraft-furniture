// ============================================
// SUPABASE INTEGRATION - OakCraft Furniture
// ============================================

// 1. KONFIGURASI SUPABASE
// Ganti dengan API Key lengkap Anda dari Supabase Dashboard
const SUPABASE_URL = 'https://ikdtdphzxbmkgerdnfgt.supabase.co';
const SUPABASE_KEY = 'sb_publishable_mHZYhCllg7xisIfmL5m1IQ_VWPEePxW
'; 

// Inisialisasi Supabase Client
let supabaseClient;

try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('Supabase berhasil terhubung');
} catch (error) {
    console.error('Gagal menghubungkan Supabase:', error);
}

// ============================================
// 2. FUNGSI AMBIL DATA PRODUK
// ============================================

async function getProducts() {
    if (!supabaseClient) {
        console.error('Supabase belum terhubung');
        return [];
    }
    
    try {
        const { data, error } = await supabaseClient
            .from('PRODUK terbatas')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error mengambil produk:', error);
            return [];
        }
        
        console.log('Produk berhasil diambil:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// ============================================
// 3. FUNGSI TAMPILKAN PRODUK DI WEBSITE
// ============================================

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category || ''}">
            <div class="product-image">
                <img src="${product.image || 'assets/placeholder.jpg'}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="btn-quick-view" onclick="showProductDetail('${product.id}')">
                        <i class="fas fa-eye"></i> Lihat Detail
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category || 'Furniture'}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description || ''}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="btn-add-cart" onclick="addToCart('${product.id}', '${product.name}', ${product.price})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

async function renderProducts() {
    const container = document.querySelector('.products-grid') || document.querySelector('#products-container');
    
    if (!container) {
        console.log('Container produk tidak ditemukan di halaman ini');
        return;
    }
    
    container.innerHTML = '<div class="loading">Memuat produk...</div>';
    
    const products = await getProducts();
    
    if (products.length === 0) {
        container.innerHTML = '<div class="no-products">Belum ada produk tersedia</div>';
        return;
    }
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// ============================================
// 4. FUNGSI KERANJANG BELANJA (CART)
// ============================================

let cart = JSON.parse(localStorage.getItem('oakcraft-cart')) || [];

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    localStorage.setItem('oakcraft-cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${name} ditambahkan ke keranjang`);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 20px; color: #ddd;"></i>
                <p>Keranjang belanja Anda kosong</p>
                <a href="catalog.html" class="btn-primary" style="margin-top: 20px;">Lanjutkan Belanja</a>
            </div>
        `;
        updateCartSummary();
        return;
    }
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 1)">+</button>
                <button onclick="removeFromCart('${item.id}')" class="btn-remove">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotalElement = document.querySelector('.cart-subtotal');
    const totalElement = document.querySelector('.cart-total');
    const total = getCartTotal();
    
    if (subtotalElement) subtotalElement.textContent = formatPrice(total);
    if (totalElement) totalElement.textContent = formatPrice(total);
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }
    
    localStorage.setItem('oakcraft-cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('oakcraft-cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function clearCart() {
    cart = [];
    localStorage.removeItem('oakcraft-cart');
    updateCartCount();
    renderCart();
}

// ============================================
// 5. FUNGSI CHECKOUT QRIS
// ============================================

async function checkoutWithQRIS() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja kosong!', 'error');
        return;
    }
    
    const total = getCartTotal();
    const orderId = 'ORDER-' + Date.now();
    
    const customerName = document.querySelector('#customer-name')?.value || 'Pelanggan';
    const customerEmail = document.querySelector('#customer-email')?.value || 'pelanggan@email.com';
    const customerPhone = document.querySelector('#customer-phone')?.value || '0895412670908';
    
    if (!customerName || !customerEmail) {
        showNotification('Mohon isi data pembeli terlebih dahulu', 'error');
        return;
    }
    
    try {
        const { data, error } = await supabaseClient
            .from('orders')
            .insert([{
                order_id: orderId,
                total_amount: total,
                items: cart,
                status: 'pending',
                payment_method: 'qris',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                created_at: new Date().toISOString()
            }]);
        
        if (error) throw error;
        
        showQRISModal(orderId, total);
        
    } catch (error) {
        console.error('Error checkout:', error);
        showNotification('Gagal memproses checkout', 'error');
    }
}

function showQRISModal(orderId, amount) {
    const modal = document.createElement('div');
    modal.className = 'qris-modal';
    modal.innerHTML = `
        <div class="qris-content">
            <h3>Pembayaran QRIS</h3>
            <p>Order ID: ${orderId}</p>
            <p>Total: ${formatPrice(amount)}</p>
            <div class="qris-code">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=QRIS-${orderId}" alt="QRIS Code">
            </div>
            <p class="qris-instruction">Scan QRIS code di atas dengan aplikasi e-wallet Anda</p>
            <div class="qris-timer">Waktu tersisa: <span id="qris-timer">15:00</span></div>
            <button class="btn-close" onclick="closeQRISModal()">Tutup</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    let timeLeft = 900;
    const timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const timerElement = document.getElementById('qris-timer');
        if (timerElement) {
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            closeQRISModal();
        }
    }, 1000);
}

function closeQRISModal() {
    const modal = document.querySelector('.qris-modal');
    if (modal) modal.remove();
}

// ============================================
// 6. FUNGSI UTILITAS
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showProductDetail(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// ============================================
// 7. INISIALISASI SAAT HALAMAN DIMUAT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    if (document.querySelector('.products-grid') || document.querySelector('#products-container')) {
        renderProducts();
    }
    
    if (document.querySelector('.cart-items')) {
        renderCart();
    }
});

// Export fungsi
window.getProducts = getProducts;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.checkoutWithQRIS = checkoutWithQRIS;
window.formatPrice = formatPrice;