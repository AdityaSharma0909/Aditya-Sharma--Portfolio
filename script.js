const modal = document.getElementById("modal");
const viewer = document.getElementById("viewer");
const container = document.getElementById("certContainer");

function openCert(file) {
  console.log("Opening:", file);
  viewer.src = file;
  modal.style.display = "block";
}
const certificates = [
  { name: "AI Security & Governance", file: "ai-security.pdf", image: "ai-security.png" },
  { name: "Amazon SageMaker", file: "sagemaker.pdf", image: "sagemaker.png" },
  { name: "AMD LLM Serving", file: "amd-llm.pdf", image: "amd-llm.png" },
  { name: "Claude with Bedrock", file: "claude.pdf", image: "claude.png" },
  { name: "Deloitte Simulation", file: "deloitte.pdf", image: "deloitte.png" },
  { name: "AWS ML Foundations", file: "aws-ml.pdf", image: "aws-ml.png" },
  { name: "Generative AI - GFG", file: "gfg.pdf", image: "gfg.png" },
  { name: "NVIDIA GenAI", file: "nvidia.pdf", image: "nvidia.png" },
  { name: "Oracle AI Foundations", file: "oracle.pdf", image: "oracle.png" },
];

certificates.forEach(cert => {
  const card = document.createElement("div");
  card.className = "card";
  
  const preview = document.createElement("iframe");
  preview.src = `assets/certificates/${cert.file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`;
  preview.title = cert.name;
  preview.style.width = "100%";
  preview.style.height = "200px";
  preview.style.borderRadius = "8px";
  preview.style.pointerEvents = "none";
  preview.style.border = "none";
  preview.style.overflow = "hidden";
  preview.style.backgroundColor = "white";
  
  const title = document.createElement("div");
  title.innerText = cert.name;
  title.style.marginTop = "10px";

  card.appendChild(preview);
  card.appendChild(title);

  card.onclick = () => {
    openCert(`assets/certificates/${cert.file}`);
  };

  container.appendChild(card);
});

function openResume() {
  viewer.src = "Aditya_Resume_2026.pdf";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  viewer.src = "";
}

window.onclick = function(e) {
  if (e.target == modal) closeModal();
};