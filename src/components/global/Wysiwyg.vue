<template>
  <Field :name="name" v-slot="{ errorMessage, value, handleChange }" class="w-full">
    <div class="flex flex-col items-stretch w-full">
      <span v-if="label" class="mb-2">{{ label }}</span>
      <ckeditor
        :model-value="value" @input="handleChange" :editor="editor.type" :config="editor.config"
        :disabled="disabled"
      ></ckeditor>
      <small v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</small>
    </div>
  </Field>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Field } from "vee-validate";

export default {
  name: "Wysiwyg",
  components: {
    ckeditor: CKEditor.component,
    Field
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      editor: {
        type: ClassicEditor,
        data: '<p>Content of the editor.</p>',
        config: {
          toolbar: ['bold', 'italic', 'link', 'undo', 'redo', 'numberedList', 'bulletedList']
        }
      }
    }
  }
}
</script>
