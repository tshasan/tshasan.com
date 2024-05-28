<script lang="ts">
  import { Github, Linkedin, Mail } from 'lucide-svelte';
  import ProfilePicture from '$lib/assets/pfp.webp';

  let zoom = false;
  let xRotation = 0;
  let yRotation = 0;

  function enterRotate3D(e: MouseEvent) {
    zoom = true;
    const img = e.target as HTMLDivElement;
    yRotation = 13 * ((e.offsetX - img.clientHeight / 2) / img.clientWidth);
    xRotation = -13 * ((e.offsetY - img.clientWidth / 2) / img.clientHeight);
  }

  function leaveRotate3D() {
    zoom = false;
    yRotation = 0;
    xRotation = 0;
  }
</script>

<div class="bg-base-200 py-10">
  <div class="container mx-auto px-4">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-base-content mb-4">About Me</h1>
    </div>
    <div class="bg-neutral shadow-xl rounded-lg p-8 flex flex-col md:flex-row items-center">
      <div class="md:w-1/3 mb-6 md:mb-0 flex justify-center">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
          class="tooltip tooltip-accent img-container" 
          data-tip="I know I look good" 
          on:mousemove={enterRotate3D}
          on:mouseleave={leaveRotate3D}
        >
          <div
            class="avatar img"
            style="transform: perspective(500px) {zoom ? 'scale(1.05)' : ''} rotateX({xRotation}deg) rotateY({yRotation}deg)"
          >
            <div class="w-32 md:w-48 rounded-full overflow-hidden">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img src={ProfilePicture} alt="Profile Picture" class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-2/3 md:pl-8 text-center md:text-left">
        <p class="text-2xl text-neutral-content mb-4">
          I'm a 21-year-old software engineer based in Los Angeles. I create innovative and intuitive applications using modern technologies. 
        </p>
        <p class="text-sm text-neutral-content mb-4">
          My goal is to develop optimal applications that leverage AI.
          In my free time, I enjoy exploring the latest advancements in AI, contributing to open-source projects, and participating in local tech meetups. My journey in software engineering is driven by a passion for problem-solving and a commitment to continuous learning.
        </p>
        <div class="divider divider-accent text-neutral-content">Socials</div>
        <div class="flex justify-center space-x-8 mt-4 md:mt-0">
          <a href="https://github.com/tshasan" class="tooltip tooltip-accent" data-tip="GitHub.com/tshasan" aria-label="Visit my GitHub Profile">
            <Github class="w-10 h-10 text-neutral-content hover:text-primary transition-transform transform hover:scale-125" />
          </a>
          <a href="https://linkedin.com/in/tshasan" class="tooltip tooltip-accent" data-tip="linkedin.com/in/taimurhasan1" aria-label="Visit my LinkedIn Profile">
            <Linkedin class="w-10 h-10 text-neutral-content hover:text-primary transition-transform transform hover:scale-125" />
          </a>
          <a href="mailto:work@tshasan.com" class="tooltip tooltip-accent" data-tip="work@tshasan.com" aria-label="Send me an email at work@tshasan.com">
            <Mail class="w-10 h-10 text-neutral-content hover:text-primary transition-transform transform hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(4px);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  .img-container {
    animation: float 6s ease-in-out infinite;
  }
</style>
