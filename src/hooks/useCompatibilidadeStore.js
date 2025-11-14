// hooks/useCompatibilidadeStore.js
import { create } from 'zustand';

export const useCompatibilidadeStore = create((set) => ({
  // Seção 1: Informações Pessoais
  nomeCompleto: '',
  cpf: '',
  cidadeUF: '',
  telefones: [],
  email: '',
  profissao: '',
  redesSociais: '',

  setNomeCompleto: (nome) => set({ nomeCompleto: nome }),
  setCpf: (cpf) => set({ cpf }),
  setCidadeUF: (cidadeUF) => set({ cidadeUF }),
  setTelefones: (telefones) => set({ telefones }),
  setEmail: (email) => set({ email }),
  setProfissao: (profissao) => set({ profissao }),
  setRedesSociais: (redes) => set({ redesSociais: redes }),

  // Seção 2: Perfil do Adotante e Motivação
  motivoAdocao: '',
  outroMotivo: '',
  composicaoFamilia: '',
  moradoresConcordam: '',
  alergiaPelagem: '',
  experienciaTutor: '',
  cuidadosAnimaisAnteriores: [],

  setMotivoAdocao: (motivo) => set({ motivoAdocao: motivo }),
  setOutroMotivo: (outro) => set({ outroMotivo: outro }),
  setComposicaoFamilia: (comp) => set({ composicaoFamilia: comp }),
  setMoradoresConcordam: (valor) => set({ moradoresConcordam: valor }),
  setAlergiaPelagem: (valor) => set({ alergiaPelagem: valor }),
  setExperienciaTutor: (valor) => set({ experienciaTutor: valor }),
  setCuidadosAnimaisAnteriores: (array) => set({ cuidadosAnimaisAnteriores: array }),

  // Seção 3: Ambiente e Moradia
  tipoMoradia: '',
  tipoImovel: '',
  segurancaResidencia: [],
  localAnimal: [],
  comoAnimalFicaAusencia: '',

  setTipoMoradia: (valor) => set({ tipoMoradia: valor }),
  setTipoImovel: (valor) => set({ tipoImovel: valor }),
  setSegurancaResidencia: (array) => set({ segurancaResidencia: array }),
  setLocalAnimal: (array) => set({ localAnimal: array }),
  setComoAnimalFicaAusencia: (valor) => set({ comoAnimalFicaAusencia: valor }),

  // Seção 4: Rotina e Estilo de Vida
  horasAnimalSozinho: '',
  nivelEnergia: '',
  frequenciaPasseio: '',
  quemCuidaDuranteViagem: '',

  setHorasAnimalSozinho: (valor) => set({ horasAnimalSozinho: valor }),
  setNivelEnergia: (valor) => set({ nivelEnergia: valor }),
  setFrequenciaPasseio: (valor) => set({ frequenciaPasseio: valor }),
  setQuemCuidaDuranteViagem: (valor) => set({ quemCuidaDuranteViagem: valor }),

  // Seção 5: Perfil do Pet Ideal
  tipoPet: '',
  faixaIdadePet: '',
  portePet: '',
  temperamentoPet: [],
  cuidadoPelos: '',

  setTipoPet: (valor) => set({ tipoPet: valor }),
  setFaixaIdadePet: (valor) => set({ faixaIdadePet: valor }),
  setPortePet: (valor) => set({ portePet: valor }),
  setTemperamentoPet: (array) => set({ temperamentoPet: array }),
  setCuidadoPelos: (valor) => set({ cuidadoPelos: valor }),

  // Seção 6: Finanças e Termos de Compromisso
  estimativaGasto: '',
  condicoesFinanceiras: '',
  abertoNecessidadesEspeciais: '',
  termosCompromisso: [],

  setEstimativaGasto: (valor) => set({ estimativaGasto: valor }),
  setCondicoesFinanceiras: (valor) => set({ condicoesFinanceiras: valor }),
  setAbertoNecessidadesEspeciais: (valor) => set({ abertoNecessidadesEspeciais: valor }),
  setTermosCompromisso: (array) => set({ termosCompromisso: array }),
}));
