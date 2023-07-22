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
		size: {
			type: String,
			default: "md",
		},
	},
	computed: {
		class() {
			let customClass = "";
			if (this.variant === "gold-cta") {
				customClass = `btn-gold-cta btn-${this.size} text-custom-gold border-custom-gold rounded-0`;
			}
			return customClass;
		},
	},
};
</script>
