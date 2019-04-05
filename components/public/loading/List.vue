<template>
  <div class="list-loading">
    <svg
      version="1.1"
      id="L6"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <rect fill="#f04848" stroke="#f04848" stroke-width="10" x="25" y="25" width="50" height="50">
        <animateTransform
          attributeName="transform"
          dur="0.5s"
          from="0 50 50"
          to="180 50 50"
          type="rotate"
          id="strokeBox"
          attributeType="XML"
          begin="rectBox.end"
        ></animateTransform>
      </rect>
      <rect x="27" y="27" fill="#fff" width="46" height="26.3135">
        <animate
          attributeName="height"
          dur="1.3s"
          attributeType="XML"
          from="50"
          to="0"
          id="rectBox"
          fill="freeze"
          begin="0s;strokeBox.end"
        ></animate>
      </rect>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.list-loading {
  text-align: center;
  width: 100%;
  padding: u(10) 0;
  box-sizing: border-box;
  overflow: hidden;
  svg {
    width: u(36);
  }
}
</style>
