// ========================================
// APP.JS - Aplicação Principal (Simplificado)
// ========================================

/**
 * Inicializa toda a aplicação
 */
function init() {
	console.log("🚀 E-commerce iniciado");

	// Sistemas globais
	window.modalSystem = new Modal();
	window.navigation = new Navigation();

	// Inicialização por página
	if (document.getElementById("featuredProducts")) {
		renderFeaturedProducts();
	}

	if (document.getElementById("productsGrid")) {
		window.productsGallery = new ProductsGallery();
	}

	// Inicializa manipuladores
	initCartHandlers();
	initLoginHandler();

	// Auto-inicializa formulários com atributo data-validate
	document.querySelectorAll("form[data-validate]").forEach((form) => {
		new FormValidator(form);
	});
}

// Inicia quando DOM está pronto
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init);
} else {
	init();
}

function initNewsletterFeedback() {
	const form = document.getElementById("newsletterForm");
	if (!form) return;

	const message = form.querySelector(".footer__newsletter-message");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		if (!form.checkValidity()) {
			message.textContent =
				"Preencha o e-mail corretamente e aceite a política de privacidade.";
			message.classList.remove("hidden");
			message.dataset.state = "error";
			return;
		}

		message.textContent = "Inscrição realizada! Em breve você receberá novidades.";
		message.classList.remove("hidden");
		message.dataset.state = "success";
		form.reset();
	});
}
