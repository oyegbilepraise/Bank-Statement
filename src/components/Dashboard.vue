<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <!-- Page title -->
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <TextArea v-model="myInput" name='Bank Statement' label="Bank Statement" />
        </div>
      </div>
      <Button variant="primary" class="flex items-center justify-center" @click="process">Process</Button>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-2">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-500 text-white text-center">
                <tr>
                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Colections
                  </th>

                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="eco in keys" :key="eco">
                  <td class="px-6 py-4 whitespace-nowrap borderx text-center cursor-pointer" @click="fetch(eco)">
                    <div class="text-sm text-gray-900">
                      {{ eco }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-10">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-500 text-white text-center">
                <tr>
                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Date
                  </th>

                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Balance
                  </th>
                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Credit
                  </th>
                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Corrected
                  </th>
                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Debit
                  </th>
                  <th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider
                text-center text-white
              ">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="eco in array" :key="eco" :class="eco?.color ? 'bg-green-500 text-white' : 'bg-white'">
                  <td class="px-6 py-4 whitespace-nowrap borderx text-center">
                    <div class="text-sm text-gray-900">
                      {{ eco.date }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {{ eco.balance }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {{ eco.credit }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {{ eco.corrected }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {{ eco.debit }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {{ eco.description }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "./global/Spinner.vue";
import TextArea from "./global/TextArea.vue";
import Button from "./global/Button.vue";
export default {
  data() {
    return {
      myInput: '',
      array: [],
      keys: [],
      collections: []
    };
  },
  mounted() {
  },
  methods: {
    process() {
      const { myInput } = this;
      let a = JSON.parse(myInput)
      let b = JSON.parse(a.top_layer);
      this.collections = b
      let c = Object.keys(b)
      this.keys = c

      this.array = b.transactions
    },
    fetch(eco) {
      let find;
      let a = this.collections[eco]

      if (a.length > 0) {
        let b = a?.map((description) => {
          let c = description.desc
          let ind;
          find = this.array.find((val, index) => {
            ind = index
            return val.description === c?.toUpperCase()
          })
          console.log(find?.credit);
          if (find) {
            find['color'] = true;
            this.array[ind] = find;
          }
        })
      }

    }
  },
  components: { Spinner, TextArea, Button },
};
</script>
<style>
</style>