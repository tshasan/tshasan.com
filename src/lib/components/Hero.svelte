<div class="hero bg-base-200 relative py-10">
  <div class="hero-content text-center relative max-w-full px-4">
    <div class="relative z-10">
      <h1
        class="text-5xl md:text-7xl lg:text-9xl text-base-content font-bold leading-tight"
      >
        Hi, I'm <br />
        <span class="name-animation">Taimur Hasan</span>
      </h1>
    </div>
  </div>
</div>

<style>
  .hero-content {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }

  .name-animation {
    display: inline-block;
    overflow: hidden;
    border-right: 0.15em solid var(--tw-prose-invert-underline);
    white-space: nowrap;
    animation:
      typing 3.5s steps(40, end),
      blink-caret 0.5s step-end infinite,
      blink-caret-end 2s forwards 6s;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--tw-prose-invert-underline);
    }
  }

  @keyframes blink-caret-end {
    to {
      border-color: transparent;
    }
  }
</style>
