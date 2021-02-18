<script lang="ts">
    import type { LoginUser } from '../../models/auth';
    import { AuthService } from '../../shared/auth';
    import Toggle from '../util/inputs/Toggle.svelte';

    const auth = new AuthService();

    const loginUser: LoginUser = {
        email: '',
        password: '',
        rememberMe: false,
    };

    function onSubmit() {
        console.log(`submitting form`);
        auth.login(loginUser).subscribe(() => {
            console.log(`success!`);
        });
    }
</script>

<form on:submit={onSubmit}>
    <div class="mb-8">
        <input name="email" id="email" type="email" placeholder="Email Address" bind:value={loginUser.email} required />
        <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            bind:value={loginUser.password}
            required
        />
    </div>

    <div class="flex flex-row items-center">
        <div class="flex-1">
            <Toggle bind:value={loginUser.rememberMe} label="Remember Me" />
        </div>
        <div>
            <button type="submit" class="text-right">Log In</button>
        </div>
    </div>
</form>
