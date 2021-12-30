import axios from "axios";
import store from "./store";
import GettersSetters from "./getters_setters";

class Controllers extends GettersSetters {
  store = store

  get user() {
    return this.store.value.user
  }

  async GetLogged(n_axios: any = axios) {
    try {
      const { data } = await n_axios.get("http://localhost:3000/api/v2/resource/users/me");
      this.user.uid = data.uid;
      this.user.email = data.email;
      this.user.first_name = data.first_name;
      this.user.last_name = data.last_name;
      this.user.bio = data.bio;
      this.user.state = data.state;
      this.user.role = data.role;
    } catch (error) {
      return error
    }
  }

  async Login(email: string, password: string ) {
    try {
      const { data } = await axios.post("http://localhost:3000/api/v2/identity/session", {
        email,
        password
      })
      this.user.uid = data.uid;
      this.user.email = data.email;
      this.user.first_name = data.first_name;
      this.user.last_name = data.last_name;
      this.user.bio = data.bio;
      this.user.state = data.state;
      this.user.role = data.role;
      this.$router.push("/")
    } catch (error) {
      return error
    }
  }

  async Register(first_name: string, last_name: string, email: string, password: string, bio: string, state: string, role: string) {
    try {
      const { data } = await axios.post("http://localhost:3000/api/v2/identity/session", {
        first_name,
        last_name,
        email,
        password,
        bio,
        state,
        role,
      })
      this.user.uid = data.uid;
      this.user.email = data.email;
      this.user.first_name = data.first_name;
      this.user.last_name = data.last_name;
      this.user.bio = data.bio;
      this.user.state = data.state;
      this.user.role = data.role;
      this.$router.push("/")
    } catch (error) {
      return error
    }
  }
}

export default new Controllers();
