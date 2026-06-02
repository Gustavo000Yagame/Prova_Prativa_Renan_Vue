import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/HomeView.vue";
import DetalhesView from "@/views/DetalhesView.vue";
import CadastroView from "@/views/CadastroView.vue";
// TODO [CRITÉRIO 6]:
// Defina a rota para a tela inicial (HomeView).
// Caminho: '/'

// TODO [CRITÉRIO 7]:
// Defina a rota para a tela de detalhes (DetalhesView).
// Caminho: '/agendamento/:id'
// O ":id" é o parâmetro de rota que identifica qual agendamento será exibido.

// TODO
// Defina a rota para a tela de cadastro (CadastroView)
// Caminho: '/cadastro'
// https://router.vuejs.org/guide/#Creating-the-router-instance

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview,
    },
    {
      path: "/agendamento/:id",
      name: "detalhes",
      component: DetalhesView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
    },
  ],
});

export default router;
