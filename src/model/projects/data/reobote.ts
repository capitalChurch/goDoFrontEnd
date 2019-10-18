import {menuProject, project, typeProject} from '@/model/projects/type';

const menuReobote: menuProject = {
    shape: 'vermelho', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
};
//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const reobote: project = {
    key: 'reobote', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Reobote',
    type: typeProject.national,
    menu: menuReobote,
    coverImage: 'coverReobote', //tem que ter o arquivo na pasta, assets/images/coverHaiti.png
    projectImage: 'projectReobote', //tem que ter o arquivo na pasta, assets/images/projectHaiti.png,
    text: 'O Reobote Movement tem o objetivo de transformar vidas de pessoas e regiões de Brasília, espalhando a luz de Jesus em todo lugar. O nome do projeto faz menção à passagem de Gênesis 26:22, em que Isaque cava um poço na intenção de encontrar água e se depara com a bondade de Deus, que dá um lugar espaçoso e agradável para seu povo. Assim, nos levantamos para ser resposta para todas as localidades em que pisamos. A Atuação do Reobote é feita em quatro áreas: salas de oração, movimento nas praças e ruas de bairros, fortalecimento de igrejas locais e ajuda na educação em escolas.',
    getInvolved: 'O envolvimento no projeto pode ser feito por meio do voluntariado em diferentes áreas. Contamos com mídias sociais, que envolvem filmagem, fotografia e edições, área de educação, com elaboração e contribuição na produção de materiais, além de execução de atividades em escolas. O Reobote também tem um staff que cuida da organização e logística, time de intercessão e louvor acústico.',
    support: 'Além do voluntariado, é possível contribuir com ofertas que serão revertidas na cobertura dos deslocamentos para escolas, igrejas e treinamentos. Além disso, o valor também ajuda na compra de equipamentos e produção de materiais educativos.'
};
