<template>
  <div class="work">
    <div class="name bold">{{ name }}</div>
    <img
      :src="img"
      :alt="name"
      class="preview" />
    <div class="desc">
      {{ desc }}
    </div>
    <div class="links">
      <a
        :href="source"
        target="_blank"
        class="link">
        код
      </a>
      <a
        v-if="website"
        :href="website"
        target="_blank"
        class="link">
        сайт
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface WorkProps {
  name: string
  desc: string
  source: string
  website?: string
  img: string
}

defineProps<WorkProps>()
</script>

<style scoped lang="scss">
.work {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  max-width: 27.5rem;
  width: 100%;
  text-align: center;
}

.preview {
  height: 15rem;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
}

.links {
  position: absolute;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--accent);
  color: var(--contrast);
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.link {
  color: var(--contrast);
  padding: 0 0.8rem;
}
</style>
