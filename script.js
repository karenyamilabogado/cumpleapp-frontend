document.getElementById("formCumple").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;

  try {
    const res = await fetch("https://cumpleapp-backend.onrender.com/save", {  // 🔧 CORREGIDO
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
    } else {
      alert(data.error || "Error al guardar");
    }
  } catch (error) {
    console.error("Error en el fetch:", error);
    alert("Error al conectar con el servidor");
  }
});
