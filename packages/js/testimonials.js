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
      name: "Kavita Dugar",
      location: "Kolkata",
      image: "./packages/images/testimonial2.jpg",
      text: "Jai jinendra sa🙏🏻 Aapka adhyapan ka ye kram nihsandeh hi anumodaniya hai...iske liye tahedil se aabhar. Aapke prayas aur lagatar prayatn se hum sabhi jo aapse zoom ke madhyam se jude wo nishchit rup se labhanvit hue hain aisa prateet hota hai. Ek vinamr nivedan hai aapse ki is kram ko jaari rakhen aur ek ek kar sabhi thokde aur avbodh  pustak ka sampoorna swadhyay karwa saken to  sabhi labhanvit honge. shanivar ki subah ka kram vishesh ullekhniya hai.kuch vishay jaise anekantwad, nay,anupreksha aadi par vistrit jaankari pradan karne ka kram chal sakta hai.🙏🏻"
    },
    {
      name: "Suman Choraria",
      location: "Secundarabad",
      image: "./packages/images/testimonial3.jpg",
      text: "Shraman bhagwan Mahavir book ka adhyan jabse apne padhana shuru kiya hai tabse iss pustak k prati Ruchi badh gayi hai. Ek ghante ki class kab khatam ho jati hai pata nhi chalta. Aise toh lesson ko padhne Mai bht katnayi aati thi par apke padhane k baad sub samaj aata hai. Kritogyosmi Sir"
    },
    {
      name: "हेमलता लुनिया",
      location: "अहमदाबाद",
      image: "./packages/images/testimonial4.jpg",
      text: "श्रमण  भगवान महावीर की पुस्तक का अध्ययन सर  बहुत अच्छा करवा रहे हैं। बार-बार अध्ययन करने से हमें याद करने में फायदा रहेगा 86 वर्ष के मेरी सासू मां भी सर पढ़ाते हैं तो वह भी मेरे पास बैठ जाते हैं समय होने पर बोलते हैं क्लास का टाइम हो गया है उनका भी मन रहता है ,मैं भी भगवान के बारे में सुनलु 🙏"
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
