import Icone from "../components/Icones";
import Foto from "../components/Foto";
import {
  site, menu, hero, encontros, oficinas, chamada, acolhimento,
  apoio, transparencia, contato, rodape, mensagens, linkWhatsApp,
} from "../data/conteudo";

const Wpp = ({ mensagem, classe = "btn btn-amarelo", children }) => (
  <a className={classe} href={linkWhatsApp(mensagem)} target="_blank" rel="noopener noreferrer">
    <Icone nome="whatsapp" tamanho={20} />
    {children}
  </a>
);

export default function Pagina() {
  return (
    <>
      <header className="topo">
        <div className="wrap topo-in">
          <a className="marca" href="#inicio" aria-label={site.nome}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" width="44" height="44" />
            <span>{site.nome}</span>
          </a>
          <nav className="menu" aria-label="Principal">
            {menu.map((m) => (
              <a key={m.href} href={m.href}>{m.rotulo}</a>
            ))}
          </nav>
          <Wpp mensagem={mensagens.apoiador} classe="btn btn-azul btn-pequeno">{hero.botaoPrincipal}</Wpp>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>{hero.titulo}</h1>
              <p className="lead">{hero.texto}</p>
              <p className="resumo">{hero.resumo}</p>
              <div className="acoes">
                <Wpp mensagem={mensagens.apoiador}>{hero.botaoPrincipal}</Wpp>
                <a className="btn btn-contorno" href="#oficinas">{hero.botaoSecundario}</a>
              </div>
            </div>
            <div className="hero-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Logo do Projeto PAI — Programa de Apadrinhamento Infantil" />
            </div>
          </div>
        </section>

        {/* NOSSOS ENCONTROS */}
        <section className="encontros" aria-labelledby="t-encontros">
          <div className="wrap">
            <h2 id="t-encontros">{encontros.titulo}</h2>
            <ul className="enc-grid">
              {encontros.itens.map((i) => (
                <li key={i.rotulo}>
                  <span className="enc-ico"><Icone nome={i.icone} /></span>
                  <div>
                    <small>{i.rotulo}</small>
                    <strong>{i.valor}</strong>
                  </div>
                </li>
              ))}
            </ul>
            <div className="enc-rodape">
              <p>{encontros.nota}</p>
              <Wpp mensagem={mensagens.encontros} classe="btn btn-azul">{encontros.botao}</Wpp>
            </div>
          </div>
        </section>

        {/* OFICINAS */}
        <section id="oficinas" className="secao">
          <div className="wrap">
            <div className="cabeca">
              <h2>{oficinas.titulo}</h2>
              <p>{oficinas.texto}</p>
            </div>
            <div className="cards4">
              {oficinas.cards.map((c) => (
                <article key={c.titulo} className={`card cor-${c.cor}`}>
                  <Foto src={c.foto} alt={`Atividade: ${c.titulo}`} icone={c.icone} cor={c.cor} proporcao="16 / 10" />
                  <div className="card-corpo">
                    <h3>{c.titulo}</h3>
                    <p>{c.descricao}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CHAMADA DISCRETA */}
        <section className="chamada" aria-labelledby="t-chamada">
          <div className="wrap chamada-in">
            <div>
              <h2 id="t-chamada">{chamada.titulo}</h2>
              <p>{chamada.texto}</p>
            </div>
            <div className="acoes">
              <Wpp mensagem={mensagens.apoiador} classe="btn btn-azul">{chamada.botaoPrincipal}</Wpp>
              <a className="btn btn-contorno-azul" href="#oficinas">{chamada.botaoSecundario}</a>
            </div>
          </div>
        </section>

        {/* ACOLHIMENTO */}
        <section id="acolhimento" className="secao">
          <div className="wrap acolh">
            <div className="cabeca esq">
              <h2>{acolhimento.titulo}</h2>
              <p>{acolhimento.texto}</p>
            </div>
            <div className="cards2">
              {acolhimento.destaques.map((d) => (
                <article key={d.titulo} className={`card cor-${d.cor}`}>
                  <Foto src={d.foto} alt={d.titulo} icone={d.icone} cor={d.cor} proporcao="4 / 3" />
                  <div className="card-corpo">
                    <h3>{d.titulo}</h3>
                    <p>{d.descricao}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APOIE */}
        <section id="apoie" className="apoie" aria-labelledby="t-apoie">
          <div className="wrap">
            <div className="apoie-topo">
              <div>
                <h2 id="t-apoie">{apoio.titulo}</h2>
                {apoio.texto.map((t) => (<p key={t}>{t}</p>))}
              </div>
              <Foto src={apoio.foto} alt="Atividade do Projeto PAI" icone="coracao" cor="amarelo" proporcao="5 / 4" />
            </div>
            <div className="formas">
              {apoio.formas.map((f) => (
                <article key={f.titulo} className="forma">
                  <span className="forma-ico"><Icone nome={f.icone} /></span>
                  <h3>{f.titulo}</h3>
                  <p>{f.descricao}</p>
                  <Wpp mensagem={mensagens[f.mensagem]}>{f.botao}</Wpp>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARÊNCIA */}
        <section id="transparencia" className="secao">
          <div className="wrap">
            <div className="cabeca">
              <h2>{transparencia.titulo}</h2>
              <p>{transparencia.texto}</p>
            </div>
            <ul className="transp">
              {transparencia.itens.map((i) => (
                <li key={i}><strong>{i}</strong><span>Em breve</span></li>
              ))}
            </ul>
            <p className="aviso">{transparencia.aviso}</p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="contato">
          <div className="wrap contato-grid">
            <div>
              <h2>{contato.titulo}</h2>
              <p>{contato.texto}</p>
              <Wpp mensagem={mensagens.contato} classe="btn btn-azul">{contato.botao}</Wpp>
            </div>
            <div className="contato-lista">
              <p>{contato.intro}</p>
              <ul>
                {contato.itens.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="wrap rodape-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" width="56" height="56" />
          <p>{rodape.texto}</p>
        </div>
      </footer>
    </>
  );
}
