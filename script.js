const cars = [
    {
        id: 1,
        name: "Toyota Land Cruiser V8",
        price: 25000,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        specs: ["4x4", "8 Seats", "Auto", "Diesel"],
        features: ["Safari Ready", "Roof Rack", "AC", "Bluetooth"]
    },
    {
        id: 2,
        name: "Toyota Prado TX",
        price: 24000,
        image: "https://images.unsplash.com/photo-1520030887113-6b5b2f8b0f8c?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Safari Ready", "Sunroof", "AC", "Touchscreen"]
    },
    {
        id: 3,
        name: "Toyota Fortuner",
        price: 23000,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Off-Road", "Leather Seats", "AC", "Camera"]
    },
    {
        id: 4,
        name: "Mitsubishi Pajero",
        price: 22000,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Safari Ready", "Roof Rails", "AC", "USB"]
    },
    {
        id: 5,
        name: "Nissan Patrol",
        price: 25000,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
        specs: ["4x4", "8 Seats", "Auto", "Petrol"],
        features: ["Luxury", "Sunroof", "AC", "Premium Audio"]
    },
    {
        id: 6,
        name: "Toyota RAV4",
        price: 20000,
        image: "https://images.unsplash.com/photo-1550355171-bb09f4258738?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Hybrid"],
        features: ["Fuel Efficient", "AC", "Bluetooth", "Camera"]
    },
    {
        id: 7,
        name: "Honda CR-V",
        price: 21000,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Spacious", "AC", "Touchscreen", "Safety Sense"]
    },
    {
        id: 8,
        name: "Mazda CX-5",
        price: 21000,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Premium", "Leather", "AC", "Bose Audio"]
    },
    {
        id: 9,
        name: "Subaru Forester",
        price: 20000,
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Off-Road", "X-Mode", "AC", "EyeSight"]
    },
    {
        id: 10,
        name: "Toyota Hiace Van",
        price: 22000,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        specs: ["2WD", "14 Seats", "Manual", "Diesel"],
        features: ["Group Travel", "AC", "Luggage Space", "Comfortable"]
    },
    {
        id: 11,
        name: "Nissan X-Trail",
        price: 21000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["7 Seater", "AC", "Bluetooth", "Camera"]
    },
    {
        id: 12,
        name: "Isuzu MU-X",
        price: 22000,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Towing", "Roof Rails", "AC", "Touchscreen"]
    },
    {
        id: 13,
        name: "Ford Everest",
        price: 24000,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Terrain Mgmt", "Leather", "AC", "Sync 3"]
    },
    {
        id: 14,
        name: "Toyota Rush",
        price: 20000,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Petrol"],
        features: ["Compact SUV", "AC", "Bluetooth", "Camera"]
    },
    {
        id: 15,
        name: "Suzuki Jimny",
        price: 20000,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
        specs: ["4x4", "4 Seats", "Manual", "Petrol"],
        features: ["Off-Road King", "Compact", "AC", "Bluetooth"]
    },
    {
        id: 16,
        name: "Toyota Hilux Double Cab",
        price: 23000,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
        specs: ["4x4", "5 Seats", "Auto", "Diesel"],
        features: ["Pickup", "Canopy", "AC", "Towing"]
    },
    {
        id: 17,
        name: "Ford Ranger Raptor",
        price: 25000,
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&h=400&fit=crop",
        specs: ["4x4", "5 Seats", "Auto", "Diesel"],
        features: ["Performance", "Fox Shocks", "AC", "Leather"]
    },
    {
        id: 18,
        name: "Volkswagen Tiguan",
        price: 22000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Premium", "Panoramic Roof", "AC", "Digital Cockpit"]
    },
    {
        id: 19,
        name: "Hyundai Tucson",
        price: 21000,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Modern Design", "AC", "Wireless Charging", "Safety"]
    },
    {
        id: 20,
        name: "Kia Sportage",
        price: 21000,
        image: "https://images.unsplash.com/photo-1550355171-bb09f4258738?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Stylish", "AC", "Touchscreen", "Smart Key"]
    }
];

const specIcons = {
    "4x4": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
    "AWD": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
    "2WD": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
    "8 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "7 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "5 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "4 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "14 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "Auto": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "Manual": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "Petrol": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/></svg>`,
    "Diesel": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/></svg>`,
    "Hybrid": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/></svg>`
};

function getSpecIcon(spec) {
    return specIcons[spec] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}

function formatPrice(price) {
    return price.toLocaleString();
}

function renderCars() {
    const grid = document.getElementById('carsGrid');
    if (!grid) return;

    grid.innerHTML = cars.map(car => `
        <article class="car-card">
            <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
            <div class="car-content">
                <div class="car-header">
                    <h3 class="car-name">${car.name}</h3>
                    <span class="car-price">KSH ${formatPrice(car.price)}/week</span>
                </div>
                <div class="car-specs">
                    ${car.specs.map(spec => `
                        <span class="spec">
                            ${getSpecIcon(spec)}
                            ${spec}
                        </span>
                    `).join('')}
                </div>
                <div class="car-features">
                    ${car.features.map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>
                <button class="btn-book" onclick="bookCar('${car.name}')">Book Now</button>
            </div>
        </article>
    `).join('');
}

function bookCar(carName) {
    const message = `Hello, I'm interested in booking the ${carName}. Please provide more details and availability.`;
    const whatsappUrl = `https://wa.me/254758922294?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

document.addEventListener('DOMContentLoaded', () => {
    renderCars();

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.car-card, .features li, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});