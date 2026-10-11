'use strict';

(() => {
  /* ---------- Mobile navigation ---------- */
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  function setMenu(open) {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', event => {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.addEventListener('click', event => {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !menuButton.contains(event.target)) {
        setMenu(false);
      }
    });

    window.matchMedia('(min-width: 861px)').addEventListener('change', event => {
      if (event.matches) setMenu(false);
    });
  }

  /* ---------- Quote form (DEMO ONLY: nothing is sent or stored) ---------- */
  const quoteForm = document.getElementById('quote-form');
  const formStatus = document.getElementById('form-status');

  if (quoteForm && formStatus) {
    const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const rules = {
      'full-name': value => {
        if (!value) return 'Enter your name.';
        return value.length < 2 ? 'Your name needs at least 2 characters.' : '';
      },
      'email': value => {
        if (!value) return 'Enter your work email.';
        return EMAIL_PATTERN.test(value) ? '' : 'Enter a valid email, like name@company.com.';
      },
      'service': value => (value ? '' : 'Choose a service.'),
      'message': value => {
        if (!value) return 'Describe what you need.';
        return value.length < 10 ? 'Add a little more detail (at least 10 characters).' : '';
      }
    };

    const fields = Object.keys(rules)
      .map(id => document.getElementById(id))
      .filter(Boolean);

    function validateField(field) {
      const message = rules[field.id](field.value.trim());
      const errorEl = document.getElementById(field.id + '-error');
      if (errorEl) errorEl.textContent = message;
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      field.closest('.field').classList.toggle('has-error', Boolean(message));
      return !message;
    }

    function showStatus(text, isError) {
      formStatus.textContent = text;
      formStatus.classList.toggle('is-error', isError);
    }

    fields.forEach(field => {
      field.addEventListener('blur', () => {
        if (field.value.trim() !== '' || field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
      const revalidate = () => {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      };
      field.addEventListener('input', revalidate);
      field.addEventListener('change', revalidate);
    });

    quoteForm.addEventListener('submit', event => {
      event.preventDefault();
      showStatus('', false);

      const invalid = fields.filter(field => !validateField(field));
      if (invalid.length) {
        showStatus(
          invalid.length === 1
            ? 'Fix 1 field below to continue.'
            : 'Fix ' + invalid.length + ' fields below to continue.',
          true
        );
        invalid[0].focus();
        return;
      }

      showStatus('Demo check passed. No inquiry was sent, saved or shared. Connect a real form service before using this form for a client.', false);
      quoteForm.reset();
      fields.forEach(field => {
        field.setAttribute('aria-invalid', 'false');
        field.closest('.field').classList.remove('has-error');
      });
    });

    /* Service cards preselect the matching option in the form */
    const serviceSelect = document.getElementById('service');
    document.querySelectorAll('[data-service]').forEach(link => {
      link.addEventListener('click', () => {
        if (serviceSelect) {
          serviceSelect.value = link.dataset.service;
          if (serviceSelect.value !== link.dataset.service) serviceSelect.value = '';
          validateIfFlagged(serviceSelect);
        }
      });
    });

    function validateIfFlagged(field) {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    }
  }

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
