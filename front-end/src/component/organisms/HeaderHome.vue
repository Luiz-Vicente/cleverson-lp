<template>
	<header class="container d-flex flex-column flex-md-row py-5">
		<div class="d-flex flex-column justify-content-center align-items-start col col-md-6">
			<h1 class="fw-bold text-custom-blue">Aqui seu caso está em boas mãos!</h1>
			<p>nosso escritório atende mais de 10 áreas e conta com um time de 8 advogados especialistas!</p>
			<Button size="lg" href="https://google.com" />
		</div>
		<div class="col col-md-6 d-flex justify-content-end mt-3 mt-md-0">
			<img
			class="w-100"
				src="/right-header.png"
				alt="Imagem de Cleverson Marques"
			/>
		</div>
	</header>
</template>

<script>
import Button from "Atom/Button.vue";

export default {
	components: {
		Button,
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-size: 3.438rem;
}
img {
	max-width: 400px;
}
</style>
