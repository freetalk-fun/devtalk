# Grid

CSS grid lets you setup a 2D grid layout on which you can place components.


```vue
<template>
  <div class="container">
    <nav class="navbar">the navbar at the top</nav>
    <div class="sidebar-left">on the left</div>
    <main class="main-content">
      <slot>this is your content</slot>
    </main>
    <div class="sidebar-right">the right sidebar</div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px; /* sidebar-left | main-content | sidebar-right */
}

.navbar {
  grid-column: 1 / 4; /* spans all columns */
  border: 2px solid black;
}

.sidebar-left {
  grid-column: 1;
  border: 2px solid black;
}

.main-content {
  grid-column: 2;
  border: 2px solid black;
}

.sidebar-right {
  grid-column: 3;
  border: 2px solid black;
}
</style>
```