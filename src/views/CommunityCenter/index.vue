<template>
  <div class="community-main">
    <!-- 宠物列表 -->
    <el-card v-for="pet in pets" :key="pet.id">
      <img :src="pet.image" alt="宠物图片" />
      <p>{{ pet.name }}</p>
      <p>{{ pet.status }}</p>
      <p>{{ pet.location }}</p>
      <el-button @click="showPetDetails(pet)">查看详情</el-button>
    </el-card>

    <!-- 抽屉 -->
    <el-drawer
      v-model="drawer"
      title="预留信息"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pets = [
  {
    id: 1,
    name: '小白',
    image: 'https://via.placeholder.com/150',
    status: '待领养',
    location: '深圳',
  },
  {
    id: 1,
    name: '小白',
    image: 'https://via.placeholder.com/150',
    status: '待领养',
    location: '深圳',
  },
]

const drawer = ref(true)
const showAdoption = ref(false)

const handleClose = () => {}
</script>
