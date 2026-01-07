<template>
  <section class="lg:mt-32 mt-50" id="contact">
    <SectionHeader title="Contact Me" />

    <div class="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
      <form class="space-y-8" @submit.prevent="sendEmail">
        <Input
          id="email"
          label="Your email"
          type="email"
          placeholder="email@example.com"
          v-model="form.email"
        />

        <Input
          id="subject"
          label="Subject"
          type="text"
          placeholder="Let us know how we can help you"
          v-model="form.subject"
        />

        <Input
          id="message"
          label="Message"
          type="textarea"
          placeholder="Leave a comment"
          :rows="6"
          v-model="form.message"
        />

        <Button :label="loading ? 'Sending...' : 'Send'" />

        <p v-if="success" class="text-green-500">
          Message sent successfully 🚀
        </p>

        <p v-if="error" class="text-red-500">
          Something went wrong. Try again 😬
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";

const form = ref({
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const success = ref(false);
const error = ref(false);

const sendEmail = () => {
  loading.value = true;
  success.value = false;
  error.value = false;

  emailjs
    .send(
      "service_dvtvnd7",
      "template_xfc538i",
      {
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      "DLtY8in1lzl8lC30Z"
    )
    .then(() => {
      success.value = true;
      form.value = { email: "", subject: "", message: "" };
    })
    .catch(() => {
      error.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
