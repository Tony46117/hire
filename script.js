const cars = [
    {
        id: 1,
        name: "Toyota Probox",
        price: 20000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Toyota_Probox_Van_DX.jpg/960px-Toyota_Probox_Van_DX.jpg",
        specs: ["2WD", "5 Seats", "Manual", "Petrol"],
        features: ["Fuel Efficient", "Spacious Cargo", "AC", "Reliable"]
    },
    {
        id: 2,
        name: "Toyota Succeed",
        price: 22000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toyota_Succeed_Van_UL.jpg/960px-Toyota_Succeed_Van_UL.jpg",
        specs: ["2WD", "5 Seats", "Manual", "Petrol"],
        features: ["Fuel Efficient", "Low Maintenance", "AC", "Spacious"]
    },
    {
        id: 3,
        name: "Nissan Wingroad",
        price: 23000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nissan_AD_DX_2WD_%285BF-VY12%29.jpg/960px-Nissan_AD_DX_2WD_%285BF-VY12%29.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Comfortable", "Good Fuel Economy", "AC", "Smooth Ride"]
    },
    {
        id: 4,
        name: "Mazda Familia",
        price: 25000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2003_Mazda_323_%28BJ_II%29_Proteg%C3%A9_Shades_sedan_%282015-08-07%29_01.jpg/960px-2003_Mazda_323_%28BJ_II%29_Proteg%C3%A9_Shades_sedan_%282015-08-07%29_01.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Sporty Handling", "AC", "Reliable", "Good Resale"]
    },
    {
        id: 5,
        name: "Toyota Corolla (NZE)",
        price: 28000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2011_Toyota_Corolla_Base_in_Super_White%2C_Front_Left%2C_08-06-2022.jpg/960px-2011_Toyota_Corolla_Base_in_Super_White%2C_Front_Left%2C_08-06-2022.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Very Reliable", "Fuel Efficient", "AC", "Spacious Interior"]
    },
    {
        id: 6,
        name: "Honda Fit",
        price: 30000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Honda_Jazz_Hybrid_Executive_%28IV%29_%E2%80%93_f_18102020.jpg/960px-Honda_Jazz_Hybrid_Executive_%28IV%29_%E2%80%93_f_18102020.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Versatile Interior", "Fuel Efficient", "AC", "Compact"]
    },
    {
        id: 7,
        name: "Toyota Vitz",
        price: 25000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2017_Toyota_Yaris_L_5-door%2C_front_right%2C_08-25-2024.jpg/960px-2017_Toyota_Yaris_L_5-door%2C_front_right%2C_08-25-2024.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["City Friendly", "Fuel Efficient", "AC", "Easy Parking"]
    },
    {
        id: 8,
        name: "Suzuki Swift",
        price: 27000,
        category: "economy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg/960px-Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Fun to Drive", "Fuel Efficient", "AC", "Compact"]
    },
    {
        id: 9,
        name: "Toyota Premio",
        price: 35000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2016-2021_Toyota_Premio.jpg/960px-2016-2021_Toyota_Premio.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Comfortable", "Spacious", "AC", "Executive Feel"]
    },
    {
        id: 10,
        name: "Toyota Allion",
        price: 38000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/18_Toyota_Allion_%28T260%29.jpg/960px-18_Toyota_Allion_%28T260%29.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Luxury Interior", "Smooth Ride", "AC", "Quiet Cabin"]
    },
    {
        id: 11,
        name: "Nissan Tiida",
        price: 32000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nissan_Tiida_C11_003.JPG/960px-Nissan_Tiida_C11_003.JPG",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Spacious", "Comfortable", "AC", "Good Value"]
    },
    {
        id: 12,
        name: "Mazda Axela",
        price: 40000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mazda3_SKYACTIV-G.jpg/960px-Mazda3_SKYACTIV-G.jpg",
        specs: ["2WD", "5 Seats", "Auto", "Petrol"],
        features: ["Sporty", "Quality Interior", "AC", "Responsive"]
    },
    {
        id: 13,
        name: "Subaru Impreza",
        price: 45000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Subaru_Impreza_%28GU%29_Automesse_Ludwigsburg_2024_IMG_1593.jpg/960px-Subaru_Impreza_%28GU%29_Automesse_Ludwigsburg_2024_IMG_1593.jpg",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["AWD", "Safe", "AC", "All Weather"]
    },
    {
        id: 14,
        name: "Toyota RAV4 (XA30)",
        price: 55000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/TOYOTA_RAV4_%28XA30%29_China.jpg/960px-TOYOTA_RAV4_%28XA30%29_China.jpg",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["SUV Capability", "Spacious", "AC", "Ground Clearance"]
    },
    {
        id: 15,
        name: "Honda CR-V (RD1)",
        price: 50000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Honda_CR-V_%28RD1%29_Washington_DC_Metro_Area%2C_USA.jpg/960px-Honda_CR-V_%28RD1%29_Washington_DC_Metro_Area%2C_USA.jpg",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Family Friendly", "Reliable", "AC", "Spacious"]
    },
    {
        id: 16,
        name: "Mitsubishi Outlander",
        price: 60000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2025_Mitsubishi_Outlander_PHEV_%28fourth_generation%29_IMG_3129.jpg/960px-2025_Mitsubishi_Outlander_PHEV_%28fourth_generation%29_IMG_3129.jpg",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["7 Seater", "AWD", "AC", "Versatile"]
    },
    {
        id: 17,
        name: "Toyota Harrier (ACU30)",
        price: 75000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Toyota_Harrier_%28XU30%29.jpg/960px-Toyota_Harrier_%28XU30%29.jpg",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Luxury SUV", "Premium Interior", "AC", "Smooth Ride"]
    },
    {
        id: 18,
        name: "Toyota Kluger",
        price: 80000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Toyota_Highlander_Hybrid_%28XU70%29_1X7A6356.jpg/960px-Toyota_Highlander_Hybrid_%28XU70%29_1X7A6356.jpg",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["Family SUV", "7 Seater", "AC", "Comfortable"]
    },
    {
        id: 19,
        name: "Nissan X-Trail (T31)",
        price: 65000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/NISSAN_X-TRAIL_%28T31%29_China.jpg/960px-NISSAN_X-TRAIL_%28T31%29_China.jpg",
        specs: ["AWD", "7 Seats", "Auto", "Petrol"],
        features: ["7 Seater", "AWD", "AC", "Practical"]
    },
    {
        id: 20,
        name: "Mazda CX-5",
        price: 85000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/2024_Mazda_CX-5_2.5_S_Select_in_Platinum_Quartz_Metallic%2C_front_right.jpg/960px-2024_Mazda_CX-5_2.5_S_Select_in_Platinum_Quartz_Metallic%2C_front_right.jpg",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["Premium Feel", "SkyActiv", "AC", "Efficient"]
    },
    {
        id: 21,
        name: "Subaru Forester",
        price: 70000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Subaru_Forester_%28SL%29_e-BOXER_DSC_8811.jpg/960px-Subaru_Forester_%28SL%29_e-BOXER_DSC_8811.jpg",
        specs: ["AWD", "5 Seats", "Auto", "Petrol"],
        features: ["AWD", "EyeSight", "AC", "Safe"]
    },
    {
        id: 22,
        name: "Toyota Fortuner",
        price: 95000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/960px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Off-Road", "7 Seater", "AC", "Tough"]
    },
    {
        id: 23,
        name: "Mitsubishi Pajero Sport",
        price: 100000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mitsubishi_Pajero_Sport_%283rd_generation%29_1X7A0409.jpg/960px-Mitsubishi_Pajero_Sport_%283rd_generation%29_1X7A0409.jpg",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Off-Road", "7 Seater", "AC", "Capable"]
    },
    {
        id: 24,
        name: "Isuzu MU-X",
        price: 90000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Isuzu_MU-X_LS-M_%28II%2C_Facelift%29_%E2%80%93_f_02012026.jpg/960px-Isuzu_MU-X_LS-M_%28II%2C_Facelift%29_%E2%80%93_f_02012026.jpg",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Towing", "7 Seater", "AC", "Durable"]
    },
    {
        id: 25,
        name: "Toyota Land Cruiser Prado",
        price: 130000,
        category: "luxury",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Toyota_Land_Cruiser_Prado_J150_3.0_TX_2022_%281%29.jpg/960px-Toyota_Land_Cruiser_Prado_J150_3.0_TX_2022_%281%29.jpg",
        specs: ["4x4", "7 Seats", "Auto", "Diesel"],
        features: ["Luxury 4x4", "Sunroof", "AC", "Leather"]
    },
    {
        id: 26,
        name: "Toyota Land Cruiser V8",
        price: 180000,
        category: "luxury",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2014_Toyota_Land_Cruiser_200_VX_V8_in_Black%2C_front_right.jpg/960px-2014_Toyota_Land_Cruiser_200_VX_V8_in_Black%2C_front_right.jpg",
        specs: ["4x4", "8 Seats", "Auto", "Diesel"],
        features: ["Ultimate SUV", "V8 Power", "AC", "Premium"]
    },
    {
        id: 27,
        name: "Toyota Land Cruiser 70 Series",
        price: 150000,
        category: "luxury",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/The_frontview_of_Toyota_LAND_CRUISER_70_PICKUP_at_night.JPG/960px-The_frontview_of_Toyota_LAND_CRUISER_70_PICKUP_at_night.JPG",
        specs: ["4x4", "5 Seats", "Manual", "Diesel"],
        features: ["Indestructible", "Workhorse", "AC", "Legendary"]
    },
    {
        id: 28,
        name: "Nissan Patrol (Y61)",
        price: 140000,
        category: "luxury",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nissan_Safari_Y61_002.JPG/960px-Nissan_Safari_Y61_002.JPG",
        specs: ["4x4", "8 Seats", "Auto", "Petrol"],
        features: ["V8 Power", "8 Seater", "AC", "Off-Road King"]
    },
    {
        id: 29,
        name: "Toyota Hiace Van",
        price: 40000,
        category: "mid",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2020_Toyota_HiAce_%28front%29.jpg/960px-2020_Toyota_HiAce_%28front%29.jpg",
        specs: ["2WD", "14 Seats", "Manual", "Diesel"],
        features: ["Group Transport", "AC", "Spacious", "Reliable"]
    },
    {
        id: 30,
        name: "Toyota Hilux Double Cab",
        price: 55000,
        category: "premium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg/960px-2016_Toyota_HiLux_Invincible_D-4D_4WD_2.4_Front.jpg",
        specs: ["4x4", "5 Seats", "Auto", "Diesel"],
        features: ["Pickup", "Canopy", "AC", "Towing"]
    }
];

// Neutral placeholder shown if any image ever fails to load (no broken-image icons)
const IMAGE_PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f4f6"/><g fill="none" stroke="#9ca3af" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><path d="M150 280V180l40-70h220l40 70v100"/><path d="M110 280h380"/><circle cx="190" cy="290" r="26"/><circle cx="410" cy="290" r="26"/><path d="M190 180h220"/></g><text x="300" y="360" text-anchor="middle" font-family="Arial" font-size="22" fill="#6b7280">CarHire Kenya</text></svg>`
);

document.addEventListener("error", (e) => {
    const t = e.target;
    if (t && t.tagName === "IMG" && !t.dataset.fallback) {
        t.dataset.fallback = "1";
        t.src = IMAGE_PLACEHOLDER;
    }
}, true);

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
