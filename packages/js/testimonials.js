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
      image: "./packages/images/testimonial dhar.jpg",
      text: "Jai Jinendra, Main abhi jain vidya aur tatva gyan donno ki student hu aapke dwara Jo adhyayan karvaya ja raha hai vah Ati gyanvardhak Hai, Mere Liye vah bahut upyogi hai Mujhe punaravartan karne mein vah bahut  kargar Siddh ho raha ha aapke dwara Jo Baat samjhai jaati hai vah bahut Saral aur gyanvardhak hoti hai, aapki Bhasha aur Shaili bahut Saral hai aap bahut gehri Baat Ko acche se Samjha paate hain aur sab Hamen samajh mein aa jata hai main Asha Karti hun ki Bhavishya mein bhi aap Hamari Aisi hi classes lete Rahenge Hamare gyan ko aise hi pusht karte rahenge isi ummid aur Vishwas ke sath dhanyvad. Om Arham🙏"
    },
    {
      name: "Deepti Dhandia",
      location: "Jaipur",
      image: "./packages/images/testimonial dhar.jpg",
      text: "Appka bahut dyanvad jo bhi app ka study karta ha..muja bahut acha se smjha aata ha ..appka study karna ka method bahut easy ha.🙏🏻😊.. aapke online adhyayan karane se Hamari study Mein Kafi help Hui Hai. aap Hame Hamesha aise hi adhyayan karate rahiye sir..om arham.🙏🏻"
    },
    {
      name: "Sneh Daga",
      location: "Kolkata",
      image: "./packages/images/testimonial dhar.jpg",
      text: "You make learning easy and understandable by your exemplary learning ways by giving examples and not just bookish knowledge. It is always easy to ask you questions and you have such great patience that you reply to each individual queries.🫡 You behave more like a friend rather than a teacher which makes us easy to ask anything.✌️ Keep teaching and growing.🪄"
    },
     {
      name: "प्रभा नाहटा",
      location: "मदुराई",
      image: "./packages/images/testimonial dhar.jpg",
      text: "स्वाध्याय के क्रम में आपकी क्लास से जुडने का अवसर प्राप्त हुआ। जिस सरलता से आप विषय का प्रतिपादन करते हैं, उदाहरण सहित उसे समझाते है, जिज्ञासाए समाहित करते है वह अनुपम है। इतनी सरलता से जब तत्व हृदयंगम हो, जिज्ञासाए समाहित हो तो स्वाध्याय के प्रति भी आकर्षण रहता है, तथा और अधिक जानने-समझने की प्रेरणा प्राप्त होती है। आभार आपके प्रति, स्वाध्याय का यह क्रम निरंतर बनाए रखें, जिससे हमें भी साधना का अवसर प्राप्त होता रहे। मनुष्य भव की सार्थकता की ओर हम अग्रसर रहें।🙏"
    },
     {
      name: "Madhu Kothari",
      location: "Tiruppur",
      image: "./packages/images/testimonial dhar.jpg",
      text: "Jj 🙏 sir aapse class karke bahut acha laga  aap esi tarh hame padhate rahe  . Aapse mene 2nd class tatv gyan ki padhai  khub ache se aapne karwai unsab ko jab padhti hu to ek baar aap jese samjhate the vese sab remind ho jata hai .shraman mahaveer nahi ker pai kyuki ab yaatra ki tayari bhi karni h esliye so thank you very much sir 🙏"
    },
     {
      name: "प्रेमा धाकड़",
      location: "मुंबई",
      image: "./packages/images/testimonial dhar.jpg",
      text: "जय जिनेंद्र सर आप  जो स्वाध्याय करा रहे हो वह बहुत ही सरल तरीके से हमें समझ रहा है और  हर शब्द इतनी सरलता से  हमें  अच्छे से कंठस्थ हो जाता है ।श्रवण महावीर बुक जो पहले हमने रीड की थी पर इतनी समझ में नहीं आई अब अच्छे से समझ में आ रही है और जो लास्ट में क्वेश्चन आंसर होता है उसे तो इतने अच्छे से समझ में आ जाता है कि अब एग्जाम   आसान हो जाएगी ऐसा लगता हैं । आपसे यही विनंती है कि आप आगे भी ऐसे ही स्वाध्याय कराते रहे | आपका बहुत-बहुत साधुवाद 🙏"
    },
    {
      name: "सरोज छाजेड",
      location: "बैंगलुरु ",
      image: "./packages/images/testimonial dhar.jpg",
      text: "मैं निरंतर आपकी स्वाध्याय क्लास में जुड़ती हूँ।आपका समझाने का तरीका बहुत अच्छा है।गहरी बात भी आसानी से समझ आती है।हमने जब परीक्षा दी तो रट कर पढ़ाई की।सही समझ तो अब आई है।आप हमारे लिये कितना श्रम करते हैं।अनंत कृतज्ञता।🙏🏻स्वाध्याय का यह क्रम निरंतर चलता रहे।ज्ञानगंगा प्रवाहित होती रहे।पिपासु लोग लाभान्वित होते रहें।बारम्बार निवेदन आप हमें ज्ञान प्राप्त करने में एवं कर्म निर्जरा में योगभूत बनते रहें।यही शुभेच्छा। ॐअर्हम्"
    },
    {
      name: "Meenu Sancheti",
      location: "Hyderabad",
      image: "./packages/images/testimonial dhar.jpg",
      text: "Actually mene socha tha is baar Sanatak ka exam ache se dena h so Jain Vidhya ko light hi le rahe thi or last me 1 month padh k passing marks jitna la lenge  but jab aapka 2nd class attend ki to itna acha laga ki 1 bhi class miss na ho . Study me interest aane laga . Sabse jyada acha yahi laga ki isme sab koi participate kar sakte .Pahle baar aisa laga ki hum apni jigyasa ko freely puch pa rahe .ye sab aapke cool behave ki vajah se bhi ho raha 🙏.kabhi kisi se puchne ka aisa avasar nhi mila. Ab lag raha jo bhi exam de aise hi koi padha de to sab easy or interesting ho jata h.Thank you so much sir 🙏🙏"
    },
    {
      name: "Ranju Patwa",
      location: "Jodhpur",
      image: "./packages/images/testimonial dhar.jpg",
      text: "Jai jinendra sa..aaj ki class bahut gyanvardhakh hai sir,sikhna ko samajh ne ko bahut aasan ho jata hai ..aap ki padhane ke aur samajhana ki shalli se hum topic ko yaad rakh kar discuss bhi kar sakte hai apna family members ke sath🙏🏻 sir aap ki bahut bahut aabhar🙏🏻"
    },
    {
      name: "Savita Surana",
      location: "Delhi",
      image: "./packages/images/testimonial dhar.jpg",
      text: "I want to express my heartfelt appreciation for the incredible job you do for our study . Your clear and detailed lessons make it easy for us to understand every topic, and your practical approach helps us see how to apply what we've learned in real life. Your dedication and hard work have made learning both enjoyable and valuable for our future. I'm truly grateful for your efforts."
    },
    {
      name: "Kavita Dugar",
      location: "Kolkata",
      image: "./packages/images/testimonial dhar.jpg",
      text: "Jai jinendra sa🙏🏻 Aapka adhyapan ka ye kram nihsandeh hi anumodaniya hai...iske liye tahedil se aabhar. Aapke prayas aur lagatar prayatn se hum sabhi jo aapse zoom ke madhyam se jude wo nishchit rup se labhanvit hue hain aisa prateet hota hai. Ek vinamr nivedan hai aapse ki is kram ko jaari rakhen aur ek ek kar sabhi thokde aur avbodh pustak ka sampoorna swadhyay karwa saken to sabhi labhanvit honge. shanivar ki subah ka kram vishesh ullekhniya hai.kuch vishay jaise anekantwad, nay,anupreksha aadi par vistrit jaankari pradan karne ka kram chal sakta hai.🙏🏻"
    },
    {
      name: "Suman Choraria",
      location: "Secundarabad",
      image: "./packages/images/testimonial dhar.jpg",
      text: "Shraman bhagwan Mahavir book ka adhyan jabse apne padhana shuru kiya hai tabse iss pustak k prati Ruchi badh gayi hai. Ek ghante ki class kab khatam ho jati hai pata nhi chalta. Aise toh lesson ko padhne Mai bht katnayi aati thi par apke padhane k baad sub samaj aata hai. Kritogyosmi Sir"
    },
    {
      name: "हेमलता लुनिया",
      location: "अहमदाबाद",
      image: "./packages/images/testimonial dhar.jpg",
      text: "श्रमण  भगवान महावीर की पुस्तक का अध्ययन सर  बहुत अच्छा करवा रहे हैं। बार-बार अध्ययन करने से हमें याद करने में फायदा रहेगा 86 वर्ष के मेरी सासू मां भी सर पढ़ाते हैं तो वह भी मेरे पास बैठ जाते हैं समय होने पर बोलते हैं क्लास का टाइम हो गया है उनका भी मन रहता है ,मैं भी भगवान के बारे में सुनलु 🙏"
    }
  ];

  // Function to pick random n testimonials
  function getRandomTestimonials(n) {
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const selected = getRandomTestimonials(4);
  const wrapper = document.getElementById("testimonial-wrapper");

  if (wrapper) {
    wrapper.innerHTML = selected
      .map(
        (t) => `
        <div class="testimonial__content">
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
        </div>`
      )
      .join("");
  }
});
