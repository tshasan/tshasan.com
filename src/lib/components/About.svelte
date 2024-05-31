<script lang="ts">
  import { Github, Linkedin, Mail } from 'lucide-svelte';
  import ProfilePicture from '$lib/assets/pfp.webp';
  import {
    aboutDescription,
    githubUser,
    linkedinUserId,
    email,
    avatarHover,
  } from '$lib/config';

  let zoom = false;
  let xRotation = 0;
  let yRotation = 0;

  function enterRotate3D(e: MouseEvent) {
    zoom = true;
    const img = e.target as HTMLDivElement;
    yRotation = 20 * ((e.offsetX - img.clientHeight / 2) / img.clientWidth);
    xRotation = -20 * ((e.offsetY - img.clientWidth / 2) / img.clientHeight);
  }

  function leaveRotate3D() {
    zoom = false;
    yRotation = 0;
    xRotation = 0;
  }
</script>

<div class="bg-base-200 py-10">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-base-content mb-8 text-center">
      About Me
    </h1>
    <div
      class="card bg-neutral shadow-xl p-10 flex flex-col md:flex-row items-center justify-between max-w-full aspect-w-16 aspect-h-9"
    >
      <div class="md:w-1/3 mb-6 md:mb-0 flex justify-center">
        <div
          class="tooltip tooltip-accent img-container"
          data-tip={avatarHover}
        >
          <div
            class="avatar img"
            role="presentation"
            style="transform: perspective(500px) {zoom
              ? 'scale(1.15)'
              : ''} rotateX({xRotation}deg) rotateY({yRotation}deg)"
            on:mousemove={enterRotate3D}
            on:mouseleave={leaveRotate3D}
          >
            <div class="w-36 md:w-52 rounded-full overflow-hidden">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img
                src={ProfilePicture}
                alt="Profile Picture"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-2/3 md:pl-12 text-center md:text-left">
        <p class="text-2xl text-neutral-content mb-6">
          {aboutDescription}
        </p>
        <div class="divider divider-accent text-neutral-content">
          Connect with me
        </div>
        <div class="flex justify-center space-x-12 mt-6">
          <a
            href="https://github.com/{githubUser}"
            class="tooltip tooltip-accent"
            data-tip="GitHub.com/{githubUser}"
            aria-label="Visit my GitHub Profile"
          >
            <Github
              class="w-12 h-12 text-neutral-content hover:text-primary transition-transform transform hover:scale-150"
            />
          </a>
          <a
            href="https://linkedin.com/in/{linkedinUserId}"
            class="tooltip tooltip-accent"
            data-tip="linkedin.com/in/{linkedinUserId}"
            aria-label="Visit my LinkedIn Profile"
          >
            <Linkedin
              class="w-12 h-12 text-neutral-content hover:text-primary transition-transform transform hover:scale-150"
            />
          </a>
          <a
            href="mailto:{email}"
            class="tooltip tooltip-accent"
            data-tip={email}
            aria-label="Send me an email at {email}"
          >
            <Mail
              class="w-12 h-12 text-neutral-content hover:text-primary transition-transform transform hover:scale-150"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .img-container {
    animation: float 6s ease-in-out infinite;
  }
</style>
