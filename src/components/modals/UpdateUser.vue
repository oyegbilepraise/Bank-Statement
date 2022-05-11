<template>
  <Modal
    :visible="visible"
    @close="$emit('close')"
    header-title="Update User"
    show-header
    :lazy="false"
  >
    <Input placeholder="" v-model="username" />
    <div class="pt-4">
      <select name="" id="" class="w-full border p-2" @change="setRole($event)">
        <option value="" disabled selected>Select Role</option>
        <option v-for="role in roles" :key="role.id">
          {{ role.name }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <Button class="w-full" @click="update" variant="success">Update</Button>
    </div>
  </Modal>
</template>

<script>
import axios from "axios";
import Modal from "../global/Modal.vue";
import Input from "../global/Input.vue";
import Button from "../global/Button.vue";
import Select from "../global/Select.vue";
export default {
  components: { Modal, Input, Button, Select },
  props: {
    visible: {
      type: Boolean,
      visible: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      username: this.item?.username,
      roles: [],
      role: "",
    };
  },

  mounted() {
    axios
      .get("https://controldirectory.herokuapp.com/api/roles")
      .then((res) => {
        this.roles = res.data.data;
      });
  },

  methods: {
    setRole(e) {
      let a = e.target.value;
      this.role = a;
    },
    update() {
      axios.put("https://controldirectory.herokuapp.com/api/update-user", {
        user_id: this.item.id,
        username: this.username,
        role: this.role,
      });
    },
  },
};
</script>

<style>
</style>