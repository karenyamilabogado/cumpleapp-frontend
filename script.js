document.getElementById("formCumple").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const fecha = document.getElementById("fecha").value;

  try {
    const res = await fetch("https://cumpleapp-backend.onrender.com/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, fecha })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.mensaje);   // ✅ muestra el mensaje del backend
      document.getElementById("formCumple").reset();
      // 👉 actualizar la lista después de guardar
      if (typeof cargarCumples === "function") {
        cargarCumples();
      }
    } else {
      alert(data.error || "Error al guardar");
    }
  } catch (error) {
    console.error("Error en el fetch:", error);
    alert("Error al conectar con el servidor");
  }
});

