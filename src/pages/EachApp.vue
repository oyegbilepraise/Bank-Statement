<template>
  <Navbar>
    <div class="page-wrapper">
      <div class="container-xl">
        <!-- Page title -->
        <div class="page-header d-print-none">
          <div class="row align-items-center">
            <div class="col p-3 -ml-4 -mt-5" style="background-color: #fbfbfb">
              <!-- Page pre-title -->
              <h4 class="text-small">
                Apps
                <i class="fa fa-angle-double-right mx-1" aria-hidden="true"></i>
                <span class="font-semibold text-gray-400">{{ app.name }}</span>
              </h4>
            </div>
            <!-- Page title actions -->
            <!-- <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <a
                  href="#"
                  class="btn btn-primary d-none d-sm-inline-block"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                >
                  <i class="fa fa-plus-circle mr-3" aria-hidden="true"></i>
                  Create New App
                </a>
                <a
                  href="#"
                  class="btn btn-primary d-sm-none btn-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                  aria-label="Create new report"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="page-body -mt-3" style="margin-right: 30px !important">
        <div class="container-xl bg-white h-screen p-4">
          <div class="flex">
            <div class="flex">
              <div
                class="p-3 text-white text-2xl text-center"
                style="
                  border-radius: 50%;
                  width: 60px;
                  height: 60px;
                  background-color: #ff0089;
                  font-weight: 800;
                "
              >
                {{ app.name && app?.name[0] }}
              </div>
              <div class="text-3xl mt-2 font-semibold mx-3">{{ app.name }}</div>
            </div>

            <div class="ml-auto flex">
              <span class="d-none d-sm-inline mx-3">
                <a
                  href="#"
                  class="btn btn-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalreport"
                >
                  New User
                </a>
              </span>
              <span class="d-none d-sm-inline">
                <a
                  href="#"
                  class="btn btn-primary d-none d-sm-inline-block"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                >
                  <i class="fa fa-plus-circle mr-3" aria-hidden="true"></i>
                  New Role
                </a>
                <a
                  href="#"
                  class="btn btn-primary d-sm-none btn-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-report"
                  aria-label="Create new report"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </a>
              </span>
            </div>
          </div>

          <div class="mt-4">
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
                    <th scope="col" class="px-6 py-3">User Name</th>
                    <th scope="col" class="px-6 py-3">Email</th>
                    <th scope="col" class="px-6 py-3">Role</th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
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
                    v-for="role in app.aspirants"
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
                      "
                    >
                      {{ role.username }}
                    </th>
                    <td class="px-6 py-4">{{ role.email }}</td>
                    <td class="px-6 py-4">{{ role.role }}</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        class="
                          font-medium
                          text-blue-600
                          dark:text-blue-500
                          hover:underline
                          cursor-pointer
                        "
                        @click="modals.show = true"
                        >Update</a
                      >
                    </td>
                    <UpdateUser
                      :item="role"
                      :visible="modals.show"
                      @close="modals.show"
                    />
                  </tr>
                </tbody>
              </table>
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
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Role name"
              v-model="name"
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
          <a
            href="#"
            class="btn btn-primary ms-auto"
            data-bs-dismiss="modal"
            @click="createRole"
          >
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Role
          </a>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal modal-blur fade"
    id="modalreport"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New User</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Role</label>
            <input
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Role name"
              v-model="role"
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
          <a
            href="#"
            class="btn btn-primary ms-auto"
            data-bs-dismiss="modal"
            @click="createUser"
          >
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create User
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import UpdateUser from "../components/modals/UpdateUser.vue";

export default {
  components: { Navbar, UpdateUser },
  data() {
    return {
      app: [],
      name: "",
      username: "",
      email: "",
      role: "",
      modals: {
        show: false,
      },
    };
  },

  mounted() {
    axios
      .post("https://controldirectory.herokuapp.com/api/app-list", {
        app_id: this.$route.params.id,
      })
      .then((res) => {
        this.app = res.data.data;
      });

    axios
      .post("https://controldirectory.herokuapp.com/api/users", {
        app_id: this.$route.params.id,
      })
      .then((res) => {
        console.log(res.data);
        // this.app = res.data.data;
      });
  },

  methods: {
    createRole() {
      axios.post("https://controldirectory.herokuapp.com/api/create-role", {
        name: this.name,
        app_id: this.$route.params.id,
      });
    },

    createUser() {
      const { username, email, role } = this;
      axios.post("https://controldirectory.herokuapp.com/api/create-user", {
        app_id: this.$route.params.id,
        username,
        email,
        role,
      });
    },
  },
};
</script>

<style>
</style>