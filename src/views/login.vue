<template>
    <div id="app">
      <InputText v-model="login.email" placeholder="Email" />
      <InputText v-model="login.password" type="password" placeholder="Password" />
      <Button label="Login" @click="submitForm" /> 
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import Login from '../app/domain/login';
  import LoginUseCase from '../app/user-interfaces/LoginUseCases';
  import LoginRepositoryAxios from '../app/adapters/LoginRepositoryAxios';
  
  export default defineComponent({
    name: 'LoginView',
    components: {
      Button,
      InputText
    },
    setup() {
      const login = ref(new Login('', ''));
      const loginUseCase = new LoginUseCase(new LoginRepositoryAxios());
      const submitForm = async () => { // Removed async here
        const response = await loginUseCase.login(login.value);
        console.log(response);
      };
      return {
        login,
        submitForm
      };
    }
  });
  </script>