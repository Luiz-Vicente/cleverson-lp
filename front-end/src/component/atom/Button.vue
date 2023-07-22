<template>
	<component
		:is="href ? 'a' : 'p'"
		class="btn"
		:class="class"
	>
		{{ text }}
	</component>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			default: "Entrar em contato",
		},
		variant: {
			type: String,
			default: "gold-cta",
		},
	},
	computed: {
		class() {
			return "aa";
		},
	},
};
</script>
