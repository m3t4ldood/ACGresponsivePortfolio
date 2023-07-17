// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Skills data
  const skillsData = [
    {
      skill: 'Drums',
      instruments: ['Alesis Command', 'Sample pad'],
      percentage: 80
    },
    {
      skill: 'Guitar',
      instruments: ['B.C. Rich Warlock', 'Epiphone SG'],
      percentage: 20
    },
    {
      skill: 'Bass',
      instruments: ['Ibanez ExSeries'],
      percentage: 50
    }
  ];

  // Function to generate skills
  function generateSkills() {
    const skillsList = document.getElementById('skillsList');
    let skillsHTML = '';
    skillsData.forEach(skill => {
      const instrumentsHTML = skill.instruments.map(instrument => `<li>${instrument}</li>`).join('');
      skillsHTML += `
        <li>
          <div class="skill_name">${skill.skill}<ul>${instrumentsHTML}</ul></div>
          <div class="skill_prog">
            <span style="width: ${skill.percentage}%;"></span>
          </div>
          <div class="skill_per">${skill.percentage}%</div>
        </li>
      `;
    });
    skillsList.innerHTML = skillsHTML;
  }

  // Call the function to generate skills
  generateSkills();

  // Songs data
  const songsData = [
    {
      title: 'Am I Dead Yet?',
      description: 'The sickness inside me...'
    },
    {
      title: 'PaperHeart'
    },
    {
      title: 'My Shadow'
    }
  ];

  // Function to generate songs
  function generateSongs() {
    const songsList = document.getElementById('songsList');
    let songsHTML = '';
    songsData.forEach(song => {
      const descriptionHTML = song.description ? `<div class="songdesc">${song.description}</div>` : '';
      songsHTML += `
        <div class="songtitle">${song.title}</div>
        ${descriptionHTML}
      `;
    });
    songsList.innerHTML = songsHTML;
  }

  // Call the function to generate songs
  generateSongs();
});
