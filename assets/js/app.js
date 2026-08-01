(() => {
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = year;
  });

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-video-slot]').forEach((slot) => {
    const video = slot.querySelector('video');
    const status = slot.querySelector('[data-video-status]');
    if (!video) return;

    const markReady = () => {
      slot.classList.remove('has-error');
      slot.classList.add('is-ready');
      if (status) status.textContent = 'MP4 / READY';
    };

    const markError = () => {
      slot.classList.remove('is-ready');
      slot.classList.add('has-error');
      if (status) status.textContent = 'FILE OR CODEC ERROR';
    };

    video.addEventListener('loadedmetadata', markReady, { once: true });
    video.addEventListener('canplay', markReady, { once: true });
    video.addEventListener('error', markError);

    // src를 HEAD 요청으로 검사하지 않고 브라우저가 직접 로드하게 합니다.
    // 이 방식은 로컬 미리보기, Vercel, GitHub Pages 등에서 더 안정적입니다.
    video.load();
  });
})();
