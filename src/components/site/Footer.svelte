<script lang="ts">
    import { url, isActive } from '@roxi/routify';
</script>

<footer class="container mx-auto grid grid-cols-3 py-12 pt-4 pb-4 text-left mt-12 gap-6">
    <div>
        <h1>Help</h1>
        <p>Here's some useful things to get you started:</p>
        <ul>
            <li><a href={$url('./what-is-offprint')}>What is Offprint?</a></li>
            <li><a href={$url('./omnibus')}>The Offprint Omnibus</a></li>
            <li><a href={$url('./code-of-conduct')}>Code of Conduct</a></li>
        </ul>
    </div>
    <div>
        <h1>About</h1>
        <p>
            We're a site dedicated to the cultivation of a community of writers that help each other grow, get better,
            and just have fun.
        </p>
        <p>&copy;2021 Offprint Studios</p>
        <ul>
            <li><a href={$url('./terms-of-service')}>Terms of Service & Privacy Policy</a></li>
            <li><a href={$url('./open-source-licenses')}>Open Source Licenses</a></li>
            <li><a href={$url('./site-staff')}>Site Staff</a></li>
            <li><a href={$url('./supporters')}>Patreon Supporters & Contributors</a></li>
        </ul>
    </div>
    <div>
        <h1>Support Us</h1>
        <p>If you wanna throw a few bits our way, here's some links to get you started:</p>
        <ul>
            <li>
                <a href="https://www.patreon.com/offprintstudios?fan_landing=true">Support us on Patreon!</a>
            </li>
            <li>
                <a href="https://forms.gle/VBHoKhneJzg34GSA8">Sign up for the Offprint Closed Alpha!</a>
            </li>
        </ul>
    </div>
</footer>

<style lang="less">
    footer {
        h1 {
            color: var(--accent);
            border-bottom: 1px solid var(--borders);
            font-size: 28px;
            font-weight: 300;
            font-family: var(--header-text);
        }

        p {
            margin-top: 0.5rem;
        }

        ul {
            margin-top: 0.5rem;
            margin-left: 2rem;
            list-style: circle;
        }
    }
</style>
