<template>
  <div
    class="modal fade"
    :id="'exampleModal' + idCard"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">E-mail</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="justify-content-evenly">
            <div class="form-floating p-1">
              <input
                type="email"
                class="form-control"
                id="floatingInputValue"
                placeholder="name@example.com"
              />
              <label for="floatingInputValue">Assunto do E-mail</label>
            </div>
            <div class="form-floating p-1">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
              <label for="floatingTextarea2">Corpo do E-mail</label>
            </div>

            <div>
              <p class="ms-3 fw-bold">
                Anexar Arquivo
                <span
                  style="font-size: x-small; font-style: italic; color: #979797; font-weight: bold"
                  >PNG e Jpeg</span
                >
              </p>
              <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label
                  class="input-group-text"
                  for="inputGroupFile02"
                  style="background-color: #6ebaf9; border: none; color: white"
                  >Salvar</label
                >
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            style="background-color: #6ebaf9; border: none"
            class="btn btn-primary rounded-3"
          >
            Ativar Bot
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEscolas',
  props: {
    idCard: {
      type: String,
      required: true
    },
    infoCard: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
