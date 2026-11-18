
import type { ReactNode } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Dumbbell,
  BookOpen,
  Trophy,
  ChevronDown,
  User,
  Heart,
  Terminal,
  Users,
  Lightbulb
} from "lucide-react";

// TECNOLOGIAS
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Git",
  "GitHub",
  "Marketing"
];

// EXPERIÊNCIAS PROFISSIONAIS
const experiences = [
  {
    title: "Tozzo Bebidas",
    role: "Experiência profissional atual",
    description:
      "Atualmente trabalho na Tozzo Bebidas, desenvolvendo responsabilidade, organização, comprometimento e habilidades de trabalho em equipe."
  },
  {
    title: "Construção Civil",
    role: "Experiência profissional anterior",
    description:
      "Trabalhei como pedreiro, experiência que me ensinou sobre dedicação, disciplina, esforço, responsabilidade e colaboração."
  }
];

// HABILIDADES PESSOAIS
const personalSkills = [
  "Trabalho em equipe",
  "Aprendizado rápido",
  "Responsabilidade",
  "Dedicação",
  "Comunicação",
  "Organização"
];

// COMPONENTE PRINCIPAL
function App() {
  return (
    <main>

      {/* NAVEGAÇÃO */}
      <nav className="navbar">

        <a href="#home" className="brand">
          dev<span>.</span>portfolio
        </a>

        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#formacao">Formação</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>

        <a href="#contato" className="nav-button">
          Vamos conversar
          <ArrowUpRight size={16} />
        </a>

      </nav>

      {/* INÍCIO */}
      <section id="home" className="hero container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="available">
            <span className="green-dot" />
            EM CONSTANTE APRENDIZADO
          </div>

          <p className="eyebrow">
            OLÁ, MEU NOME É
          </p>

          <h1>
            Desenvolvendo meu
            <span> futuro na tecnologia.</span>
          </h1>

          <p className="hero-description">
            Tenho 17 anos, sou estudante de Desenvolvimento
            de Sistemas e apaixonado por tecnologia.
            Acredito que dedicação, criatividade e trabalho
            em equipe podem transformar ideias em realidade.
          </p>

          <div className="hero-actions">

            <a href="#sobre" className="primary-button">
              Conheça minha história
              <ArrowUpRight size={18} />
            </a>

            <a href="#contato" className="secondary-button">
              <Mail size={18} />
              Entre em contato
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={19} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <User size={19} />
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* VISUAL DE CÓDIGO */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="visual-glow" />

          <div className="code-window">

            <div className="window-header">
              <span />
              <span />
              <span />
              <small>sobre-mim.ts</small>
            </div>

            <pre>
              <code>
                <span className="purple">const</span>{" "}
                desenvolvedor = {"{"}
                {"\n"}
                {"  "}idade: <span className="orange">17</span>,
                {"\n"}
                {"  "}foco: <span className="green">"Tecnologia"</span>,
                {"\n"}
                {"  "}equipe: <span className="orange">true</span>,
                {"\n"}
                {"  "}dedicação: <span className="orange">true</span>,
                {"\n"}
                {"  "}aprendizado:{" "}
                <span className="green">"constante"</span>
                {"\n"}
                {"}"};
              </code>
            </pre>

            <div className="terminal-footer">
              <span className="green-dot" />
              Sempre evoluindo...
            </div>

          </div>

          <div className="floating-icon">
            <Terminal size={28} />
          </div>

        </motion.div>

        <a href="#sobre" className="scroll-down">
          <ChevronDown />
          ROLE PARA DESCOBRIR
        </a>

      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="section container">

        <SectionTitle
          number="01"
          title="Sobre mim"
        />

        <div className="about-grid">

          <div className="about-text">

            <p>
              Sou uma pessoa dedicada, comunicativa e com
              muita vontade de crescer profissionalmente.
            </p>

            <p>
              Minha trajetória profissional começou na
              construção civil, trabalhando como pedreiro.
              Atualmente trabalho na Tozzo Bebidas.
            </p>

            <p>
              Essas experiências me ensinaram a importância
              da responsabilidade, do esforço, da disciplina
              e principalmente do trabalho em equipe.
            </p>

            <p>
              Atualmente estudo Desenvolvimento de Sistemas
              no Colégio Suplicy, com conclusão prevista para
              2027. Também concluí um curso de Marketing em 2023.
            </p>

            <p>
              Meu objetivo é continuar aprendendo, desenvolver
              minhas habilidades e construir uma carreira
              na área de tecnologia.
            </p>

          </div>

          <div className="stats-grid">

            <Stat
              number="17"
              label="Anos de idade"
            />

            <Stat
              number="2027"
              label="Conclusão do curso"
            />

            <Stat
              number="2023"
              label="Curso de Marketing"
            />

            <Stat
              number="100%"
              label="Vontade de aprender"
            />

          </div>

        </div>

      </section>

      {/* EXPERIÊNCIA */}
      <section
        id="experiencia"
        className="section container"
      >

        <SectionTitle
          number="02"
          title="Experiência profissional"
        />

        <div className="timeline">

          {experiences.map((item, index) => (

            <motion.article
              className="timeline-card"
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >

              <div className="timeline-icon">
                <BriefcaseBusiness size={24} />
              </div>

              <div>

                <span className="card-label">
                  {item.role}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* FORMAÇÃO */}
      <section
        id="formacao"
        className="section container"
      >

        <SectionTitle
          number="03"
          title="Formação acadêmica"
        />

        <div className="education-grid">

          <article className="info-card">

            <GraduationCap size={30} />

            <span className="card-label">
              EM ANDAMENTO
            </span>

            <h3>Desenvolvimento de Sistemas</h3>

            <p>Colégio Suplicy</p>

            <p>Conclusão prevista: 2027</p>

          </article>

          <article className="info-card">

            <BookOpen size={30} />

            <span className="card-label">
              CONCLUÍDO
            </span>

            <h3>Marketing</h3>

            <p>Curso de Marketing</p>

            <p>Conclusão: 2023</p>

          </article>

        </div>

      </section>

      {/* HABILIDADES */}
      <section
        id="habilidades"
        className="section container"
      >

        <SectionTitle
          number="04"
          title="Habilidades e tecnologias"
        />

        <p className="section-description">
          Tecnologias e conhecimentos que fazem parte
          da minha jornada de aprendizado em desenvolvimento.
        </p>

        <div className="skills-grid">

          {skills.map((skill) => (

            <motion.div
              className="skill"
              key={skill}
              whileHover={{ y: -5 }}
            >

              <Code2 size={19} />

              {skill}

            </motion.div>

          ))}

        </div>

        <h3 className="subheading">
          Habilidades pessoais
        </h3>

        <div className="soft-skills">

          {personalSkills.map((skill) => (

            <span key={skill}>
              {skill}
            </span>

          ))}

        </div>

      </section>

      {/* INTERESSES */}
      <section className="section container">

        <SectionTitle
          number="05"
          title="Além da tecnologia"
        />

        <p className="section-description">
          No meu tempo livre gosto de praticar esportes,
          cuidar da saúde, aprender coisas novas e me divertir.
        </p>

        <div className="hobby-grid">

          <Hobby
            icon={<Trophy />}
            name="Futebol e futsal"
          />

          <Hobby
            icon={<Dumbbell />}
            name="Treinos e academia"
          />

          <Hobby
            icon={<BookOpen />}
            name="Leitura"
          />

          <Hobby
            icon={<Heart />}
            name="Basquete e vôlei"
          />

          <Hobby
            icon={<Users />}
            name="Trabalho em equipe"
          />

          <Hobby
            icon={<Lightbulb />}
            name="Novos aprendizados"
          />

        </div>

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="contact-section container"
      >

        <p className="eyebrow">
          VAMOS CONSTRUIR ALGO?
        </p>

        <h2>
          Meu próximo capítulo começa
          <span> agora.</span>
        </h2>

        <p>
          Estou aberto a aprender, conhecer novas oportunidades
          e desenvolver minhas habilidades.
        </p>

        <a
          href="mailto:SEUEMAIL@gmail.com"
          className="primary-button"
        >
          <Mail size={19} />
          Entre em contato
        </a>

      </section>

      {/* RODAPÉ */}
      <footer>

        <a href="#home" className="brand">
          dev<span>.</span>portfolio
        </a>

        <p>
          Desenvolvido com React, TypeScript e dedicação.
        </p>

        <p>
          © 2026 - Todos os direitos reservados.
        </p>

      </footer>

    </main>
  );
}

// COMPONENTE DOS TÍTULOS
function SectionTitle({
  number,
  title
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="section-title">

      <span>
        {number} / PORTFÓLIO
      </span>

      <h2>
        {title}<span>.</span>
      </h2>

    </div>
  );
}

// COMPONENTE DAS ESTATÍSTICAS
function Stat({
  number,
  label
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="stat">

      <strong>{number}</strong>

      <span>{label}</span>

    </div>
  );
}

// COMPONENTE DOS HOBBIES
function Hobby({
  icon,
  name
}: {
  icon: ReactNode;
  name: string;
}) {
  return (
    <div className="hobby">

      {icon}

      <span>{name}</span>

    </div>
  );
}

export default App;
