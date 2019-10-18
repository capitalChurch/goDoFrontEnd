import {menuProject, project, typeProject} from '@/model/projects/type';

const menuO2: menuProject = {
    shape: 'shapeR1', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
	textAlignment: 'left',
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const o2: project = {
    key: 'o2', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'O2',
    type: typeProject.national,
    menu: menuO2,
    coverImage: 'coverRuah', //tem que ter o arquivo na pasta, assets/images/coverHaiti.png
    projectImage: 'projectRuah', //tem que ter o arquivo na pasta, assets/images/projectHaiti.png,
    text: 'Em parceria com o Realizando Sonhos e a Cristolândia, o projeto O2 consiste na obtenção e entrega de cestas básicas para pessoas com dificuldade financeira.',
    getInvolved: 'Temos dois tipos de voluntários: os que se envolvem por meio da doação de cestas básicas e os que se comprometem a fazer o recebimento e a distribuição dos alimentos.',
    support: 'A contribuição com o O2 é feita por meio do comprometimento na doação mensal de cestas básicas para o bom andamento do projeto.'
};
