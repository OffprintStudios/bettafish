<script lang="ts">
    import { slogans } from "../models/titles";

    const rotatingSlogan = slogans[Math.floor(Math.random() * slogans.length)];
</script>

<div class="header rounded-md my-4 text-center w-11/12 mx-auto p-4 shadow-xl relative">
    <img class="offprint-logo" src="assets/images/logo.png" alt="offprint" />
    <h2>{rotatingSlogan}</h2>
    <h3 class="absolute top-0 right-0 text-white p-2">ver. alpha-0.8.0</h3>
</div>

<div class="flex flex-row container mx-auto">
    <div class="w-1/2">
        <h2 style="margin-bottom: 0">Welcome to Offprint!</h2>
        <hr style="margin-top: 0" />
        <p>Hey there!</p>
        <p>
            Say hello to Offprint&mdash;a website built from the ground up to foster an engaging, friendly, and
            open community of writers and readers.
        </p>
        <p>
            The site is currently under heavy active development, so there's a lot of stuff still missing or
            even completely broken. Want to sign up?
            <a href="https://forms.gle/VBHoKhneJzg34GSA8">Click here</a> to add your name to the list!
        </p>
        <p>
            If you want to contribute&mdash;or just want to give us a star&mdash;check out our
            <a href="https://github.com/Figments/pulp-fiction">GitHub</a> repository. We also have a community
            <a href="https://discord.gg/9cnSwfn">Discord server</a> if you want to chat about the site, or
            writing in general. And if you want to throw some money our way, to help fund Offprint's
            development,
            <a href="https://www.patreon.com/offprintstudios?fan_landing=true">we have a Patreon</a>!
        </p>
        <p>With all that said, see you guys on the flip side!</p>
        <p style="text-align: right">&mdash;Offprint Studios</p>
    </div>
    <div class="w-1/2 text-center">
        <img class="beatriz" src="assets/images/Beatriz.png" alt="Beatriz">
    </div>
</div>

<style lang="less">
    div.header {
      background: var(--accent);
      h2 {
        color: whitesmoke;
        text-transform: lowercase;
        font-variant: small-caps;
        letter-spacing: 4px;
        font-size: 24px;
      }
      img.offprint-logo {
        max-width: 20rem;
        margin: 0 auto;
      }
    }

    h2 {
        font-size: 36px;
    }

    img.beatriz {
        max-height: 650px;
        display: inline;
    }
</style>
