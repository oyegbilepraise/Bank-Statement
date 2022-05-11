<template>
  <Navbar>
    <div class="page-wrapper">
      <div class="container-xl">
        <div class="page-header d-print-none">
          <div class="row align-items-center">
            <div class="col p-3 -ml-4 -mt-2" style="background-color: #fbfbfb">
              <!-- Page pre-title -->
              <h4 class="text-small">
                Dashboard
                <i class="fa fa-angle-double-right mx-1" aria-hidden="true"></i>
                <span class="font-semibold text-gray-400">Users</span>
              </h4>
            </div>
            <div class="page-body -mt-3">
              <div
                class="container-xl bg-white h-screen p-4 mt-2"
                style="margin-left: -15px !important"
              >
                <div class="mt-1">
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table
                      class="
                        w-full
                        text-sm text-left text-gray-500
                        dark:text-gray-400
                      "
                    >
                      <thead
                        class="
                          text-xs text-gray-700
                          uppercase
                          bg-gray-50
                          dark:bg-gray-700 dark:text-gray-400
                        "
                      >
                        <tr>
                          <th scope="col" class="px-6 py-3 text-center">
                            User Name
                          </th>
                          <th scope="col" class="px-6 py-3 text-center">
                            Email
                          </th>
                          <th scope="col" class="px-6 py-3 text-center">
                            Role
                          </th>
                          <th scope="col" class="px-6 py-3 text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="
                            bg-white
                            border-b
                            dark:bg-gray-800 dark:border-gray-700
                            hover:bg-gray-50
                            dark:hover:bg-gray-600
                          "
                          v-for="role in user"
                          :key="role.id"
                        >
                          <th
                            scope="row"
                            class="
                              px-6
                              py-4
                              font-medium
                              text-gray-900
                              dark:text-white
                              whitespace-nowrap
                              text-center
                            "
                          >
                            {{ role.username }}
                          </th>
                          <td class="px-6 py-4 text-center">
                            {{ role.email }}
                          </td>
                          <td class="px-6 py-4 text-center">{{ role.role }}</td>
                          <td class="text-center">
                            <Button
                              variant="primary"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-report"
                              @click="reset(role.id)"
                              >Reset Password</Button
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <span
                      class="flex text-center items-center justify-center p-6"
                      v-if="user == ''"
                    >
                      <Spinner />
                      <h1>Fetching...</h1>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
  <div
    class="modal modal-blur fade"
    id="modal-report"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New report</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center text-red-500" v-if="error">
            Password and Confirm Password doesnt match
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Password..."
              v-model="password"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Confirm Password</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Confirm Password"
              v-model="confirm_password"
            />
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="#"
            class="btn btn-link link-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </a>
          <a href="#" class="btn btn-primary ms-auto" @click="createRole">
            Reset Password
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import Button from "../components/global/Button.vue";
import Spinner from "../components/global/Spinner.vue";
export default {
  components: { Navbar, Button, Spinner },
  data() {
    return {
      user: "",
      email: "",
      password: "",
      confirm_password: "",
      resetP: "",
      erroe: false,
    };
  },
  mounted() {
    this.test();
    axios
      .post("https://controldirectory.herokuapp.com/api/users", {})
      .then((res) => {
        this.user = res.data.data;
      });
  },

  methods: {
    test() {
      let total = 0;
      let array = [1, 2, 3, 4, 5, 6, 7];
      for (let i = 0; i < array.length; i++) {
        total += array[i];
      }
      console.log(total);
        if(total % 2 == 0) {
          console.log(total) 
        } else console.log('0');
    },
    reset(e) {
      this.resetP = e;
    },
    createRole() {
      const { confirm_password, password } = this;
      if (confirm_password === password) {
        axios.post(
          "https://controldirectory.herokuapp.com/api/reset-password",
          { user_id: this.resetP, confirm_password, password }
        );
      } else this.error = true;
    },
  },
};
</script>

<style>
</style>