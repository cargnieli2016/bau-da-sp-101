import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Target, Eye, Gem, Truck, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import brandLogo from "@/assets/logo-novo1.png";
import hero from "@/assets/20261027_122244.jpg";
import img3 from "@/assets/20261027_122250.jpg";
import pano from "@/assets/baus.png";
import bau from "@/assets/bau.png";
import p1 from "@/assets/baus-1.png";
import p3 from "@/assets/baus-3.png";

const PHONE = "(19) 9 8801-0659";
const PHONE_ALT = "(19) 9 9952-9009";
const WA = "https://wa.me/5519988010659";
const WA_ALT = "https://wa.me/5519999529009";
const ADDRESS = "Rod. Jorn. Francisco Aguirre Proença, km 16+700, 2800, Monte Mor - SP, 13190-000";
const MAP = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS + ", SP")}&output=embed`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CARLÃO | Baús e Caminhões" },
      { name: "description", content: "CARLÃO Baús e Caminhões: compra, venda, troca e consignação de baús seminuevos e carrocerias. Rod. Jorn. Francisco Aguirre Proença, km 16+700, 2800, Monte Mor - SP, 13190-000." },
      { property: "og:title", content: "CARLÃO | Baús e Caminhões" },
      { property: "og:description", content: "Baús usados para caminhões com ótimo preço e atendimento. Ligue (19) 9 8801-0659 ou (19) 9 9952-9009." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: Target, t: "Missão", d: "Oferecer baús usados de qualidade e durabilidade, com atendimento honesto e preço justo para cada cliente." },
  { icon: Eye, t: "Visão", d: "Ser referência regional na compra e venda de baús usados, reconhecida pela confiança e pela qualidade." },
  { icon: Gem, t: "Valores", d: "Ética, transparência, compromisso com o cliente e excelência no atendimento." },
];

const reviews = [
  { n: "Carlos", d: "Ótima variedade de baús e preço justo. Atendimento rápido e sem enrolação." },
  { n: "Marcos", d: "Vendi meu baú usado com facilidade, pagamento na hora. Recomendo." },
  { n: "Renata", d: "Encontrei o baú que precisava para o meu caminhão. Tudo conforme combinado." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container-site flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#inicio" className="shrink-0"><img src={brandLogo} alt="CARLÃO Baús e Caminhões" className="h-12 w-auto md:h-14" /></a>
            <img src={bau} alt="Baús e caminhões" className="hidden h-12 w-12 rounded-md object-cover shadow-sm md:block" />
          </div>
          <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
            <a href="#inicio" className="hover:text-primary">Início</a>
            <a href="#sobre" className="hover:text-primary">Sobre nós</a>
            <a href="#produtos" className="hover:text-primary">Produtos</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-primary hidden sm:inline-flex"><WhatsAppIcon className="h-4 w-4" /> WhatsApp</a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-[80vh] items-center">
        <img src={hero} alt="Pátio com baús usados" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-site relative py-24 text-hero-foreground">
          <p className="mt-3 text-xl font-semibold uppercase tracking-[0.15em] text-highlight">Baús e Caminhões</p>
          <p className="mt-6 max-w-xl text-lg opacity-90">Os melhores baús seminovos para seu caminhão você encontra aqui.</p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">Fale conosco</a>
            <a href="#sobre" className="btn-outline-light">Saiba mais</a>
          </div>
        </div>
      </section>

      <section id="sobre" className="container-site grid gap-10 pt-12 pb-24 md:grid-cols-3 md:gap-12 md:pt-16">
        {pillars.map(({ icon: Icon, t, d }) => (
          <div key={t} className="relative rounded-xl border-2 border-primary bg-card p-8 pt-12 text-center">
            <div className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background text-primary"><Icon className="h-6 w-6" /></div>
            <h3 className="font-display text-2xl text-primary">{t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="container-site pb-24">
        <div className="band rounded-2xl px-8 py-14 text-center text-primary-foreground">
          <h2 className="font-display text-3xl uppercase md:text-4xl">Trabalhamos com</h2>
          <p className="mx-auto mt-4 max-w-3xl opacity-90">Compra, venda, troca e consignação de baús seminovos e carrocerias para seu caminhão.</p>
          <p className="mt-3 font-semibold tracking-wide text-highlight">COMPRA · VENDA · TROCA · CONSIGNAÇÃO</p>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-light mt-8">Entre em contato</a>
        </div>
      </section>

      <section id="produtos" className="container-site pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={img3} alt="Baú usado à venda" className="h-80 w-full rounded-xl object-cover shadow-elevated" />
          <div>
            <h2 className="section-title">Conheça nossos produtos</h2>
            <p className="mt-6 text-muted-foreground">Baús usados de várias medidas, em excelente estado e com ótimos preços. Carrocerias, baús Sayder e baús de alumínio.</p>
            <ul className="mt-6 space-y-3">
              {["Carrocerias", "Baús Sayder", "Baús alumínio", "Para Bongo, HR, Iveco, Sprinter, Master, 3/4, toco, truck e bitruck"].map((i) => (
                <li key={i} className="flex gap-3"><Truck className="h-5 w-5 shrink-0 text-primary" />{i}</li>
              ))}
            </ul>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary mt-8">Consultar estoque</a>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[pano, p1, p3].map((p, i) => (
            <img key={i} src={p} alt="Pátio de baús usados" className="h-48 w-full rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container-site">
          <h2 className="text-center font-display text-3xl">Veja o que dizem sobre o <span className="rounded bg-primary px-2 text-primary-foreground">CARLÃO</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.n} className="rounded-xl border-2 border-primary bg-card p-6">
                <p className="font-semibold">{r.n}</p>
                <div className="my-2 flex gap-1 text-highlight">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-sm text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="container-site grid gap-8 py-24 md:grid-cols-2">
        <div className="band rounded-2xl p-10 text-primary-foreground">
          <h2 className="font-display text-3xl uppercase">MAIORES INFORMAÇÕES</h2>
          <p className="mt-3 opacity-90">Ligue ou chame no WhatsApp para comprar, vender, trocar ou consignar seu baú.</p>
          <div className="mt-8 space-y-5">
            <a href={WA_ALT} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg"><WhatsAppIcon className="h-5 w-5" />{PHONE_ALT} <span className="text-sm opacity-80">Carlos</span></a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg"><WhatsAppIcon className="h-5 w-5" />{PHONE} <span className="text-sm opacity-80">Carlos</span></a>
            <p className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0" />{ADDRESS}</p>
          </div>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-light mt-10">Chamar no WhatsApp</a>
        </div>
        <iframe title="Mapa" src={MAP} className="h-96 w-full rounded-2xl border-0 md:h-full" loading="lazy" />
      </section>

      <footer className="band text-primary-foreground">
        <div className="container-site grid gap-8 py-12 md:grid-cols-3">
          <img src={brandLogo} alt="CARLÃO Baús e Caminhões" className="h-24 w-auto rounded-lg bg-background p-2" />
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Contato</p>
            <p>{PHONE_ALT}</p>
            <p>{PHONE}</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Localização</p>
            <p>{ADDRESS}</p>
          </div>
        </div>
        <p className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-80">© {new Date().getFullYear()} CARLÃO Baús e Caminhões. Todos os direitos reservados.</p>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated"><WhatsAppIcon className="h-7 w-7" /></a>
    </div>
  );
}
