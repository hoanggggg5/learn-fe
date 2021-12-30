import { ssrRef } from "@nuxtjs/composition-api"
import { User } from "~/types";

const store = ssrRef<{
  first_route: boolean;
  user: User;
}>({
  first_route: true,
  user: {
    uid: null,
    email: null,
    first_name: null,
    last_name: null,
    bio: null,
    state: null,
    role: null,
  }
})

export default store