const testimonials = [
  {
    img: "./packages/images/testimonial dhar.jpeg",
    name: "Dharmendra Sethia",
    city: "Chennai",
    text: `जय जिनेन्द्र 🙏
आपकी सहज सरल एवं सिक्षाप्रद्ध शैली से हमे जो भी थोडा बहुत ज्ञान प्राप्त हुआ है
उसके लिए आपका बहुत बहुत आभार 
भविष्य में भी हम आपकी सेवाओ से लाभान्वित होते रहेंगे
ऐसी शुभकांसा 🙏🙏`
  },
  {
    img: "./packages/images/testimonial1.jpg",
    name: "Priya Desai",
    city: "Pune",
    text: "The event was beautifully organized and the content was insightful. Thank you for the wonderful experience!"
  },
  {
    img: "./packages/images/testimonial2.jpg",
    name: "Ravi Sharma",
    city: "Mumbai",
    text: "Absolutely loved the session! The speaker explained complex concepts in a very relatable way."
  },
  {
    img: "./packages/images/testimonial3.jpg",
    name: "Sneha Patil",
    city: "Bangalore",
    text: "Every time I attend, I take away something new. Truly inspiring!"
  },
  {
    img: "./packages/images/testimonial4.jpg",
    name: "Anil Jain",
    city: "Jaipur",
    text: "Great energy and deep insights — always a pleasure listening to you."
  },
  {
    img: "./packages/images/testimonial5.jpg",
    name: "Meena Shah",
    city: "Ahmedabad",
    text: "Loved the interactive style — made learning enjoyable and memorable."
  }
];

// Pick random testimonials
function getRandomTestimonials(num) {
  const shuffled = testimonials.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Inject testimonials into DOM
function displayTestimonials() {
  const wrapper = document.getElementById("testimonial-wrapper");
  const selected = getRandomTestimonials(4); // 👈 change number here if you want different count

  wrapper.innerHTML = selected.map(t => `
    <div class="testimonial__content swiper-slide">
      <div class="testimonial__data">
        <div class="testimonial__header">
          <img src="${t.img}" alt="${t.name}" class="testimonial__img">
          <div>
            <h3 class="testimonial__name">${t.name}</h3>
            <span class="testimonial__client">${t.city}</span>
          </div>
        </div>
      </div>
      <p class="testimonial__description">${t.text}</p>
    </div>
  `).join("");

  // Reinitialize Swiper to detect new slides
  if (typeof Swiper !== 'undefined') {
    new Swiper(".testimonial__container", swiperTestimonial.params);
  }
}

displayTestimonials();
