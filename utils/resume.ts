import { jsPDF } from "jspdf";

export const generateAndDownloadResume = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  
  let y = 20;

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(30, 58, 138); // Dark Blue
  doc.text("Mohd Maaz", pageWidth / 2, y, { align: "center" });
  y += 8;

  // Contact Info
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("Address: Farrukhabad, Uttar Pradesh, India | Email: mohdmaazwork@gmail.com | Phone: +91-9260976665", pageWidth / 2, y, { align: "center" });
  y += 6;
  doc.setTextColor(0, 0, 255); // Blue links
  doc.text("Online Presence: LinkedIn | GitHub | Kaggle", pageWidth / 2, y, { align: "center" });
  y += 10;
  
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Education ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(30, 58, 138);
  doc.text("Education", margin, y);
  y += 8;

  // MCA
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("M.C.A", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text("Lucknow, Uttar Pradesh, India", pageWidth - margin, y, { align: "right" });
  y += 5;
  
  doc.text("Integral University, Lucknow", margin, y);
  doc.text("Aug, 2023 - May, 2025", pageWidth - margin, y, { align: "right" });
  y += 5;
  doc.text("•  CGPA: 10/10", margin + 5, y);
  y += 8;

  // BCA
  doc.setFont("helvetica", "bold");
  doc.text("B.C.A", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text("Lucknow, Uttar Pradesh, India", pageWidth - margin, y, { align: "right" });
  y += 5;
  doc.text("Integral University, Lucknow", margin, y);
  doc.text("Oct, 2020 - Jun, 2023", pageWidth - margin, y, { align: "right" });
  y += 5;
  doc.text("•  CGPA: 10/10", margin + 5, y);
  y += 10;
  
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Skills ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(30, 58, 138);
  doc.text("Skills", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  const skills = [
      "Programming: Python, SQL, C",
      "AI: Machine Learning, Supervised/Unsupervised Learning, NLP, LangChain, Google AI Studio",
      "Data: MySQL, Pandas, Numpy, MongoDB",
      "MLOps: Git, DVC, MLflow, Docker, AWS EC2, AWS S3 Bucket, CI/CD Pipelines",
      "Frameworks: Scikit-learn, NLTK, XGBoost",
      "Visualization: Matplotlib, Seaborn",
      "Web: Flask, Streamlit, FastAPI"
  ];

  skills.forEach(skill => {
      // Split bold part if needed, for simplicity we print full line
      // Check if text exceeds width
      const splitText = doc.splitTextToSize(skill, contentWidth);
      doc.text(splitText, margin, y);
      y += 6 * splitText.length;
  });
  y += 4;
  
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Experience ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(30, 58, 138);
  doc.text("Experience", margin, y);
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("Kaggle Project Research Internship", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text("Lucknow, Uttar Pradesh, India", pageWidth - margin, y, { align: "right" });
  y += 5;
  
  doc.text("Department of Computer Application, Integral University", margin, y);
  doc.text("Feb 2024 - Apr 2024", pageWidth - margin, y, { align: "right" });
  y += 6;

  doc.setFontSize(10);
  const expPoints = [
      "• Conducted Customer Segmentation using Market Basket Analysis and ML techniques.",
      "• Applied clustering and classification algorithms to analyze consumer behavior.",
      "• Utilized Python (Pandas, Scikit-learn) for data preprocessing and model development."
  ];
  expPoints.forEach(point => {
      const splitText = doc.splitTextToSize(point, contentWidth - 5);
      doc.text(splitText, margin + 5, y);
      y += 5 * splitText.length;
  });
  y += 4;

  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // --- Projects ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(30, 58, 138);
  doc.text("Projects", margin, y);
  y += 8;

  const projects = [
      {
          name: "YouTube Comment Analyzer",
          date: "Apr, 2025",
          details: [
              "Developed a Chrome plugin using YouTube API to fetch and analyze comments.",
              "Implemented TF-IDF and LightGBM for sentiment classification (86.58% accuracy).",
              "Integrated MLOps: DVC, Git, GitHub, MLflow, AWS S3, EC2.",
              "Tech Stack: Python, NLTK, Scikit-learn, DVC, Flask."
          ]
      },
      {
          name: "Shade Analyzer",
          date: "Oct, 2024",
          details: [
              "Built a Streamlit web app to extract top 'n' colors from images using K-Means.",
              "Enabled user-friendly image upload and color selection.",
              "Tech Stack: Python, Scikit-learn, Streamlit."
          ]
      },
      {
          name: "Health Sage: Multiple Disease Predictor",
          date: "May, 2023",
          details: [
              "Created Flask-based web app for predicting Diabetes, PCOS, and Heart Disease.",
              "Deployed on Render, with version control via Git and GitHub.",
              "Tech Stack: Python, Scikit-learn, Flask, HTML/CSS, Pandas."
          ]
      }
  ];

  projects.forEach(proj => {
      // Check for page break
      if (y > 270) {
          doc.addPage();
          y = 20;
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(proj.name, margin, y);
      doc.setFont("helvetica", "normal");
      doc.text(proj.date, pageWidth - margin, y, { align: "right" });
      y += 5;
      
      doc.setFontSize(10);
      proj.details.forEach(detail => {
          const text = "• " + detail;
          const splitText = doc.splitTextToSize(text, contentWidth - 5);
          doc.text(splitText, margin + 5, y);
          y += 5 * splitText.length;
      });
      y += 4;
  });

  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

   // --- Achievements ---
   if (y > 250) { doc.addPage(); y = 20; }
   doc.setFont("helvetica", "bold");
   doc.setFontSize(14);
   doc.setTextColor(30, 58, 138);
   doc.text("Achievements", margin, y);
   y += 8;

   doc.setFont("helvetica", "normal");
   doc.setFontSize(10);
   doc.setTextColor(0, 0, 0);
   const achievements = [
       "• Secured First Position in Academics at University level (2024-2025).",
       "• Awarded Gold Medals at University, Faculty and Program level (2024-2025).",
       "• Secured First Position in Academics at University level (2022-2023).",
       "• Awarded Gold Medals at University, Faculty and Program level (2022-2023).",
       "• Awarded Achievers Award in Academics by Bank of Baroda (Rs. 31000)."
   ];
   achievements.forEach(ach => {
        const splitText = doc.splitTextToSize(ach, contentWidth);
        doc.text(splitText, margin, y);
        y += 5 * splitText.length;
   });

   doc.save("Mohd_Maaz_Resume.pdf");
};
