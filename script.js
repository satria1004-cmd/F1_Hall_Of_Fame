document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Ambil konten driver asli yang ada di result.html saat pertama dimuat
    const driverStandingsHTML = document.querySelector('#main-content').innerHTML;
    
    // Konten Teams Standings (sudah diperbarui poinnya sesuai hasil Abu Dhabi)
    const teamsStandingsHTML = `
      <div class="top-teams">
        <div class="team-card-result mclaren" id="teams-card">
          <div class="card-header-left">
            <div class="position">1<sup class="position-suffix">ST</sup></div>
            <div class="teams-points">833<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="norris.png" alt="Lando Norris" class="driver-avatar" id="mclaren-driver">
              Lando Norris 
                     |
               <img src="piastri.png" alt="Oscar Piastri" class="driver-avatar" id="mclaren-driver">
            Oscar Piastri
            </div>
          

          <div class="team-logo-container">
            <img src="McLaren-logo.jfif" alt="McLaren" class="team-logo-image">
          </div>
          <img src="mclaren2025.png" alt="McLaren Car" class="team-car-image">
          </div>
        </div>
        
        
        <div class="team-card-result mercedes">
          <div class="card-header-left">
            <div class="position">2<sup class="position-suffix">ND</sup></div>
            <div class="teams-points">469<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="george.png" alt="Russell" class="driver-avatar" id="mercedes-driver">
              George Russell 
                     |
               <img src="antonelli.png" alt="Oscar Piastri" class="driver-avatar" id="mercedes-driver">
              Kimi Antonelli
            </div>
          

          <div class="team-logo-container">
            <img src="mercedes-logo.jfif" alt="Mercedes" class="team-logo-image">
          </div>
          <img src="mercedes2025.png" alt="Mercedes Car" class="team-car-image">
          </div>
        </div>

        
        <div class="team-card-result redbull">
          <div class="card-header-left">
            <div class="position">3<sup class="position-suffix">RD</sup></div>
            <div class="teams-points">451<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="verstappen.png" alt="Verstappen" class="driver-avatar" id="redbull-driver">
              Max Verstappen 
                     |
               <img src="tsunoda.png" alt="Tsunoda" class="driver-avatar" id="redbull-driver">
            Yuki Tsunoda
            </div>
          

          <div class="team-logo-container">
            <img src="redbull-logo.jfif" alt="redbull" class="team-logo-image">
          </div>
          <img src="redbull2025.png" alt="Mercedes Car" class="team-car-image">
          </div>
        </div>

        
<div class="team-card-result ferrari">
          <div class="card-header-left">
            <div class="position">4<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">398<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="charles.png" alt="leclerc" class="driver-avatar" id="ferrari-driver">
              Charles Leclerc 
                     |
               <img src="hamilton.png" alt="hamilton" class="driver-avatar" id="ferrari-driver">
              Lewis Hamilton
            </div>
          

          <div class="team-logo-container">
            <img src="ferrari-logo.jfif" alt="Ferarri" class="team-logo-image">
          </div>
          <img src="ferrari2025.png" alt="Ferrari Car" class="team-car-image">
          </div>
        </div>

        
<div class="team-card-result williams">
          <div class="card-header-left">
            <div class="position">5<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">137<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="albon.png" alt="Albon" class="driver-avatar" id="williams-driver">
              Alexander Albon 
                     |
               <img src="sainz.png" alt="Sainz" class="driver-avatar" id="williams-driver">
              Carlos Sainz
            </div>
          

          <div class="team-logo-container">
            <img src="williams-logo.jfif" alt="Williams" class="team-logo-image">
          </div>
          <img src="williams2025.png" alt="Williams Car" class="team-car-image">
          </div>
        </div>

<div class="team-card-result racingbulls">
          <div class="card-header-left">
            <div class="position">6<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">92<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="lawson.webp" alt="Lawson" class="driver-avatar" id="racingbulls-driver">
              Liam Lawson 
                     |
               <img src="hadjar.png" alt="Hadjar" class="driver-avatar" id="racingbulls-driver">
              Isack Hadjar
            </div>
          

          <div class="team-logo-container">
            <img src="racingbull-logo.jfif" alt="Racing Bulls" class="team-logo-image">
          </div>
          <img src="racingbulls2025.png" alt="Racing Bulls Car" class="team-car-image">
          </div>
        </div>
        
        
<div class="team-card-result astonmartin">
          <div class="card-header-left">
            <div class="position">7<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">89<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="alonso.png" alt="Alonso" class="driver-avatar" id="astonmartin-driver">
              Fernando Alonso 
                     |
               <img src="stroll.png" alt="Oscar Piastri" class="driver-avatar" id="astonmartin-driver">
              Lance Stroll
            </div>
          

          <div class="team-logo-container">
            <img src="astonmartin-logo.jfif" alt="Aston Martin" class="team-logo-image">
          </div>
          <img src="astonmartin2025.png" alt="Aston Martin Car" class="team-car-image">
          </div>
        </div>

<div class="team-card-result haas">
          <div class="card-header-left">
            <div class="position">8<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">79<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="esteban.png" alt="Ocon" class="driver-avatar" id="haas-driver">
              Esteban Ocon 
                     |
               <img src="bearman.png" alt="Bearman" class="driver-avatar" id="haas-driver">
              Oliver Bearman
            </div>
          

          <div class="team-logo-container">
            <img src="haas-logo.jfif" alt="Haas" class="team-logo-image">
          </div>
          <img src="haas2025.png" alt="Haas Car" class="team-car-image">
          </div>
        </div>
<div class="team-card-result kicksauber">
          <div class="card-header-left">
            <div class="position">9<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">70<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="hulkenberg.png" alt="Hulkenberg" class="driver-avatar" id="kicksauber-driver">
              Nico Hulkenberg 
                     |
               <img src="borteleto.png" alt="Borteleto" class="driver-avatar" id="kicksauber-driver">
              Gabriel Borteleto
            </div>
          

          <div class="team-logo-container">
            <img src="kicksauber.jfif" alt="Kick Sauber" class="team-logo-image">
          </div>
          <img src="kicksauber2025.png" alt="Kick Sauber Car" class="team-car-image">
          </div>
        </div>
        
<div class="team-card-result alpine">
          <div class="card-header-left">
            <div class="position">10<sup class="position-suffix">TH</sup></div>
            <div class="teams-points">22<sup class="teams-points-suffix">PTS</sup></div>
          </div>

          <div class="team-drivers-info">
            <div class="driver-pair">
              <img src="gasly.png" alt="Gasly" class="driver-avatar" id="alpine-driver">
              Pierre Gasly 
                     |
               <img src="colapinto.png" alt="Colapinto" class="driver-avatar" id="alpine-driver">
              Franco Colapinto
            </div>

          <div class="team-logo-container">
            <img src="alpine-logo.jpg" alt="Alpine" class="team-logo-image">
          </div>
          <img src="alpine2025.png" alt="Alpine Car" class="team-car-image">
          </div>
        </div>
        

        </div>
      </div>
    `;
  
    function activateTab(tabId) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
                const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        if (tabId === 'teams') {
            document.getElementById('main-content').innerHTML = teamsStandingsHTML;
        } else {
            document.getElementById('main-content').innerHTML = driverStandingsHTML;
        }
        localStorage.setItem('activeTab', tabId);
    }
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        activateTab(tabId);
      });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const tabFromUrl = urlParams.get('tab');
    const savedTab = localStorage.getItem('activeTab');
    
    let initialTab = 'drivers'; // Default

    // Prioritas 1: Cek parameter URL
    if (tabFromUrl && (tabFromUrl === 'drivers' || tabFromUrl === 'teams')) {
        initialTab = tabFromUrl;
    } 
    // Prioritas 2: Cek localStorage (Hanya jika tidak ada parameter URL)
    else if (savedTab && (savedTab === 'drivers' || savedTab === 'teams')) {
        initialTab = savedTab;
    } 
    
    activateTab(initialTab);

});