<template>
  <div class="combobox">
    <select name="categories" id="cate" >
      <option value="1" data-foo="Affiliate">Affiliate</option>
      <option value="2" data-foo="Blogging">Blogging</option>
      <option value="3" data-foo="Google Adsense">Google Adsense</option>
      <option value="4" data-foo="Marketing"> Marketing</option>
      <option value="5" data-foo="Hacks & Tips">Hacks & Tips</option>
    </select>
  </div>
</template>

<script setup>

</script>
<style>
.combobox > * {
    font-size: 15px;
    text-align: center;
    height: 40px;
    width: 350px;
    color: #4d5257;
    font-family: 'Roboto';
}
</style>