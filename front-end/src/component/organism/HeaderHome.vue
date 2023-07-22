<template>
	<header class="container d-flex flex-column flex-md-row py-5">
		<div class="col col-md-6">
			<h1 class="fw-bold text-custom-blue">Aqui seu caso está em boas mãos!</h1>
			<p>nosso escritório atende mais de 10 áreas e conta com um time de 8 advogados especialistas!</p>
			<Button />
		</div>
		<div class="col col-md-6 bg-primary align-self-end">
			<img
				src="/right-header.png"
				alt="Imagem de Cleverson Marques"
			/>
		</div>
	</header>
</template>

<script>
import Button from "../atom/Button.vue";

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
