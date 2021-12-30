import { Vue, Component } from 'vue-property-decorator';
import controllers from '~/controllers';

@Component({})
export class AuthMixin extends Vue {
  email: string = ""
  password: string = ""

  get email_error() {
    if (this.email.length === 0) return;
    const valid = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email));
    if (!valid) return 'Email invalid';
  } 

  get password_error() {
    if (this.password.length === 0) return;
    return this.password.length < 5 ? 'Mật khẩu cần ít nhất 5 ký tự trở lên' : "";
  }

  async Login() {
    if(this.email_error) return
    if (this.password_error) return
    await controllers.Login(this.email, this.password);
  }
}
