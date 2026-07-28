/**
 * NEXUS DIGITAL - 3D Bank Cards Presentation Controller
 * Handles dynamic content swaps, theme gradients, and 3D Spline iframe animations.
 */

// 1. Bank Cards Database
// Note: You can easily replace the 'iframeCode' and titles with your own code when ready.
const CARDS_DATABASE = [
    {
        id: "card-1",
        name: "Plus Card",
        tag: "Mastercard",
        description: "A card designed for all mass-retail customers aged 23 and above who use BOG services. It targets low-to-medium income individuals across Georgia.",
        imageUrl: "images/plus.png",
        promoImageUrl: "images/plus-promo.jpg",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-hscK4wPIG0S0mjGLrdgDkulK/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-hscK4wPIG0S0mjGLrdgDkulK/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#FF5C0A",       // orange
            accentEnd: "#FF5C0A",    
            glow1: "rgba(255, 92, 10, 0.25)",
            glow2: "rgba(255, 92, 10, 0.15)"
        }
    },
    {
        id: "card-2",
        name: "Plus Card Gold",
        tag: "Mastercard Gold",
        description: "A card designed for all mass-retail customers aged 23 and above who use BOG services. It targets low-to-medium income individuals across Georgia.",
        imageUrl: "images/plus-gold.png",
        promoImageUrl: "images/plus-gold-promo.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-rw8hG1JPOAJFFCg1lFt6PllI/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/pluscardgoldcopy-sWKjlzyhEbmSsiWvQrihWwyP/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#FFD617",       // gold
            accentEnd: "#f59e0b",    
            glow1: "rgba(212, 175, 55, 0.25)",
            glow2: "rgba(245, 158, 11, 0.15)"
        }
    },
    {
        id: "card-3",
        name: "Super Plus Card",
        tag: "Visa",
        description: "A card designed for the upper mass-retail segment—those who utilize the highest-value product bundles and represent the transitional segment leading up to SOLO. This targets medium-to-high-income customers who do not or cannot use SOLO services, yet actively engage with banking products and prioritize receiving premium benefits.",
        imageUrl: "images/super-plus.png",
        promoImageUrl: "images/super-plus-promo.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-SeHUXUzEFKzP3wFpAcbyonkP/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-SeHUXUzEFKzP3wFpAcbyonkP/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#FFFFFF",       // white
            accentEnd: "#06b6d4",    
            glow1: "rgba(16, 185, 129, 0.25)",
            glow2: "rgba(6, 182, 212, 0.15)"
        }
    },
    {
        id: "card-4",
        name: "Super Plus Card Gold",
        tag: "Visa Gold",
        description: "A card designed for the upper mass-retail segment—those who utilize the highest-value product bundles and represent the transitional segment leading up to SOLO. This targets medium-to-high-income customers who do not or cannot use SOLO services, yet actively engage with banking products and prioritize receiving premium benefits.",
        imageUrl: "images/super-plus-gold.png",
        promoImageUrl: "images/super-plus-gold-promo.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-z5Lbpgp4RA4QjFGuOXn8Ip11/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-z5Lbpgp4RA4QjFGuOXn8Ip11/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#FFD617",       // gold
            accentEnd: "#1d4ed8",    
            glow1: "rgba(59, 130, 246, 0.25)",
            glow2: "rgba(29, 78, 216, 0.15)"
        }
    },
    {
        id: "card-5",
        name: "sCool Card",
        tag: "Mastercard",
        description: "Targeted for school students aged 6–18.",
        imageUrl: "images/scool.png",
        promoImageUrl: "images/scool-promo.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-DusFhk5YWQcN1WhEkKUCO2yp/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-DusFhk5YWQcN1WhEkKUCO2yp/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#91E000",       // lime green
            accentEnd: "#334155",    
            glow1: "rgba(100, 116, 139, 0.25)",
            glow2: "rgba(51, 65, 85, 0.15)"
        }
    },
    {
        id: "card-6",
        name: "Student Cards",
        tag: "Mastercard",
        description: "Youth aged 18–23 and individuals with active student status.",
        imageUrl: "images/students.png",
        promoImageUrl: "images/students-promo.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-akr9MyVcnJqj5i7nK9xUgZ0q/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-akr9MyVcnJqj5i7nK9xUgZ0q/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#704BBC",       // purple
            accentEnd: "#be123c",    
            glow1: "rgba(244, 63, 94, 0.25)",
            glow2: "rgba(190, 18, 60, 0.15)"
        }
    },
    {
        id: "card-7",
        name: "Teacher's Card",
        tag: "Mastercard",
        description: "Designed for school staff nationwide who are enrolled in the payroll program. This card offers tailored benefits created specifically for educators.",
        imageUrl: "images/teacher.png",
        promoImageUrl: "images/teacher-promo.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcardcopy-Vw8DdiCUihgx4crFUeJS0UAS/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-Vw8DdiCUihgx4crFUeJS0UAS/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#EEE8E2",       // light grey
            accentEnd: "#0f766e",    
            glow1: "rgba(6, 182, 212, 0.25)",
            glow2: "rgba(15, 118, 110, 0.15)"
        }
    },
    {
        id: "card-8",
        name: "Solo",
        tag: "Visa",
        description: "SOLO is a premium banking service from the Bank of Georgia, fully tailored to your lifestyle and expectations. It is not just a banking service – it is a personal partnership, created for people who value time, status and an individual approach to achieving their financial goals.",
        imageUrl: "images/solo-visa.png",
        promoImageUrl: "images/solo-package.png",
        iframeCode: `<iframe src='https://my.spline.design/bogcard-6iROkGyYKfu6qLtot5SGawOc/' frameborder='0' width='100%' height='100%'></iframe>`,
        interactiveIframeCode: `<iframe src='https://my.spline.design/bogcardcopy-Vw8DdiCUihgx4crFUeJS0UAS/' frameborder='0' width='100%' height='100%'></iframe>`, // Replace with interactive model if different
        theme: {
            accent: "#EEE8E2",       // light grey
            accentEnd: "#0f766e",    
            glow1: "rgba(6, 182, 212, 0.25)",
            glow2: "rgba(15, 118, 110, 0.15)"
        }
    }
];

// 2. DOM Elements
const cardListContainer = document.getElementById("card-list");
const productTitle = document.getElementById("product-title");
const productDescription = document.getElementById("product-description");
const iframeWrapper = document.getElementById("iframe-wrapper");
const viewportLoader = document.getElementById("viewport-loader");
const canvasContainer = document.querySelector(".canvas-container");
const displayScrollContainer = document.getElementById("display-scroll-container");
const promoContainer = document.getElementById("promo-container");
const promoImage = document.getElementById("promo-image");
const interactiveToggle = document.getElementById("interactive-toggle");

let currentActiveCardId = null;
let isOrbitMode = false;

// 3. Initialize Sidebar Navigation List
function initApp() {
    cardListContainer.innerHTML = "";
    
    CARDS_DATABASE.forEach((card, index) => {
        // Create card navigation elements
        const cardItem = document.createElement("div");
        cardItem.className = `card-item ${index === 0 ? "active" : ""}`;
        cardItem.dataset.id = card.id;
        cardItem.style.setProperty("--active-color", card.theme.accent);
        cardItem.style.setProperty("--active-glow", card.theme.glow1);
        
        // Define preview content (render img if imageUrl is set, otherwise default div)
        const previewHtml = card.imageUrl 
            ? `<img class="card-icon-preview" src="${card.imageUrl}" alt="${card.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
               <div class="card-icon-preview css-preview" style="display:none; background: linear-gradient(135deg, ${card.theme.accent}22, ${card.theme.accentEnd}44)"></div>`
            : `<div class="card-icon-preview css-preview" style="background: linear-gradient(135deg, ${card.theme.accent}22, ${card.theme.accentEnd}44)"></div>`;

        cardItem.innerHTML = `
            ${previewHtml}
            <div class="card-item-details">
                <p class="card-item-name">${card.name}</p>
                <p class="card-item-tag">${card.tag}</p>
            </div>
        `;
        
        // Spotlight hover effect: tracking cursor coordinates for interactive lighting
        cardItem.addEventListener("mousemove", (e) => {
            const rect = cardItem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardItem.style.setProperty("--x", `${x}px`);
            cardItem.style.setProperty("--y", `${y}px`);
        });

        cardItem.addEventListener("click", () => {
            if (currentActiveCardId === card.id) return;
            selectCard(card.id);
        });

        cardListContainer.appendChild(cardItem);
    });

    // Load initial first card
    if (CARDS_DATABASE.length > 0) {
        selectCard(CARDS_DATABASE[0].id, true);
    }
}

// Helper to switch iframe contents dynamically with premium fade out/loader transitions
function switchIframeContent(newIframeCode) {
    viewportLoader.classList.add("active");
    iframeWrapper.classList.add("fade-out");
    
    setTimeout(() => {
        iframeWrapper.innerHTML = newIframeCode;
        const iframe = iframeWrapper.querySelector("iframe");
        if (iframe) {
            iframe.onload = () => {
                viewportLoader.classList.remove("active");
                iframeWrapper.classList.remove("fade-out");
            };
        } else {
            viewportLoader.classList.remove("active");
            iframeWrapper.classList.remove("fade-out");
        }
    }, 300);
}

// 4. Select Card and Update UI
function selectCard(cardId, isInitialLoad = false) {
    const cardData = CARDS_DATABASE.find(c => c.id === cardId);
    if (!cardData) return;

    currentActiveCardId = cardId;

    // Reset display scroll container position to top
    if (displayScrollContainer) {
        displayScrollContainer.scrollTop = 0;
    }

    // Reset 3D Orbit interactive mode
    isOrbitMode = false;
    if (interactiveToggle) {
        interactiveToggle.textContent = "დაატრიალე 3D";
        interactiveToggle.classList.remove("orbit-active");
        interactiveToggle.style.borderColor = "var(--border-glass)";
    }
    iframeWrapper.style.pointerEvents = "none";
    if (canvasContainer) {
        canvasContainer.style.opacity = "1";
        canvasContainer.style.transform = "translateY(0)";
    }

    // Update active class in sidebar items
    const menuItems = cardListContainer.querySelectorAll(".card-item");
    menuItems.forEach(item => {
        if (item.dataset.id === cardId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Update UI Dynamic Theme Styles
    const root = document.documentElement;
    root.style.setProperty("--active-color", cardData.theme.accent);
    root.style.setProperty("--active-color-end", cardData.theme.accentEnd);

    // Handle iframe dynamic swap with Fade-out and Loader logic
    if (isInitialLoad) {
        // Direct initial render
        viewportLoader.classList.add("active");
        iframeWrapper.classList.add("fade-out");
        
        iframeWrapper.innerHTML = cardData.iframeCode;
        
        const iframe = iframeWrapper.querySelector("iframe");
        if (iframe) {
            iframe.onload = () => {
                viewportLoader.classList.remove("active");
                iframeWrapper.classList.remove("fade-out");
            };
        }
        updateTexts(cardData);

        // Load promo image instantly
        if (cardData.promoImageUrl) {
            promoImage.src = cardData.promoImageUrl;
            promoContainer.style.display = "flex";
            promoImage.classList.add("loaded");
        } else {
            promoContainer.style.display = "none";
        }
    } else {
        // Use helper to switch to the default preview iframe
        switchIframeContent(cardData.iframeCode);
        
        if (promoImage) {
            promoImage.classList.remove("loaded");
        }

        // Handle text overlays and promo image swapping with transition matching timeout
        setTimeout(() => {
            updateTexts(cardData);

            // Swap promo image and fade it back in when loaded
            if (cardData.promoImageUrl) {
                promoImage.src = cardData.promoImageUrl;
                promoContainer.style.display = "flex";
                promoImage.onload = () => {
                    promoImage.classList.add("loaded");
                };
            } else {
                promoContainer.style.display = "none";
            }
        }, 300);
    }
}

// Helper to update text overlay with a smooth fade animation
function updateTexts(cardData) {
    const overlay = document.querySelector(".card-info-overlay");
    if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.transform = "translateY(-10px)";
        overlay.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        
        setTimeout(() => {
            productTitle.textContent = cardData.name;
            productDescription.textContent = cardData.description;
            overlay.style.opacity = "1";
            overlay.style.transform = "translateY(0)";
        }, 200);
    } else {
        productTitle.textContent = cardData.name;
        productDescription.textContent = cardData.description;
    }
}

// 5. Handle Interactive Orbit Mode and Scroll Synchronization
if (interactiveToggle) {
    interactiveToggle.addEventListener("click", () => {
        const cardData = CARDS_DATABASE.find(c => c.id === currentActiveCardId);
        if (!cardData) return;

        isOrbitMode = !isOrbitMode;
        if (isOrbitMode) {
            iframeWrapper.style.pointerEvents = "auto";
            interactiveToggle.textContent = "სქროლის რეჟიმი";
            interactiveToggle.classList.add("orbit-active");
            interactiveToggle.style.borderColor = "var(--active-color)";
            
            // Swap to the interactive/orbit-mode 3D iframe model
            const interactiveCode = cardData.interactiveIframeCode || cardData.iframeCode;
            switchIframeContent(interactiveCode);
        } else {
            iframeWrapper.style.pointerEvents = "none";
            interactiveToggle.textContent = "დაატრიალე 3D";
            interactiveToggle.classList.remove("orbit-active");
            interactiveToggle.style.borderColor = "var(--border-glass)";
            
            // Swap back to the default preview 3D iframe model
            switchIframeContent(cardData.iframeCode);
        }
    });
}

// Synchronized scroll animation: fades out 3D card and slides it up as you scroll down
if (displayScrollContainer && canvasContainer) {
    displayScrollContainer.addEventListener("scroll", () => {
        const scrollTop = displayScrollContainer.scrollTop;
        
        // Fades out canvas container over 300px of scrolling
        const opacity = Math.max(0, 1 - (scrollTop / 300));
        const translateY = -scrollTop * 0.4;
        
        canvasContainer.style.opacity = opacity;
        canvasContainer.style.transform = `translateY(${translateY}px)`;
    });
}

// Start app when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initApp);
