'use client';

import {
    Box,
    Button,
    Input,
    Select,
    Text,
    VStack,
    Checkbox,
    CheckboxGroup,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Image
} from '@chakra-ui/react';

import { useState } from 'react';

export default function FormCompatibilidadeWrapper() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {showForm ? <FormCompatibilidade setShowForm={setShowForm} /> : <TelaInicial setShowForm={setShowForm} />}
        </>
    );
}

function TelaInicial({ setShowForm }) {
    return (
        <Box
            w="100vw"
            minH="100vh"
            bg="#EFEFEF"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px={4}
            fontFamily="'Open Sans', sans-serif"
        >
            <VStack
                spacing={8}
                maxW={{ base: '90%', md: '600px' }}
                textAlign="center"
                bg="white"
                p={8}
                borderRadius="20px"
                boxShadow="lg"
            >
                <Image
                    src="/formCompatibilidade/ronronaldo-form.png"
                    alt="Mascote Feliz"
                    boxSize={{ base: '150px', md: '200px' }}
                    objectFit="contain"
                    mx="auto"
                />
                <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="#8D3767">
                    Olá, AUmigo(a)!🐾
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="#333">
                    Que bom te ver por aqui! Vamos conhecer melhor você e seu perfil para encontrar o animal ideal.
                    Responda todas as perguntas com atenção e clique no botão abaixo para começar essa aventura de adoção.
                </Text>
                <Button
                    bg="#8D3767"
                    color="white"
                    fontSize="lg"
                    px={8}
                    py={6}
                    borderRadius="10px"
                    _hover={{ bg: '#730E45' }}
                    onClick={() => setShowForm(true)}
                >
                    Começar
                </Button>
            </VStack>
        </Box>
    );
}

function FormCompatibilidade({ setShowForm }) {
    const [step, setStep] = useState(1);
    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        nome: '', cpf: '', cidade: '', telefone: '', email: '', profissao: '',
        redesSociais: '', motivacao: '', familia: '', acordoMoradores: '', alergia: '',
        experiencia: '', cuidadosAnimais: [], moradia: '', imovel: '', seguranca: [],
        localAnimal: [], ausencia: '', horasSozinho: '', nivelEnergia: '', frequenciaPasseio: '',
        viagem: '', tipoPet: '', idadePet: '', portePet: '', temperamento: [],
        cuidadosPelagem: '', gastoMensal: '', condicoesFinanceiras: '', necessidadesEspeciais: '', termos: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTouched = (name) => setTouched({ ...touched, [name]: true });

    const handleCheckboxChange = (name, values) => setFormData({ ...formData, [name]: values });

    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setFormData({ ...formData, cpf: value });
    };

    const handleTelefoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        setFormData({ ...formData, telefone: value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = () => setSubmitted(true);

    const FormInput = ({ label, name, placeholder, value, onChange, type = 'text', required = false }) => (
        <FormControl isRequired={required} isInvalid={touched[name] && !value}>
            <FormLabel>{label}</FormLabel>
            <Input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={() => handleTouched(name)}
                type={type}
                fontFamily="'Open Sans', sans-serif"
                _focus={{ borderColor: '#8D3767', boxShadow: '0 0 0 1px #8D3767' }}
            />
            <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>
    );

    const FormSelect = ({ label, name, options, value }) => (
        <FormControl isRequired isInvalid={touched[name] && !value}>
            <FormLabel>{label}</FormLabel>
            <Select
                placeholder="Selecione"
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={() => handleTouched(name)}
                fontFamily="'Open Sans', sans-serif"
                _focus={{ borderColor: '#8D3767', boxShadow: '0 0 0 1px #8D3767' }}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </Select>
            <FormErrorMessage>Campo obrigatório</FormErrorMessage>
        </FormControl>
    );

    const FormCheckboxGroup = ({ label, name, options }) => (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <CheckboxGroup value={formData[name]} onChange={(values) => handleCheckboxChange(name, values)}>
                <Stack spacing={2}>
                    {options.map((opt) => (
                        <Checkbox key={opt.value} value={opt.value} fontFamily="'Open Sans', sans-serif">{opt.label}</Checkbox>
                    ))}
                </Stack>
            </CheckboxGroup>
        </FormControl>
    );

    if (submitted) {
        return (
            <Box
                bg="#EFEFEF"
                minH="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                px={{ base: 4, md: 8 }}
                pt={{ base: 24, md: 32 }}
                fontFamily="'Open Sans', sans-serif"
            >
                <Box w={{ base: '100%', md: '800px' }} p={6} borderRadius="16px" bg="white" boxShadow="lg" textAlign="center">
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>
                        ✅ Formulário enviado com sucesso!
                    </Text>
                    <Text fontSize="md" mb={6}>
                        Obrigado por preencher o formulário de adoção responsável. Entraremos em contato em breve.
                    </Text>

                    {/* Mascote agradecendo */}
                    <Image
                        src="/formCompatibilidade/ronronaldo-form.png" // coloque o caminho da imagem do mascote
                        alt="Mascote agradecendo"
                        boxSize={{ base: '150px', md: '200px' }}
                        objectFit="contain"
                        mx="auto"
                        mb={4}
                    />
                    <Text fontSize="lg" fontWeight="semibold" color="#8D3767">
                        O Ronronaldo agradece pelo seu carinho! 🐾
                    </Text>
                </Box>
            </Box>
        );
    }

    return (
        <Box
            bg="#EFEFEF"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            px={{ base: 4, md: 8 }}
            pt={{ base: 24, md: 32 }}
            fontFamily="'Open Sans', sans-serif"
        >
            <Box w={{ base: '100%', md: '800px' }} p={6} borderRadius="16px" bg="white" boxShadow="lg">
                <VStack spacing={6} align="stretch">
                    <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" textAlign="center" color="#8D3767">
                        Formulário Completo de Adoção Responsável
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                        Este formulário nos ajudará a entender seu perfil e encontrar o animal ideal.
                    </Text>

                    {/* ==================== STEP 1 ==================== */}
                    {step === 1 && (
                        <VStack spacing={4}>
                            <FormInput label="Nome Completo" name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange} required />
                            <FormInput label="CPF" name="cpf" placeholder="000.000.000-00" value={formData.cpf} onChange={handleCpfChange} required />
                            <FormInput label="Cidade/UF" name="cidade" placeholder="Cidade/UF" value={formData.cidade} onChange={handleChange} required />
                            <FormInput label="Telefone" name="telefone" placeholder="(00) 00000-0000" value={formData.telefone} onChange={handleTelefoneChange} required />
                            <FormInput label="E-mail" name="email" placeholder="email@exemplo.com" value={formData.email} onChange={handleChange} type="email" required />
                            <FormInput label="Profissão" name="profissao" placeholder="Profissão" value={formData.profissao} onChange={handleChange} required />
                            <FormInput label="Redes sociais (opcional)" name="redesSociais" placeholder="Facebook / Instagram" value={formData.redesSociais} onChange={handleChange} />

                            <Box display="flex" justifyContent="space-between" gap={4}>
                                <Button onClick={() => setShowForm(false)} bg="#5f5f5fff" color="white" borderRadius="100px" _hover={{ bg: 'gray.500' }}>Voltar ao início</Button>
                                <Button onClick={nextStep} bg="#8D3767" color="white" borderRadius="100px" _hover={{ bg: '#730E45' }}>Próximo</Button>
                            </Box>
                        </VStack>
                    )}

                    {/* ==================== STEP 2 ==================== */}
                    {step === 2 && (
                        <VStack spacing={3}>
                            <FormSelect label="Por que deseja adotar um animal?" name="motivacao" value={formData.motivacao} options={[
                                { value: 'companhia', label: 'Para companhia' },
                                { value: 'guarda', label: 'Para guarda' },
                                { value: 'presentear', label: 'Para presentear outra pessoa' },
                                { value: 'outro', label: 'Outro motivo' }
                            ]} />
                            <FormSelect label="Quem faz parte da sua família?" name="familia" value={formData.familia} options={[
                                { value: 'sozinho', label: 'Moro sozinho(a)' },
                                { value: 'casal', label: 'Um casal' },
                                { value: 'criancas', label: 'Família com crianças (até 12 anos)' },
                                { value: 'adolescentes', label: 'Família com adolescentes/jovens' },
                                { value: 'idosos', label: 'Moro com idosos' }
                            ]} />
                            <FormSelect label="Todos os moradores estão de acordo?" name="acordoMoradores" value={formData.acordoMoradores} options={[
                                { value: 'todosSim', label: 'Sim, todos concordam' },
                                { value: 'maioria', label: 'A maioria concorda, mas há ressalvas' },
                                { value: 'algumContra', label: 'Não, alguém da casa é contra.' }
                            ]} />
                            <FormSelect label="Algum morador tem alergia?" name="alergia" value={formData.alergia} options={[
                                { value: 'nenhum', label: 'Não, ninguém.' },
                                { value: 'leve', label: 'Sim, com sintomas leves e controláveis' },
                                { value: 'forte', label: 'Sim, com sintomas fortes' },
                                { value: 'naoSei', label: 'Não temos certeza.' }
                            ]} />
                            <FormSelect label="Experiência como tutor de animais" name="experiencia" value={formData.experiencia} options={[
                                { value: 'primeiraViagem', label: 'Tutor de primeira viagem: Nunca tive um pet antes.' },
                                { value: 'algumaExperiencia', label: 'Já tive pets: Tenho alguma experiência, mas não sou um especialista.' },
                                { value: 'experiente', label: 'Tutor experiente: Tenho bastante experiência.' }
                            ]} />
                            <FormCheckboxGroup label="Cuidados com animais que já teve" name="cuidadosAnimais" options={[
                                { value: 'castrar', label: 'Castrar' },
                                { value: 'vacinar', label: 'Vacinar' },
                                { value: 'vermifugar', label: 'Vermifugar' },
                                { value: 'Nenhuma das opções', label: 'Nenhuma das opções.' },
                                { value: 'nuncaTive', label: 'Nunca tive animais antes.' }
                            ]} />

                            <Box display="flex" justifyContent="space-between" gap={4}>
                                <Button onClick={prevStep} bg="#5f5f5fff" color="white" borderRadius="100px" _hover={{ bg: 'gray.500' }}>Voltar</Button>
                                <Button onClick={nextStep} bg="#8D3767" color="white" borderRadius="100px" _hover={{ bg: '#730E45' }}>Próximo</Button>
                            </Box>
                        </VStack>
                    )}

                    {/* ==================== STEP 3 ==================== */}
                    {step === 3 && (
                        <VStack spacing={1}>
                            <FormSelect label="Tipo de moradia" name="moradia" value={formData.moradia} options={[
                                { value: 'apartamento', label: 'Apartamento' },
                                { value: 'casaFechada', label: 'Casa com quintal fechado e seguro' },
                                { value: 'casaAberta', label: 'Casa sem quintal ou quintal aberto' },
                                { value: 'sitio', label: 'Sítio / Chácara' }
                            ]} />
                            <FormSelect label="O imóvel é:" name="imovel" value={formData.imovel} options={[
                                { value: 'proprio', label: 'Próprio' },
                                { value: 'alugadoPermissao', label: 'Alugado (com permissão explícita do proprietário para animais)' },
                                { value: 'alugadoSemPermissao', label: 'Alugado (sem permissão explícita)' },
                                { value: 'cedido', label: 'Cedido / Familiar' }
                            ]} />
                            <FormCheckboxGroup label=" Pensando na segurança, sua residência possui:" name="seguranca" options={[
                                { value: 'janelasTeladas', label: 'Janelas e sacadas teladas (para apartamentos)' },
                                { value: 'murosAltos', label: 'Muros e portões altos o suficiente para evitar fugas (para casas)' },
                                { value: 'piscinaSegura', label: 'Piscina com cerca de proteção ou capa de segurança' },
                                { value: 'nenhuma', label: 'Nenhuma das opções, mas me comprometo a fazer as adaptações necessárias.' }
                            ]} />
                            <FormCheckboxGroup label="Onde o animal passará maior parte do tempo?" name="localAnimal" options={[
                                { value: 'dentro', label: 'Dentro de casa, com livre acesso' },
                                { value: 'quintal', label: 'Quintal' },
                                { value: 'areaServico', label: 'Área de serviço / Varanda' },
                                { value: 'canil', label: 'Canil' }
                            ]} />
                            <FormSelect label="Como o animal permanecerá na sua ausência ou durante a noite?" name="ausencia" value={formData.ausencia} options={[
                                { value: 'solto', label: 'Sempre solto, com acesso livre pela casa/quintal' },
                                { value: 'soltoPeriodo', label: 'Solto na maior parte do tempo, mas preso em momentos específicos' },
                                { value: 'confinado', label: 'Preso em local seguro e confortável' }
                            ]} />
                            <FormSelect label="Em média, por quantas horas o animal ficará sozinho em casa por dia?" name="horasSozinho" value={formData.horasSozinho} options={[
                                { value: 'naoFicara', label: 'Não ficará sozinho.' },
                                { value: 'menos4', label: 'Até 4 horas.' },
                                { value: 'entre4e8', label: 'De 4 a 8 horas.' },
                                { value: 'mais8', label: 'Mais de 8 horas.' }
                            ]} />

                            <Box display="flex" justifyContent="space-between" gap={4}>
                                <Button onClick={prevStep} bg="#5f5f5fff" color="white" borderRadius="100px" _hover={{ bg: 'gray.500' }}>Voltar</Button>
                                <Button onClick={nextStep} bg="#8D3767" color="white" borderRadius="100px" _hover={{ bg: '#730E45' }}>Próximo</Button>
                            </Box>
                        </VStack>
                    )}

                    {/* ==================== STEP 4 ==================== */}
                    {step === 4 && (
                        <VStack spacing={1}>
                            <FormSelect label="Qual o nível de energia que melhor combina com você e sua família?" name="nivelEnergia" value={formData.nivelEnergia} options={[
                                { value: 'baixo', label: 'Baixo: Preferimos um pet calmo, que goste de relaxar.' },
                                { value: 'medio', label: ' Médio: Gostamos de passeios diários e brincadeiras moderadas.' },
                                { value: 'alto', label: 'Alto: Buscamos um companheiro para corridas, trilhas e muitas atividades.' }
                            ]} />
                            <FormSelect label=" Com que frequência você se compromete a passear com o animal (cães)?" name="frequenciaPasseio" value={formData.frequenciaPasseio} options={[
                                { value: 'diario', label: 'Diariamente, mais de uma vez ao dia.' },
                                { value: '2a3xSemana', label: ' Diariamente, uma vez ao dia.' },
                                { value: 'umaVezSemana', label: 'De 3 a 5 vezes por semana.' },
                                { value: 'raramente', label: 'Apenas nos fins de semana.' }
                            ]} />
                            <FormSelect label="Quando a família precisar viajar, quem cuidará do animal?" name="viagem" value={formData.viagem} options={[
                                { value: 'viajara', label: 'Ele viajará com a família.' },
                                { value: 'hotel', label: 'Ficará em hotel para animais' },
                                { value: 'familiar', label: ' Um amigo ou familiar cuidará dele.' }
                            ]} />
                            <FormSelect label=" Você busca um:" name="tipoPet" value={formData.tipoPet} options={[
                                { value: 'cao', label: 'Cão' },
                                { value: 'gato', label: 'Gato' },
                                { value: 'preferencia', label: 'Não tenho preferência' }
                            ]} />
                            <FormSelect label="Qual faixa de idade mais te interessa?" name="idadePet" value={formData.idadePet} options={[
                                { value: 'filhote', label: 'Filhote' },
                                { value: 'adulto', label: 'Adulto' },
                                { value: 'idoso', label: 'Idoso' },
                                { value: 'semPreferencia', label: 'Não tenho preferência' }
                            ]} />
                            <FormSelect label="Qual o porte ideal para você?" name="portePet" value={formData.portePet} options={[
                                { value: 'pequeno', label: 'Pequeno' },
                                { value: 'medio', label: 'Médio' },
                                { value: 'grande', label: 'Grande' },
                                { value: 'semPreferencia', label: 'Não tenho preferência' }
                            ]} />
                            <FormCheckboxGroup label="Que tipo de temperamento você mais gostaria em um pet?(Marque até 3 opções)" name="temperamento" options={[
                                { value: 'calmo', label: 'Calmo e tranquilo' },
                                { value: 'bricalhao', label: 'Brincalhão e divertido' },
                                { value: 'carinhoso', label: 'Carinhoso e apegado (gosta de colo)' },
                                { value: 'autonomo', label: 'Independente e autônomo' },
                                { value: 'protetor', label: 'Protetor e alerta' },
                                { value: 'sociavel', label: 'Sociável e amigável com todos' }
                            ]} />

                            <Box display="flex" justifyContent="space-between" gap={4}>
                                <Button onClick={prevStep} bg="#5f5f5fff" color="white" borderRadius="100px" _hover={{ bg: 'gray.500' }}>Voltar</Button>
                                <Button onClick={nextStep} bg="#8D3767" color="white" borderRadius="100px" _hover={{ bg: '#730E45' }}>Próximo</Button>
                            </Box>
                        </VStack>
                    )}

                    {/* ==================== STEP 5 ==================== */}
                    {step === 5 && (
                        <VStack spacing={15}>
                            <FormSelect label="Qual sua disposição para cuidados com a pelagem?" name="cuidadosPelagem" value={formData.cuidadosPelagem} options={[
                                { value: 'facil', label: ' Prefiro pelos curtos, que exigem menos cuidado.' },
                                { value: 'difícil', label: 'Não me importo de escovar um pet com pelos médios/longos.' }
                            ]} />
                            <FormSelect label="Qual sua estimativa de gasto mensal para criar o animal?" name="gastoMensal" value={formData.gastoMensal} options={[
                                { value: 'ate150', label: 'Até R$150' },
                                { value: '151a300', label: 'Entre R$151 e R$300' },
                                { value: '300a500', label: 'Acima de R$300' }
                            ]} />
                            <FormSelect label="Você tem condições financeiras para arcar com alimentação de boa qualidade, vacinas, vermífugos e eventuais custos veterinários?" name="condicoesFinanceiras" value={formData.condicoesFinanceiras} options={[
                                { value: 'totalmente', label: 'Sim, totalmente.' },
                                { value: 'planejamento', label: ' Sim, mas com um planejamento cuidadoso.' },
                                { value: 'naoCerteza', label: 'Não tenho certeza.' }
                            ]} />
                            <FormSelect label="Você está aberto a adotar um animal com necessidades especiais (físicas, sensoriais ou que precise de medicação)?" name="necessidadesEspeciais" value={formData.necessidadesEspeciais} options={[
                                { value: 'ajudar', label: 'Sim, estou aberto(a) a entender o caso e ajudar.' },
                                { value: 'nenhumaCondicao', label: 'Prefiro, neste momento, um animal sem nenhuma condição especial conhecida.' }
                            ]} />

                            <Box display="flex" justifyContent="space-between" gap={4}>
                                <Button onClick={prevStep} bg="#5f5f5fff" color="white" borderRadius="100px" _hover={{ bg: 'gray.500' }}>Voltar</Button>
                                <Button onClick={nextStep} bg="#8D3767" color="white" borderRadius="100px" _hover={{ bg: '#730E45' }}>Próximo</Button>

                            </Box>
                        </VStack>
                    )}

                    {/* ==================== STEP 6 ==================== */}
                    {step === 6 && (
                        <VStack spacing={4}>
                            <Text fontWeight="bold">
                                Ao preencher este formulário, você declara estar ciente e concordar com os seguintes termos: (Marque para confirmar)
                            </Text>

                            <FormCheckboxGroup
                                label={<><Text as="span" fontWeight="bold">Compromisso de Longo Prazo: </Text>Entendo que cães e gatos podem viver mais de 15 anos e a adoção é uma responsabilidade por toda a vida do animal.</>}
                                name="compromissoLongoPrazo"
                                options={[{ value: 'compromissoLongoPrazo', label: 'Concordo' }]}
                            />

                            <FormCheckboxGroup
                                label={<><Text as="span" fontWeight="bold">Visita de Acompanhamento: </Text>Concordo em permitir o acesso do doador à minha casa para verificar as condições e a adaptação do animal.</>}
                                name="visitaAcompanhamento"
                                options={[{ value: 'visitaAcompanhamento', label: 'Concordo' }]}
                            />

                            <FormCheckboxGroup
                                label={<><Text as="span" fontWeight="bold">Responsabilidade de Posse: </Text>Comprometo-me a não doar o animal a terceiros sem o conhecimento e consentimento prévio do doador responsável.</>}
                                name="responsabilidadePosse"
                                options={[{ value: 'responsabilidadePosse', label: 'Concordo' }]}
                            />

                            <FormCheckboxGroup
                                label={<><Text as="span" fontWeight="bold">Taxa de Adoção: </Text>Concordo em realizar o pagamento da taxa de R$150,00 referente ao valor da castração do animal.</>}
                                name="taxaAdocao"
                                options={[{ value: 'taxaAdocao', label: 'Concordo' }]}
                            />

                            <FormCheckboxGroup
                                label={<><Text as="span" fontWeight="bold">Veracidade: </Text>Confirmo que todas as minhas respostas são verdadeiras e assumo total responsabilidade pelas informações aqui prestadas.</>}
                                name="veracidade"
                                options={[{ value: 'veracidade', label: 'Concordo' }]}
                            />

                            <Box display="flex" justifyContent="space-between" gap={4}>
                                <Button onClick={prevStep} bg="#5f5f5fff" color="white" borderRadius="100px" _hover={{ bg: 'gray.500' }}>
                                    Voltar
                                </Button>
                                <Button onClick={handleSubmit} bg="#8D3767" color="white" borderRadius="100px" _hover={{ bg: '#730E45' }}>
                                    Enviar
                                </Button>
                            </Box>
                        </VStack>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}
