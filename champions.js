const drivers = [
  // 1. LANDO NORRIS 
  {
    id: "norris",
    name: "Lando Norris",
    years: ["2025"],
    teams: ["McLaren"],
    image: "lando-norris.jfif", 
    image1: "lando-norris-hr.jfif",
    bio: [
      "Lando Norris adalah pembalap Formula One Inggris yang memenangkan Kejuaraan Dunia perdananya pada tahun 2025 bersama McLaren. Ia dikenal karena kecepatan alaminya dan kepribadiannya yang ceria."
    ],
    author: "..."
  },
  // 2. MAX VERSTAPPEN 
  {
    id: "verstappen",
    name: "Max Verstappen",
    years: ["2021", "2022", "2023", "2024"],
    teams: ["Red Bull"],
    image: "max-verstappen.jfif", 
    image1: "max-verstappen-hr.jpg",
    bio: [
      "In 2021 24-year-old Max Verstappen became the 34th Formula 1 World Champion, taking the title from seven-time champion Lewis Hamilton amid controversy on the last lap of the last race. Driving on the limit – sometimes over it – their intense rivalry became a personal feud that pushed them far beyond the rest of the field. The enthralling battle between the ultra-confident Dutch youngster and the most successful driver in the sport’s history captured the imagination of a worldwide audience as never before.",
      "The 2021 Formula 1 World Championship was decided under highly controversial circumstances at the final race in Abu Dhabi. Race-long leader Lewis Hamilton, on old tires, saw his advantage wiped out by a late-race Safety Car. Red Bull's Max Verstappen pitted for fresh rubber. Against standard procedure, race control allowed only the five lapped cars separating the two rivals to un-lap themselves, setting the stage for a one-lap shootout. With a decisive tire advantage, Verstappen easily overtook Hamilton on the final lap to claim his first World Drivers' Championship.",
      "The unconventional Safety Car procedure sparked outrage from Mercedes, who lodged protests claiming a 'contrived' race outcome. While the protests were dismissed and Mercedes ultimately dropped plans to appeal, the incident left a bitter taste. Max Verstappen, who secured the title with a season record of 18 podiums and 10 victories, was hailed as a deserved champion by many. In his acceptance speech, Verstappen acknowledged the tough battle with Lewis Hamilton, stating that becoming world champion was his 'life goal achieved'.",
      "Max Verstappen comprehensively swept away any remaining doubts about his drivers' crown by totally dominating the 2022 season, securing his second successive championship. While the Adrian Newey-designed Red Bull Racing RB18 car was the class of the field, it was 'Super Max's exceptional driving that resulted in him winning a record 15 out of 22 races. He also scored a new F1 record of 454 points, which, combined with Sergio Perez's contribution (who finished third overall), enabled Red Bull to run away with the 2022 Constructors’ Championship. Verstappen's superiority was evident in his come-from-behind victories, notably winning in Hungary after starting 10th and in Belgium from 14th on the grid.",
      "Verstappen’s near-total domination was aided by the sporadic performance of Red Bull's opposition. Ferrari finished a distant second in the Constructors’ standings, hampered by reliability issues and tactical missteps, while Mercedes scored only a single victory all season and finished third. RBR team principal Christian Horner was effusive in his praise, calling Verstappen the 'best we’ve ever seen in one of our cars.' Despite mourning the death of owner Dietrich Mateschitz and facing a penalty for exceeding the 2021 budget cap, the team's optimism remained high. Verstappen, who is contracted until 2028, suggested he does not plan to drive into his 40s.",
      "The 2023 Formula 1 season saw Max Verstappen achieve unprecedented dominance, winning a remarkable 19 out of 22 races, with Red Bull triumphing in all but one Grand Prix. The Adrian Newey-designed RB19 proved even more superior than its predecessor, allowing Verstappen to utterly rewrite the record books. His achievements included the most wins in a season, the longest winning streak (10 races), the most points scored (575), and the largest title-winning margin (290 points). Speaking after the Abu Dhabi finale, a grateful Verstappen thanked Red Bull for the 'incredible year' and confirmed his readiness for the 2024 battles.",
      "While the start of the 2024 season was initially one-sided, with Verstappen winning seven of the first 10 races, the second half presented significant challenges for Red Bull. Their pace reportedly fell behind rivals, and long-time technical boss Adrian Newey announced his high-profile departure. Despite this turbulent period, Verstappen demonstrated the true class of a multiple World Champion by 'maturely playing the long game.' Although he only won two of the remaining 14 rounds, his consistency secured his fourth successive Drivers' Championship, making him only the fifth driver in F1 history to achieve four titles in succession."
    ],
    author: "Gerald Donaldson"
  },
  // 3. NICO ROSBERG 
  {
    id: "rosberg",
    name: "Nico Rosberg",
    years: ["2016"],
    teams: ["Mercedes"],
    image: "nico-rosberg.jfif", 
    image1: "nico-rosberg-hr.avif",
    bio: [
      "Nico Rosberg adalah mantan pembalap Formula One Jerman yang memenangkan Kejuaraan Dunia pada tahun 2016 bersama Mercedes, sebelum mengumumkan pensiun tak lama setelahnya."
    ],
    author: "..."
  },
  
  // 5. SEBASTIAN VETTEL 
  {
    id: "vettel",
    name: "Sebastian Vettel",
    years: ["2010", "2011", "2012", "2013"],
    teams: ["Red Bull"],
    image: "sebastian-vettel.jpg", 
    image1: "sebastian-vettel-hr.jfif",
    bio: [
      "Sebastian Vettel adalah mantan pembalap Formula One Jerman yang memenangkan empat gelar juara dunia berturut-turut. Ia adalah pembalap termuda kedua yang menjadi Juara Dunia F1."
    ],
    author: "..."
  },
  // 6. JENSON BUTTON 
  {
    id: "button",
    name: "Jenson Button",
    years: ["2009"],
    teams: ["Brawn GP"],
    image: "jenson-button.jpg", 
    bio: [
      "Jenson Button adalah mantan pembalap Formula One Inggris yang memenangkan Kejuaraan Dunia 2009. Ia dikenal karena gaya balapnya yang halus dan kemampuannya di lintasan basah."
    ],
    author: "..."
  },

  {
    id: "hamilton",
    name: "Lewis Hamilton",
    years: ["2008", "2014", "2015", "2017", "2018", "2019", "2020"],
    teams: ["Mercedes", "McLaren"],
    image: "lewis-hamilton.jpg", 
    image1: "lewis-hamilton-hr.jfif",
    bio: [
      "Lewis Carl Davidson Hamilton, born on January 7, 1985, in Stevenage, England, is a global icon whose influence transcends the sport of racing. Lewis grew up in a multi-racial family—his father, Anthony, is of Afro-Grenadian descent, and his mother, Carmen, is English. His parents separated when he was two, and while he spent time with his mother, he later moved in with his father, whom he credits as the primary source of his ambition and tenacity. Anthony Hamilton, who worked multiple jobs to fund his son's karting career, instilled an unwavering focus and determination.",
      "His extraordinary talent was evident from a young age, where he secured multiple national karting titles. At the age of 13, he was signed to the McLaren-Mercedes young driver program, a move that put him on the fast track to Formula 1. After clinching the GP2 Series title in 2006, Hamilton made a sensational F1 debut with McLaren in 2007. His performance during that rookie season is widely regarded as one of the greatest in F1 history, where he narrowly missed claiming the world title.",
      "His first major achievement came in 2008, when he became the youngest F1 World Champion at the time. Following a few fluctuating seasons, Hamilton made the bold decision to move from McLaren to the Mercedes team in 2013, a switch that would subsequently redefine the sport's history. Under the new hybrid engine regulations, Hamilton’s partnership with Mercedes utterly dominated F1 for nearly a decade.",
      "With Mercedes, Lewis Hamilton reached the pinnacle of his career, securing six more World Championship titles (2014, 2015, 2017, 2018, 2019, and 2020), equalling Michael Schumacher's all-time record of seven World Championships. He holds the unmatched all-time records for the most Grand Prix wins (105), pole positions (104), and podium finishes (202), cementing his status as the most statistically successful driver in F1 history. The phrase 'Still I Rise,' inscribed on his helmet and tattooed on his shoulder, reflects his ethos of perseverance.",
      "Beyond the racetrack, Sir Lewis Hamilton is recognized for his role as an inspirational ambassador. He uses his global platform to advocate for issues concerning diversity, inclusion, and social justice, and voices strong concerns about environmental sustainability. His refusal to conform to the traditional stereotypes of a racing driver, whether in his mindset, fashion, or conduct, has garnered him respect among his peers and brought a broader audience to Formula 1.",
      "Following a period of sustained dominance, Hamilton announced a surprising move to Scuderia Ferrari starting in 2025. This transfer, considered one of the biggest driver switches in F1 history, marks a new chapter in his career. With all his achievements, from humble beginnings to becoming a living legend and a knight of the British Empire, Lewis Hamilton has etched his name not only as a great athlete but also as a globally inspiring figure.",
    ],
    author: "Gerald Donaldson"
  },

  // 7. KIMI RAIKKONEN 
  {
    id: "raikkonen",
    name: "Kimi Räikkönen",
    years: ["2007"],
    teams: ["Ferrari"],
    image: "raikkonen.jpg",
    image1: "kimi-raikkonen-hr.jfif", 
    bio: [
      "Kimi Matias Räikkönen, dijuluki 'The Iceman', adalah pembalap Finlandia yang memenangkan Kejuaraan Dunia 2007 bersama Ferrari. Ia dikenal karena kepribadiannya yang tenang dan pendiam."
    ],
    author: "..."
  },
  // 8. FERNANDO ALONSO 
  {
    id: "alonso",
    name: "Fernando Alonso",
    years: ["2005", "2006"],
    teams: ["Renault"],
    image: "fernando-alonso.jfif", 
    image1: "fernando-alonso-hr.jfif",
    bio: [
      "Fernando Alonso Díaz adalah pembalap Spanyol yang memenangkan dua gelar juara dunia berturut-turut pada tahun 2005 dan 2006. Ia dikenal karena agresivitasnya dan kemampuan membalap yang serba bisa."
    ],
    author: "..."
  },
  
  // 10. MIKA HAKKINEN 
  {
    id: "hakkinen",
    name: "Mika Häkkinen",
    years: ["1998", "1999"],
    teams: ["McLaren"],
    image: "mika-hakkinen.webp", 
    image1: "mika-hakkinen-hr.avif",
    bio: [
      "Mika Pauli Häkkinen, dijuluki 'The Flying Finn', adalah pembalap Finlandia yang memenangkan dua gelar Juara Dunia (1998 dan 1999). Ia dikenal karena persaingannya yang sengit dengan Michael Schumacher."
    ],
    author: "..."
  },
  {
    id: "villeneuve",
    name: "Jacques Villeneuve",
    years: ["1997"],
    teams: ["Williams"],
    image: "jacques-villeneuve.avif",
    image1: "jacques-villeneuve-hr.jpg",
    bio: ["Pembalap Kanada satu-satunya yang pernah menjadi juara dunia F1."],
    author: "F1 Hall of Fame"
  },
  {
    id: "damon-hill",
    name: "Damon Hill",
    years: ["1996"],
    teams: ["Williams"],
    image: "damon-hill.avif",
    image1: "damon-hill-hr.avif",
    bio: ["Putra Graham Hill yang mengikuti jejak ayahnya menjadi juara dunia."],
    author: "F1 Hall of Fame"
  },
  
  
  // 9. MICHAEL SCHUMACHER 
  {
    id: "schumacher",
    name: "Michael Schumacher",
    years: ["1994", "1995", "2000", "2001", "2002", "2003", "2004"],
    teams: ["Benetton", "Ferrari"],
    image: "schumacher.jfif", 
    bio: [
      "Michael Schumacher adalah mantan pembalap Formula One Jerman yang memegang banyak rekor. Ia memenangkan tujuh gelar juara dunia, yang terakhir pada tahun 2004."
    ],
    author: "..."
  },

  {
    id: "mansell",
    name: "Nigel Mansell",
    years: ["1992"],
    teams: ["Williams"],
    image: "nigel-mansell.avif",
    image1: "nigel-mansell-hr.avif",
    bio: ["Dikenal karena keberaniannya, ia mendominasi musim 1992 secara total."],
    author: "F1 Hall of Fame"
  },

  {
    id: "senna",
    name: "Ayrton Senna",
    years: ["1988", "1990", "1991"],
    teams: ["McLaren"],
    image: "ayrton-senna.avif",
    image1: "ayrton-senna-hr.avif",
    bio: ["Salah satu pembalap paling berpengaruh dan dicintai dalam sejarah olahraga bermotor."],
    author: "F1 Hall of Fame"
  },

  {
    id: "prost",
    name: "Alain Prost",
    years: ["1985", "1986", "1989", "1993"],
    teams: ["McLaren", "Williams"],
    image: "alain-prost.webp",
    image1: "alain-prost-hr.avif",
    bio: ["Dijuluki 'The Professor' karena kecerdasannya dalam strategi balapan."],
    author: "F1 Hall of Fame"
  },

  
];

function loadDriverCards() {
  const gridElement = document.getElementById('driver-grid');
  if (!gridElement) return; 

  gridElement.innerHTML = '';

  drivers.forEach(driver => {
    const card = document.createElement('div');
    card.className = 'driver-card';
    card.setAttribute('data-id', driver.id);

    card.innerHTML = `
      <div class="card-image">
        <img src="${driver.image}" alt="${driver.name}">
      </div>
      <div class="card-info">
        <div class="year-text">${driver.years.join(', ')}</div>
        <div class="full-name">${driver.name.toUpperCase()}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      showDriverProfile(driver.id);
    });

    gridElement.appendChild(card);
  });
}

function showDriverProfile(driverId) {
  window.location.href = `driver-profile.html?id=${driverId}`;
}

function loadProfilePage() {
  console.log("Fungsi loadProfilePage() dipanggil");
  

  const urlParams = new URLSearchParams(window.location.search);
  const driverIdFromUrl = urlParams.get('id');

  console.log("ID Pembalap dari URL:", driverIdFromUrl);

  const driver = drivers.find(d => d.id === driverIdFromUrl);

  if (!driver) {
    console.error("Pembalap tidak ditemukan!");
    document.getElementById('profile-fullname').textContent = 'Driver Not Found';
    document.getElementById('profile-bio-container').innerHTML = '<p>The requested driver profile could not be loaded.</p>';
    return;
  }
  
  // MENGATUR GAMBAR UTAMA SEBAGAI BACKGROUND HERO
  const heroSection = document.getElementById('profile-hero-section');
  if (heroSection && driver.image) {
      heroSection.style.backgroundImage = `url('${driver.image1}')`;
      console.log(`Background Hero diatur ke: ${driver.image1}`);
  }

  document.getElementById('profile-title').textContent = `${driver.name} - F1 Hall of Fame`;
  
  document.getElementById('profile-fullname').textContent = driver.name;
  document.getElementById('profile-years').textContent = ` ${driver.years.join(', ')}`;

  const bioContainer = document.getElementById('profile-bio-container');
  bioContainer.innerHTML = ''; 
  driver.bio.forEach(paragraphText => {
    const p = document.createElement('p');
    p.textContent = paragraphText;
    bioContainer.appendChild(p);
  });

  const galleryContainer = document.getElementById('profile-image-gallery');
  galleryContainer.innerHTML = ''; 
  if (driver.additionalImages && driver.additionalImages.length > 0) {
    driver.additionalImages.forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = `${driver.name} - Additional Image`;
      galleryContainer.appendChild(img);
    });
  } else {
    galleryContainer.style.display = 'none'; 
  }

  const quoteElement = document.getElementById('profile-quote');
  if (driver.quote) {
    quoteElement.textContent = driver.quote;
    quoteElement.style.display = 'block'; 
  } else {
    quoteElement.style.display = 'none'; 
  }

  const authorElement = document.getElementById('profile-author');
  if (driver.author) {
    authorElement.textContent = driver.author;
    authorElement.style.display = 'block'; 
  } else {
    authorElement.style.display = 'none'; 
  }

  console.log("Semua elemen profil telah diisi.");
}

// INISIALISASI SAAT HALAMAN DIMUAT 
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOMContentLoaded event terpicu");
  if (document.getElementById('driver-grid')) {
    
    console.log("Halaman Champions terdeteksi");
    loadDriverCards(); 
  } else if (document.getElementById('profile-hero-section')) {
    
    console.log("Halaman Profil terdeteksi");
    loadProfilePage(); 
  } else {
    console.log("Halaman tidak dikenali (tidak ada #driver-grid atau #profile-hero-section)");
  }

});



