import {menuProject, project, typeProject} from '@/model/projects/type';

const menuRealizandoSonhos: menuProject = {
    shape: 'shapeB1', //tem que ter o arquivo na pasta, assets/shapes/amarelo.png
    textAlignment: 'right',
    width: 200 //defini a quebra de linha dentro do shape, no menu
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const realizandosonhos: project = {
    key: 'realizandosonhos', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Realizando Sonhos',
    type: typeProject.national,
    menu: menuRealizandoSonhos,
    coverImage: 'coverRealizandoSonhos', //tem que ter o arquivo na pasta, assets/images/coverGuine.png
    projectImage: 'projectRealizandoSonhos', //tem que ter o arquivo na pasta, assets/images/projectMissionecas.png,
    text: 'A Associação Realizando Sonhos é uma instituição sem fins lucrativos que atua na promoção da cidadania e inclusão social, acolhendo 150 crianças e adolescentes, de 4 a 17 anos, em estado de vulneralibidade, no Varjão. Funcionamos de forma permanente, turno da manhã, tarde e noite, de segunda a sexta-feira. Realizamos atividades que contribuem para o crescimento físico, cognitivo, emocional e espiritual das crianças e adolescentes. Focamos no resgate da autoestima e na liberdade de sonhar.',
    getInvolved: 'O voluntariado neste projeto acontece por pessoas dispostas a mudar a realidade social do Varjão. Professores de música, informmática, artes e dança, bem como contadores de história e pessoas disponíveis para ajudar na organização e limpeza do espaço são muito bem-vindas. O auxílio na secretaria e uma equipe para venda e organização da loja também são áreas que precisam de voluntários.',
    support: 'Além do voluntariado, a contribuição com o projeto acontece por meio da oferta mensal de R$ 50 para ajudar ano custeio da vida das crianças e adolescentes envolvidos no Realizando Sonhos. Isso inclui o desenvolvimento físico, emocional, intelectual e espiritual deles.'
};
