<template>
	<HeaderHome />
	<About />
	<Areas />
	<Laws />
	<Blog />
	<Instagram />
</template>

<script>
import HeaderHome from "Organism/HeaderHome.vue";
import About from "Organism/About.vue";
import Areas from "Organism/Areas.vue";
import Laws from "Organism/Laws.vue";
import Blog from "Organism/Blog.vue";
import Instagram from "Organism/Instagram.vue";

export default {
	components: {
		HeaderHome,
		About,
		Areas,
		Laws,
		Blog,
		Instagram,
	},
};
</script>
