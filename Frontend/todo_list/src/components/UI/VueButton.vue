<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  background: var(--vt-c-indigo);
  color: var(--vt-c-white-soft);
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
