<template>
  <!-- TODO [CRITÉRIO 11 e 12]:
      Monte o formulário de cadastro com os campos:
        - clienteNome (text)
        - servico (text)
        - data (date)
        - hora (time)
        - barbeiro (text)
      Use v-model em cada campo para fazer o binding com os dados reativos.
      O botão de envio deve chamar a função "cadastrarAgendamento"
      https://getbootstrap.com/docs/5.3/forms/overview/#overview
      https://vuejs.org/guide/essentials/forms.html#basic-usage
    -->

  <!-- 

    Não ficou tao bonito mais pelomenos esta fucionando

    -->
  <form>
    <div class="mb-3">
      <label for="nomeCliente" class="form-label"
        >Digite o nome do cliente:
      </label>
      <input
        type="text"
        class="form-control"
        id="nomeCliente"
        aria-describedby="emailHelp"
        v-model="formulario.clienteNome"
      />
    </div>
    <div class="mb-3">
      <label for="servico" class="form-label">Serviço</label>
      <input
        type="text"
        class="form-control"
        id="servico"
        v-model="formulario.servico"
      />
    </div>
    <div class="mb-3">
      <label for="data" class="form-label">Data</label>
      <input
        type="date"
        class="form-control"
        id="data"
        v-model="formulario.data"
      />
    </div>
    <div class="mb-3">
      <label for="hora" class="form-label">Hora</label>
      <input
        type="time"
        class="form-control"
        id="hora"
        v-model="formulario.hora"
      />
    </div>
    <div class="mb-3">
      <label for="barbeiro" class="form-label">Barbeiro</label>
      <input
        type="text"
        class="form-control"
        id="barbeiro"
        v-model="formulario.barbeiro"
      />
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click.prevent="cadastrarAgendamento"
    >
      salvar
    </button>
  </form>

  <div class="mt-4">
    <router-link to="/" class="btn btn-secondary"
      >Voltar para lista</router-link
    >
  </div>
</template>

<script setup lang="ts">
// Importar criarAgendamento do agendamentoService
import { criarAgendamento } from "../services/agendamentoService";
import { ref } from "vue";
import { useRouter } from "vue-router";
import type Agendamento from "../interfaces/Agendamento";

// TODO [CRITÉRIO 3 e 11]:
// Crie um objeto reativo (ref) com os campos do formulário de cadastro

const formulario = ref<Agendamento>({
  id: 0,
  clienteNome: "",
  servico: "",
  data: "",
  hora: "",
  barbeiro: "",
  status: "pendente",
});

const router = useRouter();

// TODO [CRITÉRIO 10]:
// Implemente a função "cadastrarAgendamento".
// Ela deve:
// 1. Chamar criarAgendamento() passando os dados do formulário
// 2. Adicionar o agendamento retornado pela API à lista local
// 3. Limpar os campos do formulário após o envio
// 4. Redirecionar para a lista de agendamentos

async function cadastrarAgendamento() {
  const agendamentoCriado = await criarAgendamento(formulario.value);
  router.push("/");
}
</script>
