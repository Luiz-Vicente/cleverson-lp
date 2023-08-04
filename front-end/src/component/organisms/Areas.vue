<template>
	<section id="areas" class="bg-custom-blue py-5">
		<div class="container">
			<div class="d-flex align-items-end mb-4">
				<i class="fa-solid fa-gavel text-custom-gold bg-white p-2 fs-4 rounded-4 me-2"></i>
				<h2 class="text-white m-0">Áreas de atuação</h2>
			</div>

			<div class="d-flex flex-column flex-md-row flex-wrap">
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
				<CardArea
					title="abacate"
					description="Nulla et sint cillum do cillum dolor sint anim mollit voluptate."
					icon="fa fa-solid fa-user"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import CardArea from "../molecules/CardArea.vue";

export default {
	components: {
		CardArea,
	},
};
</script>
