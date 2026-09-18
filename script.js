const cars = [
    {
        id: 1,
        name: "Toyota Probox",
        price: 20000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Manual", "Petrol"],
        features: ["Fuel Efficient", "Spacious Cargo", "AC", "Reliable"]
    },
    {
        id: 2,
        name: "Toyota Succeed",
        price: 22000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Manual", "Petrol"],
        features: ["Fuel Efficient", "Low Maintenance", "AC", "Spacious"]
    },
    {
        id: 3,
        name: "Nissan Wingroad",
        price: 23000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Comfortable", "Good Fuel Economy", "AC", "Smooth Ride"]
    },
    {
        id: 4,
        name: "Mazda Familia",
        price: 25000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Sporty Handling", "AC", "Reliable", "Good Resale"]
    },
    {
        id: 5,
        name: "Toyota Corolla (NZE)",
        price: 28000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1550355171-bb09f4258738?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Very Reliable", "Fuel Efficient", "AC", "Spacious Interior"]
    },
    {
        id: 6,
        name: "Honda Fit",
        price: 30000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Versatile Interior", "Fuel Efficient", "AC", "Compact"]
    },
    {
        id: 7,
        name: "Toyota Vitz",
        price: 25000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["City Friendly", "Fuel Efficient", "AC", "Easy Parking"]
    },
    {
        id: 8,
        name: "Suzuki Swift",
        price: 27000,
        category: "economy",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Fun to Drive", "Fuel Efficient", "AC", "Compact"]
    },
    {
        id: 9,
        name: "Toyota Premio",
        price: 35000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Comfortable", "Spacious", "AC", "Executive Feel"]
    },
    {
        id: 10,
        name: "Toyota Allion",
        price: 38000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Luxury Interior", "Smooth Ride", "AC", "Quiet Cabin"]
    },
    {
        id: 11,
        name: "Nissan Tiida",
        price: 32000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Spacious", "Comfortable", "AC", "Good Value"]
    },
    {
        id: 12,
        name: "Mazda Axela",
        price: 40000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Sporty", "Quality Interior", "AC", "Responsive"]
    },
    {
        id: 13,
        name: "Subaru Impreza",
        price: 45000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1550355171-bb09f4258738?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["AWD", "Safe", "AC", "All Weather"]
    },
    {
        id: 14,
        name: "Toyota RAV4 (XA30)",
        price: 55000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["SUV Capability", "Spacious", "AC", "Ground Clearance"]
    },
    {
        id: 15,
        name: "Honda CR-V (RD1-RD3)",
        price: 50000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Family Friendly", "Reliable", "AC", "Spacious"]
    },
    {
        id: 16,
        name: "Mitsubishi Outlander",
        price: 60000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&h=400&fit=crop",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["7 Seater", "AWD", "AC", "Versatile"]
    },
    {
        id: 17,
        name: "Toyota Harrier (ACU30)",
        price: 75000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Luxury SUV", "Premium Interior", "AC", "Smooth Ride"]
    },
    {
        id: 18,
        name: "Toyota Kluger",
        price: 80000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["Family SUV", "7 Seater", "AC", "Comfortable"]
    },
    {
        id: 19,
        name: "Nissan X-Trail (T31)",
        price: 65000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["7 Seater", "AWD", "AC", "Practical"]
    },
    {
        id: 20,
        name: "Mazda CX-5",
        price: 85000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Premium Feel", "SkyActiv", "AC", "Efficient"]
    },
    {
        id: 21,
        name: "Subaru Forester",
        price: 70000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1550355171-bb09f4258738?w=600&h=400&fit=crop",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["AWD", "EyeSight", "AC", "Safe"]
    },
    {
        id: 22,
        name: "Toyota Fortuner",
        price: 95000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Off-Road", "7 Seater", "AC", "Tough"]
    },
    {
        id: 23,
        name: "Mitsubishi Pajero Sport",
        price: 100000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Off-Road", "7 Seater", "AC", "Capable"]
    },
    {
        id: 24,
        name: "Isuzu MU-X",
        price: 90000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Towing", "7 Seater", "AC", "Durable"]
    },
    {
        id: 25,
        name: "Toyota Prado (TX)",
        price: 130000,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Luxury 4x4", "Sunroof", "AC", "Leather"]
    },
    {
        id: 26,
        name: "Toyota Land Cruiser V8",
        price: 180000,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        specs: ["4x4", "8 Seats", "Auto", "Diesel"],
        features: ["Ultimate SUV", "V8 Power", "AC", "Premium"]
    },
    {
        id: 27,
        name: "Toyota Land Cruiser 70 Series",
        price: 150000,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
        specs: ["4x4", "5 Seats", "Manual", "Diesel"],
        features: ["Indestructible", "Workhorse", "AC", "Legendary"]
    },
    {
        id: 28,
        name: "Nissan Patrol (Y61)",
        price: 140000,
        category: "luxury",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop",
        specs: ["4x4", "8 Seats", "Auto", "Petrol"],
        features: ["V8 Power", "8 Seater", "AC", "Off-Road King"]
    },
    {
        id: 29,
        name: "Toyota Hiace Van",
        price: 40000,
        category: "mid",
        image: "https://images.unsplash.com/photo-1550355171-bb09f4258738?w=600&h=400&fit=crop",
        specs: ["2WD", "14 Seats", "Manual", "Diesel"],
        features: ["Group Transport", "AC", "Spacious", "Reliable"]
    },
    {
        id: 30,
        name: "Toyota Hilux Double Cab",
        price: 55000,
        category: "premium",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
        specs: ["4x4", "5 Seats", "Auto", "Diesel"],
        features: ["Pickup", "Canopy", "AC", "Towing"]
    }
];

const specIcons = {
    "2WD": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
    "AWD": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
    "4x4": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/><path d="M9 17v4"/><path d="M15 17v4"/></svg>`,
    "5 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "7 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "8 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "14 Seats": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "Auto": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "Manual": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    "Petrol": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/></svg>`,
    "Diesel": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12"/><path d="M3 17h18"/></svg>`
};

function getSpecIcon(spec) {
    return specIcons[spec] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}

function formatPrice(price) {
    return price.toLocaleString();
}

function renderCars(filter = 'all') {
    const grid = document.getElementById('fleetGrid');
    if (!grid) return;

    let filteredCars = cars;
    if (filter !== 'all') {
        filteredCars = cars.filter(car => car.category === filter);
    }

    grid.innerHTML = filteredCars.map(car => `
        <article class="vehicle-card" data-category="${car.category}">
            <img src="${car.image}" alt="${car.name}" class="vehicle-image" loading="lazy">
            <div class="vehicle-content">
                <div class="vehicle-header">
                    <h3 class="vehicle-name">${car.name}</h3>
                    <span class="vehicle-price">KSH ${formatPrice(car.price)}/week</span>
                </div>
                <div class="vehicle-specs">
                    ${car.specs.map(spec => `
                        <span class="spec">
                            ${getSpecIcon(spec)}
                            ${spec}
                        </span>
                    `).join('')}
                </div>
                <div class="vehicle-features">
                    ${car.features.map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>
                <button class="btn-book" onclick="bookCar('${car.name}', ${car.price})">Book Now</button>
            </div>
        </article>
    `).join('');
}

function bookCar(carName, price) {
    const message = `Hello, I'm interested in booking the ${carName} at KSH ${formatPrice(price)}/week. Please provide more details and availability.`;
    const whatsappUrl = `https://wa.me/254758922294?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

document.addEventListener('DOMContentLoaded', () => {
    renderCars();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCars(btn.dataset.filter);
        });
    });

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

    const vehicleSelect = document.getElementById('vehicleSelect');
    if (vehicleSelect) {
        cars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.name;
            option.textContent = `${car.name} - KSH ${formatPrice(car.price)}/week`;
            vehicleSelect.appendChild(option);
        });
    }

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

    document.querySelectorAll('.vehicle-card, .features li, .contact-item, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const message = `Hello, I'd like to book a vehicle.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nVehicle: ${data.vehicle}\nPickup: ${data.pickup}\nReturn: ${data.return}\nNotes: ${data.notes || 'None'}`;
            const whatsappUrl = `https://wa.me/254758922294?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});