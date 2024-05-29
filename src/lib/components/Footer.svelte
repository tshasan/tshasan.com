<script>
  import { Github } from 'lucide-svelte';
  import { Linkedin } from 'lucide-svelte';
  import { Mail } from 'lucide-svelte';
  import { CreativeCommons } from 'lucide-svelte';
</script>

<footer class="footer p-6 bg-neutral text-neutral-content">
  <div
    class="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
  >
    <div class="flex items-center space-x-2">
      <h4 class="text-xl font-semibold">tshasan.com</h4>
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        class="relative flex items-center space-x-1 hover:text-primary"
        data-tip="Creative Commons Attribution 4.0 International License"
        aria-label="Creative Commons Attribution 4.0 International License"
      >
        <CreativeCommons class="w-5 h-5" />
        <span>CC BY 4.0</span>
      </a>
    </div>
    <div class="flex space-x-4">
      <a href="https://github.com/tshasan" aria-label="Visit my GitHub Profile">
        <Github class="w-6 h-6 hover:text-primary" />
      </a>
      <a
        href="https://linkedin.com/in/taimurhasan1"
        aria-label="Visit my LinkedIn Profile"
      >
        <Linkedin class="w-6 h-6 hover:text-primary" />
      </a>
      <a
        href="mailto:work@tshasan.com"
        aria-label="Send me an email at work@tshasan.com"
      >
        <Mail class="w-6 h-6 hover:text-primary" />
      </a>
    </div>
  </div>
</footer>
