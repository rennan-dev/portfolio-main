
import React from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useToast } from "./components/ui/use-toast";
import { Toaster } from "./components/ui/toaster";
import { Button } from "./components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram,
  Database,
  Code2,
  Server,
  Gamepad2,
  Heart,
  ArrowLeft, 
  ArrowRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const sliderOptions = {
  loop: true,
  mode: "snap",
  slides: { perView: 3, spacing: 10 }, // Padrão: 3 slides por vez
  breakpoints: {
    "(max-width: 1024px)": { slides: { perView: 2, spacing: 10 } }, // 2 projetos em telas médias
    "(max-width: 768px)": { slides: { perView: 1, spacing: 10 } },  // 1 projeto em telas pequenas
  },
};

const App = () => {
  const { toast } = useToast();
  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  const handlePrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };
  
  const handleNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  

  const handleContact = (type) => {
    let message = "";
    switch(type) {
      case "github":
        window.open("https://github.com/rennan-dev", "_blank");
        message = "Redirecionando para o GitHub";
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/rennan-alves-dev", "_blank");
        message = "Redirecionando para o LinkedIn";
        break;
      case "email":
        window.location.href = "mailto:rennandev7@gmail.com";
        message = "Abrindo seu cliente de email";
        break;
      case "instagram":
        window.open("https://www.instagram.com/rennan_alves11/", "_blank");
        message = "Redirecionando para o Instagram";
        break;
    }
    
    toast({
      title: "Conectando...",
      description: message,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Nav */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Rennan Alves
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">Sobre</a>
              <a href="#skills" className="nav-link">Habilidades</a>
              <a href="#projects" className="nav-link">Projetos</a>
              <a href="#contact" className="nav-link">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Desenvolvedor Backend
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformando ideias em soluções robustas e escaláveis
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => handleContact("github")}
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => handleContact("linkedin")}
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeIn}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center"> 
              <img className="w-64 rounded-lg shadow-xl" alt="Profile photo" src="/images/port.jpg" />
            </div>
            <div>
            <p className="text-gray-600 mb-4">
              Estudante de Engenharia de Software na UFAM, atualmente no 7º período. 
              Possuo experiência como estagiário em desenvolvimento de software, 
              onde trabalho com tecnologias modernas para criar soluções eficientes.
            </p>
            <p className="text-gray-600 mb-6">
              Além do desenvolvimento, sou entusiasta de jogos e ocasionalmente 
              desenvolvo projetos na Unity. Também gosto de praticar esportes ao ar livre 
              e assistir animes nas horas vagas.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Gamepad2 className="text-green-500" />
                <span>Game Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-green-500" />
                <span>Animes</span>
              </div>
            </div>
            </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  variants={fadeIn}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
                  <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <Database className="text-green-500 mb-4 h-8 w-8" />
                      <h3 className="text-xl font-semibold mb-4">Backend</h3>
                      <div className="flex flex-wrap">
                        <span className="skill-tag">C# (ASP.NET)</span>
                        <span className="skill-tag">PHP</span>
                        <span className="skill-tag">Node.js</span>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <Code2 className="text-green-500 mb-4 h-8 w-8" />
                      <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                      <div className="flex flex-wrap">
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Flutter</span>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <Server className="text-green-500 mb-4 h-8 w-8" />
                      <h3 className="text-xl font-semibold mb-4">Databases</h3>
                      <div className="flex flex-wrap">
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">Supabase</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
      

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="relative">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
              Projetos
            </h2>
            <div ref={sliderRef} className="keen-slider" {...sliderOptions} >
              
            {/* Projeto 1 */}
            <div className="keen-slider__slide flex justify-center">
              <div className="relative group overflow-hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] border-2 border-gray-800 shadow-md rounded-lg">
                <img
                  src="/images/projeto_um.png"
                  alt="Finanças Pessoais"
                  className="w-full h-full object-cover"
                />
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                  Finanças Pessoais
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-center mt-2">
                  Web app para controle financeiro com registro de compras no débito e crédito, e dashboard para monitoramento de gastos mensais.
                  Feito com PHP, React e MySQL
                  </p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href="https://financas.rennan-alves.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Acessar
                    </a>
                    <a
                      href="https://github.com/rennan-dev/financas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="keen-slider__slide flex justify-center">
              <div className="relative group overflow-hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] border-2 border-gray-800 shadow-md rounded-lg">
                <img
                  src="/images/projeto_dois.png"
                  alt="Calculadora de Horas"
                  className="w-full h-full object-cover"
                />
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                  Calculadora de Horas
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-center mt-2">
                  Ferramenta para calcular e gerenciar horas de forma eficiente, feita com JavaScript.
                  </p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href="https://calculadora-de-horas.rennan-alves.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Acessar
                    </a>
                    <a
                      href="https://github.com/rennan-dev/calculadora-de-horas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="keen-slider__slide flex justify-center">
              <div className="relative group overflow-hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] border-2 border-gray-800 shadow-md rounded-lg">
                <img
                  src="/images/projeto_tres.png" 
                  alt="Berserk Tasks"
                  className="w-full h-full object-cover"
                />
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                    Berserk Tasks
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-center mt-2">
                    To do list para gerenciamento de tarefas feito com React, PHP e MySQL.
                  </p>
                  <a
                    href="https://berserk-tasks.rennan-alves.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700"
                  >
                    Acessar
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="keen-slider__slide flex justify-center">
              <div className="relative group overflow-hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] border-2 border-gray-800 shadow-md rounded-lg">
                <img
                  src="/images/projeto_quatro.png"
                  alt="BookIt"
                  className="w-full h-full object-cover"
                />
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                  BookIt
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-center mt-2">
                  Gerenciamento de ambientes, feito com C#, React, MySQL e Docker.
                  </p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href="https://github.com/rennan-dev/BookIt/tree/Teste"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 5 */}
            <div className="keen-slider__slide flex justify-center">
              <div className="relative group overflow-hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] border-2 border-gray-800 shadow-md rounded-lg">
                <img
                  src="/images/projeto_cinco.png"
                  alt="Dama"
                  className="w-full h-full object-cover"
                />
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                    Dama
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-center mt-2">
                    Jogo da dama feito em JavaScript
                  </p>
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href="https://dama.rennan-alves.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Acessar
                    </a>
                    <a
                      href="https://github.com/rennan-dev/dama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto 6 */}
            <div className="keen-slider__slide flex justify-center">
              <div className="relative group overflow-hidden w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] border-2 border-gray-800 shadow-md rounded-lg">
                {/* Overlay que aparece no hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h3 className="text-xl font-bold">
                  Projeto a ser adicionado
                  </h3>
                </div>
              </div>
            </div>

            <button
              onClick={handlePrev} variant="outline"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <button
               onClick={handleNext} variant="outline"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              <ArrowRight size={24} />
            </button>
          </div>

            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
            <p className="text-gray-600 mb-8">
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                onClick={() => handleContact("email")}
                className="flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </Button>
              <Button
                variant="outline"
                onClick={() => handleContact("linkedin")}
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                onClick={() => handleContact("github")}
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => handleContact("instagram")}
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                Instagram
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Rennan Alves. Todos os direitos reservados.</p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default App;
