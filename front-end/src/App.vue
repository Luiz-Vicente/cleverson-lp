<template>
	<Navbar />
	<router-view />
	<notifications
		:max="2"
		class="mt-5 p-5 me-3 w-25"
	/>
	<Footer />
</template>

<script>
import { Collapse } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Navbar from "Organism/Navbar";
import Footer from "Organism/Footer";

export default {
	components: {
		Navbar,
		Footer,
	},
	mounted() {
		Array.from(document.querySelectorAll("accordionPanelsStayOpenExample")).forEach(coll => new Collapse(coll));
	},
};
</script>
