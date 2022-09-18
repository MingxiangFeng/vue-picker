<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <br />

    <button @click="selectType(1)">单列</button>
    <button @click="selectType(2)">双列联动</button>

    <br />

    <button @click="pickerVisible = true">
      查看{{ layer === 1 ? "单列" : "双列联动" }}
    </button>

    <VuePicker
      :layer="2"
      :data="pickData"
      :defaultIndex="defaultIndex"
      :showToolbar="true"
      @cancel="cancel"
      @confirm="confirm"
      v-model:visible="pickerVisible"
    />
  </div>
</template>

<script>
import VuePicker from "@/components/picker/index.vue";
import { one_column_data, two_column_data } from "./mock";

export default {
  name: "HomeView",
  components: {
    VuePicker,
  },
  data() {
    return {
      layer: 1,
      pickerVisible: false,
      pickData: [],
      defaultIndex: undefined,
    };
  },
  methods: {
    cancel() {
      this.result = "click cancel result: null";
      console.log("home-view this.result==", this.result);
    },
    confirm(res) {
      this.result = JSON.stringify(res);
      console.log("home-view this.result==", this.result);
    },
    selectType(index) {
      this.layer = index;
      if (index === 1) {
        this.pickData = one_column_data;
        this.defaultIndex = 5;
      } else if (index === 2) {
        this.pickData = two_column_data;
        this.defaultIndex = [1, 2];
      }
    },
  },
};
</script>
