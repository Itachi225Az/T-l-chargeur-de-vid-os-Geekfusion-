function downloadVideo() {
  const url = document.getElementById("videoURL").value;
  const message = document.getElementById("message");

  if (!url.trim()) {
    message.innerText = "Veuillez entrer un lien de vidéo valide.";
    return;
  }

  message.innerText = "Traitement en cours...";

  // Envoie vers le backend
  fetch("https://tonserveur.render.com/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ videoURL: url }),
  })
    .then((res) => res.blob())
    .then((blob) => {
      const videoLink = document.createElement("a");
      videoLink.href = URL.createObjectURL(blob);
      videoLink.download = "video.mp4";
      videoLink.click();
      message.innerText = "Téléchargement terminé.";
    })
    .catch((err) => {
      console.error(err);
      message.innerText = "Une erreur est survenue.";
    });
}function toggleTheme() {
  document.body.classList.toggle("neon-theme");
}
