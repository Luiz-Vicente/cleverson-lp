<template>
	<HeaderHome />
	<About />
	<Areas />
</template>

<script>
import HeaderHome from "../component/organism/HeaderHome.vue";
import About from "../component/organism/About.vue";
import Areas from "../component/organism/Areas.vue";

export default {
	components: {
		HeaderHome,
		About,
		Areas,
	},
};
</script>
