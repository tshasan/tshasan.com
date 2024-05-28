<script lang="ts">
  import { Github, Linkedin, Mail } from 'lucide-svelte';
  import ProfilePicture from '$lib/assets/pfp.webp';

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
    <h1 class="text-5xl font-bold text-base-content mb-8 text-center">About Me</h1>
    <div class="card bg-neutral shadow-xl rounded-lg p-10 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/3 mb-6 md:mb-0 flex justify-center">
        <div class="tooltip tooltip-accent img-container" data-tip="I know I look good">
          <div class="avatar img" role="presentation"
            style="transform: perspective(500px) {zoom ? 'scale(1.15)' : ''} rotateX({xRotation}deg) rotateY({yRotation}deg)"
            on:mousemove={enterRotate3D}
            on:mouseleave={leaveRotate3D}
          >
            <div class="w-36 md:w-52 rounded-full overflow-hidden">
              <img src={ProfilePicture} class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      <div class="md:w-2/3 md:pl-12 text-center md:text-left">
        <p class="text-2xl text-neutral-content mb-6">
          I'm a 21-year-old software engineer based in Los Angeles. I specialize in creating innovative and user-friendly applications using modern technologies. 
        </p>
        <p class="text-lg text-neutral-content mb-6">
          Driven by a passion for problem-solving and continuous learning, I aim to develop applications that enhance user experience and utilize AI effectively. Outside of work, I explore new AI advancements, contribute to open-source projects, and engage with the local tech community.
        </p>
        <div class="divider divider-accent text-neutral-content">Connect with me</div>
        <div class="flex justify-center space-x-12 mt-6">
          <a href="https://github.com/tshasan" class="tooltip tooltip-accent" data-tip="GitHub.com/tshasan" aria-label="Visit my GitHub Profile">
            <Github class="w-12 h-12 text-neutral-content hover:text-primary transition-transform transform hover:scale-150" />
          </a>
          <a href="https://linkedin.com/in/tshasan" class="tooltip tooltip-accent" data-tip="linkedin.com/in/taimurhasan1" aria-label="Visit my LinkedIn Profile">
            <Linkedin class="w-12 h-12 text-neutral-content hover:text-primary transition-transform transform hover:scale-150" />
          </a>
          <a href="mailto:work@tshasan.com" class="tooltip tooltip-accent" data-tip="work@tshasan.com" aria-label="Send me an email at work@tshasan.com">
            <Mail class="w-12 h-12 text-neutral-content hover:text-primary transition-transform transform hover:scale-150" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0%, 100% {
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
