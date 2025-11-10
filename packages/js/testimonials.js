document.addEventListener("DOMContentLoaded", () => {
  // All hardcoded testimonials
  const testimonials = [
    {
      name: "Dharmendra Sethia",
      location: "Chennai",
      image: "./packages/images/testimonial dhar.jpeg",
      text: "जय जिनेन्द्र 🙏 आपकी सहज सरल एवं सिक्षाप्रद्ध शैली से हमें जो भी थोड़ा बहुत ज्ञान प्राप्त हुआ है उसके लिए आपका बहुत बहुत आभार। भविष्य में भी हम आपकी सेवाओं से लाभान्वित होते रहेंगे ऐसी शुभकामना 🙏🙏"
    },
    {
      name: "Sunita Parakh",
      location: "Visakhapatnam",
      image: "./packages/images/testimonial1.jpg",
      text: "Jai Jinendra, Main abhi jain vidya aur tatva gyan donno ki student hu aapke dwara Jo adhyayan karvaya ja raha hai vah Ati gyanvardhak Hai, Mere Liye vah bahut upyogi hai Mujhe punaravartan karne mein vah bahut  kargar Siddh ho raha ha aapke dwara Jo Baat samjhai jaati hai vah bahut Saral aur gyanvardhak hoti hai, aapki Bhasha aur Shaili bahut Saral hai aap bahut gehri Baat Ko acche se Samjha paate hain aur sab Hamen samajh mein aa jata hai main Asha Karti hun ki Bhavishya mein bhi aap Hamari Aisi hi classes lete Rahenge Hamare gyan ko aise hi pusht karte rahenge isi ummid aur Vishwas ke sath dhanyvad. Om Arham🙏"
    },
    {
      name: "Rajesh Patel",
      location: "Ahmedabad",
      image: "./packages/images/testimonial2.jpg",
      text: "Clear communication and a great understanding of what the audience needs."
    },
    {
      name: "Ananya Gupta",
      location: "Delhi",
      image: "./packages/images/testimonial3.jpg",
      text: "Fantastic approach — creative, insightful, and always on point!"
    },
    {
      name: "Sanjay Mehta",
      location: "Pune",
      image: "./packages/images/testimonial4.jpg",
      text: "Highly recommended! The presentation and delivery were outstanding."
    }
  ];

  // Function to pick random n testimonials
  function getRandomTestimonials(n) {
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  // Pick 4 random testimonials
  const selected = getRandomTestimonials(4);

  // Get swiper wrapper
  const wrapper = document.querySelector(".testimonial__container .swiper-wrapper");

  // Inject HTML for selected testimonials
  if (wrapper) {
    wrapper.innerHTML = selected
      .map(
        (t) => `
          <div class="testimonial__content swiper-slide">
            <div class="testimonial__data">
              <div class="testimonial__header">
                <img src="${t.image}" alt="${t.name}" class="testimonial__img">
                <div>
                  <h3 class="testimonial__name">${t.name}</h3>
                  <span class="testimonial__client">${t.location}</span>
                </div>
              </div>
            </div>
            <p class="testimonial__description">${t.text}</p>
          </div>
        `
      )
      .join("");
  }
});
