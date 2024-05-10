<template>
  <div class="card">
    <div class="container">
      <div class="login-container">
        <div class="login-form">
          <h2>Iniciar Sesión</h2>
          <form @submit.prevent="login">
            <div class="p-field p-grid">
              <label for="username" class="p-col-fixed" style="width:100px">Usuario</label>
              <div class="p-col">
                <InputText id="username" v-model="user.username" placeholder="Ingrese su usuario" />
              </div>
            </div>
            <div class="p-field p-grid">
              <label for="password" class="p-col-fixed" style="width:100px">Contraseña</label>
              <div class="p-col">
                <InputText id="password" v-model="user.password" placeholder="Ingrese su contraseña" type="password" />
              </div>
            </div>
            <Button label="Iniciar Sesión" />
          </form>
        </div>
      </div>
      <div class="welcome-section">
        <!-- Contenido de la sección de bienvenida y botones de redes sociales aquí -->
        <h2>Bienvenido</h2>
        <p>¡Inicia sesión para continuar!</p>
        <div class="divider"></div> <!-- Línea divisoria agregada aquí -->
        <div class="social-login">
          <Button class="p-button-text white-button" icon="pi pi-google" label="Ingresar con Gmail" />
          <Button class="p-button-text white-button" icon="pi pi-facebook" label="Ingresar con Facebook" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  components: {
    InputText,
    Button
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      // Lógica de inicio de sesión
      console.log("Iniciando sesión con:", this.user);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Asegura que el contenedor tenga el alto del viewport */
  width: 100%; /* Opcional: Asegura que el contenedor tenga el ancho completo */
}

.card {
  border: 2px solid #ccc; /* Grosor del borde del card */
  padding: 20px; /* Espaciado interno del card */
  border-radius: 10px; /* Bordes redondeados del card */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para el card */
  max-width: 800px; /* Ancho máximo del card */
  margin: auto; /* Centra el card horizontalmente */
  height: 600px; /* Alto del card */
  /* Añade estas propiedades si el card no se centra correctamente */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-container {
  margin: 10px;
}
.welcome-section {
  margin: 10px;
  background: green; /* Color de fondo verde */
  transform: skew(-10deg); /* Inclinación hacia la izquierda */
  color: white; /* Cambia el color del texto a blanco para mejor contraste */
}
.welcome-section > * {
  transform: skew(10deg);
}

/* Opcional: Ajusta el padding para asegurar que el contenido no toque los bordes */
.welcome-section {
  padding: 20px;
}
.social-login {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.white-button {
  color: white !important; /* Establece el color del texto e icono a blanco */
}

/* Ajustes adicionales de estilo según sea necesario */
</style>