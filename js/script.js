// ============================================
// MODAL FUNCTIONALITY
// ============================================

const modal = document.getElementById('contactModal');
const openFormBtn = document.getElementById('openFormBtn');
const closeModalBtn = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');
const contactForm = document.getElementById('contactForm');

// Open modal
openFormBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// GOOGLE SHEETS INTEGRATION
// ============================================

// IMPORTANT: Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzl_Sf1pBP72AImuB4eVRqO_rrU0DpgG6RubEpmDCQQLhiIkScdtQfw1giiNi8o836/exec';

// ============================================
// FORM SUBMISSION
// ============================================

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable submit button to prevent double submission
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        linkedin: document.getElementById('linkedin').value,
        timestamp: new Date().toLocaleString('pt-BR')
    };

    try {
        // Send to Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Show success message
        alert('Obrigado! Entraremos em contato em breve.');

        // Reset form
        contactForm.reset();

        // Close modal
        closeModal();

        // Log to console for debugging
        console.log('Form submitted:', formData);

    } catch (error) {
        console.error('Error:', error);
        alert('Erro ao enviar formulário. Por favor, tente novamente.');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});

// ============================================
// PHONE MASK
// ============================================

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length <= 11) {
        if (value.length <= 2) {
            e.target.value = value;
        } else if (value.length <= 6) {
            e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 10) {
            e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
        } else {
            e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    } else {
        e.target.value = e.target.value.slice(0, -1);
    }
});

// ============================================
// SMOOTH ANIMATIONS ON LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Valt Landing Page loaded successfully');
    console.log('Remember to configure Google Apps Script URL in script.js');
});
