<template>
	<Navbar />
	<router-view />
</template>

<script>
import { Collapse } from "bootstrap/dist/js/bootstrap.esm.min.js";
import Navbar from "@/component/organism/Navbar";

export default {
	components: {
		Navbar,
	},
	mounted() {
		Array.from(document.querySelectorAll("accordionPanelsStayOpenExample")).forEach(coll => new Collapse(coll));
	},
};
</script>
