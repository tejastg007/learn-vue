<template>
	<section>
		<base-card v-if="!hasRequests">
			<h3>No requests present at a moment!</h3>
		</base-card>
		<base-card v-else v-for="request in requests" :key="request.id">
			<request-item
				:id="request.id"
				:coachId="request.coachId"
				:email="request.email"
				:message="request.message"
			></request-item>
		</base-card>
	</section>
</template>
<script>
import RequestItem from "@/components/requests/RequestItem.vue";
export default {
	components: { RequestItem },
	props: ["id"],
	computed: {
		requests() {
			return this.$store.getters["request/getRequests"](this.id);
		},
		hasRequests() {
			return this.$store.getters["request/hasRequests"](this.id);
		},
	},
};
</script>
<style scoped></style>
