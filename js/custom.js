$(function () {
	$('.animated-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span.animatn').css({ top: relY, left: relX })
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span.animatn').css({ top: relY, left: relX })
		});
});

//   Top Search Bar  Start 
$(function () {
	const headerWrap = document.getElementById('topSearchWrap');
	const modifyBtn = document.getElementById('modifyBtn');
	const searchBtn = document.getElementById('searchBtn');

	if (modifyBtn) {
		modifyBtn.addEventListener('click', () => {
			headerWrap.classList.add('search');
			headerWrap.classList.remove('summary');
		});
	}

	if (searchBtn) {
		searchBtn.addEventListener('click', () => {
			headerWrap.classList.add('summary');
			headerWrap.classList.remove('search');
		});
	}
});
//   Top Search Bar  End 

// Ranger Slider Js start 
document.addEventListener('DOMContentLoaded', () => {
	const rangeInput = document.querySelector('.custom-price-range');

	function updateSliderFill(input) {
		const min = parseFloat(input.min) || 0;
		const max = parseFloat(input.max) || 100;
		const val = parseFloat(input.value);

		// Calculate percentage filled
		const percentage = ((val - min) / (max - min)) * 100;

		// Apply linear gradient: left side #026EFA, right side #e5e7eb
		input.style.background = `linear-gradient(to right, #026EFA 0%, #026EFA ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
	}

	if (rangeInput) {
		// Update on live drag
		rangeInput.addEventListener('input', (e) => updateSliderFill(e.target));

		// Set initial track color on page load
		updateSliderFill(rangeInput);
	}
});
// Ranger Slider Js end

/* Add Class window Scroll UP and Down JS Start */
document.addEventListener('DOMContentLoaded', function () {
	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
			} else {
				entry.target.classList.remove('in-view');
			}
		});
	}, observerOptions);

	const elementsToObserve = document.querySelectorAll('.observe-element');
	elementsToObserve.forEach(element => {
		observer.observe(element);
	});
});
/* Add Class window Scroll UP and Down JS End */

$(function () {
	new WOW().init();
});



// Search Bar Opening and Closing Start 
$(function () {

	$('.search-bar .field').on('click', function (e) {
		e.stopPropagation();

		const $field = $(this);

		$('.field-dropdown.active')
			.not($field)
			.removeClass('active');

		$field.toggleClass('active');
	});

	$('.field-panel').on('click', function (e) {
		e.stopPropagation();
	});

	$(document).on('click', function () {
		$('.field-dropdown.active').removeClass('active');
	});

});

// Search Bar Opening and Closing End 
