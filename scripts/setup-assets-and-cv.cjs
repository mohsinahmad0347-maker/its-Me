const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function main() {
  const publicDir = path.resolve(__dirname, '../public');
  const projectsDir = path.join(publicDir, 'projects');
  const srcAssetsDir = path.resolve(__dirname, '../src/assets');
  const srcProjectsDir = path.join(srcAssetsDir, 'projects');

  fs.mkdirSync(projectsDir, { recursive: true });
  fs.mkdirSync(srcProjectsDir, { recursive: true });

  // 1. Copy project mockups
  const brainDir = 'C:/Users/SYED BROTHERs/.gemini/antigravity-ide/brain/2d903de9-9e54-422f-8fcd-0b0e1683c709';
  const projectImages = [
    { src: 'be_careful_mockup_1789793864561.jpg', dest: 'project-be-careful.jpg' },
    { src: 'grand_thief_autos_mockup_1789793885635.jpg', dest: 'project-grand-thief-autos.jpg' },
    { src: 'vectoria_mockup_1789793951766.jpg', dest: 'project-vectoria.jpg' },
    { src: 'you_can_mockup_1789793977641.jpg', dest: 'project-you-can.jpg' },
    { src: 'razdar_mockup_1789794008035.jpg', dest: 'project-razdar.jpg' },
  ];

  for (const img of projectImages) {
    const srcPath = path.join(brainDir, img.src);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(projectsDir, img.dest));
      fs.copyFileSync(srcPath, path.join(srcProjectsDir, img.dest));
      console.log(`Copied ${img.dest}`);
    } else {
      console.warn(`Could not find ${srcPath}`);
    }
  }

  // 2. Generate Professional PDF CV
  console.log('Generating Mohsin_Ahmad_CV.pdf...');
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Embed official photo
  const profilePhotoPath = path.join(publicDir, 'mohsin-ahmad.jpg');
  if (fs.existsSync(profilePhotoPath)) {
    const photoBytes = fs.readFileSync(profilePhotoPath);
    const photoImage = await pdfDoc.embedJpg(photoBytes);
    // Draw photo on top right
    page.drawImage(photoImage, {
      x: 460,
      y: 710,
      width: 85,
      height: 105,
    });
  }

  // Colors
  const darkNavy = rgb(0.04, 0.06, 0.12);
  const textDark = rgb(0.12, 0.15, 0.22);
  const textMuted = rgb(0.35, 0.40, 0.50);
  const primaryPurple = rgb(0.48, 0.22, 0.92);
  const accentBlue = rgb(0.14, 0.42, 0.92);

  // Header
  page.drawText('MOHSIN AHMAD', { x: 50, y: 800, size: 22, font: fontBold, color: primaryPurple });
  page.drawText('Frontend Developer | MS Excel | Microsoft Power BI', { x: 50, y: 780, size: 12, font: fontBold, color: accentBlue });
  page.drawText('Software Engineering Student  Islamia College Peshawar', { x: 50, y: 765, size: 10, font: fontRegular, color: textDark });
  page.drawText('Peshawar, Khyber Pakhtunkhwa, Pakistan', { x: 50, y: 750, size: 9, font: fontRegular, color: textMuted });
  page.drawText('Email: mohsinahmad0347@gmail.com   Phone: +92 330 5205409', { x: 50, y: 736, size: 9, font: fontRegular, color: textMuted });
  page.drawText('GitHub: github.com/mohsinahmad   LinkedIn: linkedin.com/in/mohsin-ahmad', { x: 50, y: 722, size: 9, font: fontRegular, color: textMuted });

  // Divider
  page.drawLine({
    start: { x: 50, y: 705 },
    end: { x: 545, y: 705 },
    thickness: 1.5,
    color: primaryPurple,
  });

  let currentY = 685;

  function drawSectionTitle(title) {
    page.drawText(title.toUpperCase(), { x: 50, y: currentY, size: 11, font: fontBold, color: primaryPurple });
    page.drawLine({
      start: { x: 50, y: currentY - 4 },
      end: { x: 545, y: currentY - 4 },
      thickness: 0.75,
      color: rgb(0.8, 0.85, 0.9),
    });
    currentY -= 18;
  }

  // Professional Summary
  drawSectionTitle('Professional Summary');
  const summaryText = [
    "Motivated Software Engineering student at Islamia College Peshawar with a strong academic record and a keen interest in",
    "frontend development, data analysis, and business intelligence. Skilled in creating modern web interfaces and working with",
    "Microsoft Excel and Power BI for data organization, analysis, and visualization. Seeking opportunities to apply technical",
    "knowledge, gain professional experience, and contribute to real-world projects."
  ];
  for (const line of summaryText) {
    page.drawText(line, { x: 50, y: currentY, size: 9, font: fontRegular, color: textDark });
    currentY -= 13;
  }
  currentY -= 8;

  // Education
  drawSectionTitle('Education');
  page.drawText('Bachelor of Software Engineering (BSE)', { x: 50, y: currentY, size: 10, font: fontBold, color: textDark });
  page.drawText('2025 - 2029', { x: 480, y: currentY, size: 10, font: fontBold, color: textDark });
  currentY -= 14;
  page.drawText('Islamia College Peshawar  Peshawar, Khyber Pakhtunkhwa, Pakistan', { x: 50, y: currentY, size: 9, font: fontOblique, color: textMuted });
  currentY -= 14;
  page.drawText('Academic Standing: GPA 4.00 / 4.00', { x: 50, y: currentY, size: 9.5, font: fontBold, color: primaryPurple });
  currentY -= 20;

  // Technical Skills
  drawSectionTitle('Technical Skills & Core Competencies');
  page.drawText('Frontend Development:', { x: 50, y: currentY, size: 9.5, font: fontBold, color: textDark });
  page.drawText('HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, Responsive Web Design, UI/UX Basics', { x: 175, y: currentY, size: 9, font: fontRegular, color: textDark });
  currentY -= 15;

  page.drawText('Data & Business Intelligence:', { x: 50, y: currentY, size: 9.5, font: fontBold, color: textDark });
  page.drawText('Microsoft Excel, Microsoft Power BI, Data Analysis, Data Visualization, Dashboard Development, Data Reporting', { x: 195, y: currentY, size: 9, font: fontRegular, color: textDark });
  currentY -= 15;

  page.drawText('Developer Tools & Systems:', { x: 50, y: currentY, size: 9.5, font: fontBold, color: textDark });
  page.drawText('Git, GitHub, Visual Studio Code (VS Code)', { x: 185, y: currentY, size: 9, font: fontRegular, color: textDark });
  currentY -= 20;

  // Featured Projects
  drawSectionTitle('Featured Web Development Projects (2026)');

  const projects = [
    {
      name: '1. Be Careful  Healthcare & Clinical Web Interface (2026)',
      tech: 'Technologies: HTML, CSS, JavaScript',
      desc: 'Modern clinical healthcare interface featuring patient vitals analytics, interactive appointment workflows, and responsive layouts.'
    },
    {
      name: '2. Grand Thief Autos  Luxury Exotic Car Rental Platform (2026)',
      tech: 'Technologies: HTML, CSS, JavaScript, Tailwind CSS',
      desc: 'High-end supercar rental experience with vehicle browsing, specification filtering, booking tiers, and premium dark glassmorphism.'
    },
    {
      name: '3. Vectoria  Corporate Business & Enterprise Intelligence Website (2026)',
      tech: 'Technologies: HTML, CSS, JavaScript, Tailwind CSS',
      desc: 'Enterprise corporate web application presenting AI and cloud solutions, interactive case studies, pricing matrices, and insights.'
    },
    {
      name: '4. You Can  Fitness & Workout Activity Platform (2026)',
      tech: 'Technologies: HTML, CSS, JavaScript, Responsive Design',
      desc: 'Dynamic fitness platform showcasing workout routines, real-time activity metrics, calorie burn charts, and responsive experience.'
    },
    {
      name: '5. Razdar  Creative Modern Web Experience (2026)',
      tech: 'Technologies: HTML, CSS, JavaScript, Modern Web UI',
      desc: 'Immersive digital agency portfolio with 3D glass cards, animated interactions, high-contrast typography, and fluid transitions.'
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.name, { x: 50, y: currentY, size: 9.5, font: fontBold, color: textDark });
    currentY -= 12;
    page.drawText(proj.tech, { x: 50, y: currentY, size: 8.5, font: fontOblique, color: primaryPurple });
    currentY -= 12;
    page.drawText(proj.desc, { x: 50, y: currentY, size: 8.5, font: fontRegular, color: textMuted });
    currentY -= 14;
  }
  currentY -= 6;

  // Key Strengths & Languages
  drawSectionTitle('Key Strengths & Languages');
  page.drawText('Core Strengths:', { x: 50, y: currentY, size: 9, font: fontBold, color: textDark });
  page.drawText('Problem Solving, Fast Learning, Analytical Thinking, Creativity, Attention to Detail, Team Collaboration', { x: 130, y: currentY, size: 9, font: fontRegular, color: textDark });
  currentY -= 14;
  page.drawText('Languages:', { x: 50, y: currentY, size: 9, font: fontBold, color: textDark });
  page.drawText('English (Professional) | Urdu (Native) | Pashto (Native)', { x: 130, y: currentY, size: 9, font: fontRegular, color: textDark });
  currentY -= 20;

  // Career Interests & Academic Focus
  drawSectionTitle('Career Interests & Academic Focus');
  page.drawText('Frontend Development  Web Development  Software Engineering  Data Analysis  Business Intelligence  Dashboard Development', {
    x: 50,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  const pdfBytes = await pdfDoc.save();
  const cvPath = path.join(publicDir, 'Mohsin_Ahmad_CV.pdf');
  fs.writeFileSync(cvPath, pdfBytes);
  console.log('Saved Mohsin_Ahmad_CV.pdf successfully! Size:', pdfBytes.length, 'bytes');
}

main().catch(console.error);
