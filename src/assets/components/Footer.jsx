function Footer() {
    return (
        <footer className="font-mono p-10 w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold mb-3">Contato</h2>
                    <p>Email: leonrd2703@gmail.com</p>
                    <p>Telefone: +55 (71) 98185-1080</p>
                    <p>Endereço: Lauro de Freitas, BA</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">Links Úteis</h2>
                    <ul>
                        <li><a href="#" className="hover:underline">Sobre Mim</a></li>
                        <li><a href="#" className="hover:underline">Habilidades</a></li>
                        <li><a href="#" className="hover:underline">Portfólio</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">Me siga</h2>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.linkedin.com/in/leonardo-alves-moreno-045488216" target="_blank" className="hover:text-gray-300">Linkdin</a>
                        <a href="https://github.com/1LeoAlves" target="_blank" className="hover:text-gray-300">Github</a>
                        <a href="#" className="hover:text-gray-300" target="_blank">Twitter</a>
                        <a href="#" className="hover:text-gray-300" target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center border-t border-gray-400 pt-4">
                <p>&copy; {new Date().getFullYear()} Leonardo Alves Moreno. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;