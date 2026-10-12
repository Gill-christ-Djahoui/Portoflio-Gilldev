declare global { interface Window { plausible?: (e: string, o?: { props: Record<string, string> }) => void } }

const track = (name: string, props: Record<string, string> = {}) => {
  try { window.plausible?.(name, { props }); } catch { /* suivi indisponible */ }
};

// Apparition au scroll (le contenu reste visible sans JS / animations)
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => io.observe(el));
  // Filet de sécurité : tout devient visible si l'observateur ne se déclenche pas
  setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 2500);
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// Menu burger
const burger = document.getElementById('burger');
const panel = document.getElementById('mobile-panel');
const setMenu = (open: boolean) => {
  panel?.classList.toggle('open', open);
  burger?.setAttribute('aria-expanded', String(open));
  burger?.querySelector('.icon-open')?.classList.toggle('hidden', open);
  burger?.querySelector('.icon-close')?.classList.toggle('hidden', !open);
};
burger?.addEventListener('click', () => setMenu(!panel?.classList.contains('open')));
panel?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Suivi des boutons
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (el) track(el.dataset.track!, { emplacement: el.dataset.where ?? '' });
});

// Avant / après
const ba = document.getElementById('ba');
const range = document.getElementById('ba-range') as HTMLInputElement | null;
range?.addEventListener('input', () => ba?.style.setProperty('--pos', `${range.value}%`));

// Pré-sélection du formulaire
const selAct = document.getElementById('f-act') as HTMLSelectElement | null;
const selBesoin = document.getElementById('f-besoin') as HTMLSelectElement | null;
const params = new URLSearchParams(location.search);
const setSelect = (sel: HTMLSelectElement | null, v: string | null) => {
  if (sel && v && [...sel.options].some((o) => o.value === v)) sel.value = v;
};
setSelect(selAct, params.get('activite'));
setSelect(selBesoin, params.get('besoin'));

const campaign = params.get('c') ?? '';
const src = document.getElementById('f-source') as HTMLInputElement | null;
if (src) src.value = campaign ? `campagne:${campaign}` : (document.referrer || 'direct');
if (campaign) track('Campagne', { c: campaign });

// "C'est mon cas" / offres : pas de rechargement, on pré-remplit puis on défile
document.querySelectorAll<HTMLAnchorElement>('a[data-activite], a[data-besoin]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    setSelect(selAct, a.dataset.activite ?? null);
    setSelect(selBesoin, a.dataset.besoin ?? null);
    document.getElementById('formulaire')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
});

// Champ "lien de votre site"
const urlWrap = document.getElementById('f-url-wrap');
document.querySelectorAll<HTMLInputElement>('input[name="site_existant"]').forEach((r) =>
  r.addEventListener('change', () => urlWrap?.classList.toggle('hidden', r.value !== 'oui' || !r.checked)));

// Envoi du formulaire (Web3Forms, honeypot "botcheck")
const form = document.getElementById('formulaire') as HTMLFormElement | null;
const status = document.getElementById('f-status');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const prenom = (form.elements.namedItem('prenom') as HTMLInputElement).value.trim();
  btn.disabled = true; btn.style.opacity = '.7';
  if (status) { status.textContent = 'Envoi en cours…'; status.className = 'mt-4 text-center font-semibold text-[var(--color-muted)]'; }
  try {
    const res = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || 'Erreur');
    track('Formulaire-envoye', { activite: (form.elements.namedItem('activite') as HTMLSelectElement).value });
    form.reset();
    if (status) { status.textContent = `Merci ${prenom} ! Votre demande est bien arrivée. Je vous réponds sous 24h, par email ou sur WhatsApp.`; status.className = 'mt-4 text-center font-semibold text-[var(--color-accent-light)]'; }
  } catch {
    if (status) { status.textContent = 'Oups, l\'envoi a échoué. Écrivez-moi directement sur WhatsApp ou par email.'; status.className = 'mt-4 text-center font-semibold text-[var(--color-cross)]'; }
  } finally { btn.disabled = false; btn.style.opacity = ''; }
});

export {};
